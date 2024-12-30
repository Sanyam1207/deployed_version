import { Server } from "socket.io";
import { createServer } from "http";
import express from 'express';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Changed to Next.js default port
        methods: ["GET", "POST"],
        credentials: true,
    }
});

const port = process.env.PORT || 4000;

// Store active users
const users = new Map();

const broadcastOnlineUsers = () => {
    const userList = Array.from(users.values());
    io.emit("updateOnlineUsers", userList);
};

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("register", (userData) => {
        // Store user data with socket ID
        users.set(socket.id, {
            username: userData.username,
            email: userData.email
        });

        // Broadcast that a new user has joined
        io.emit("message", {
            text: `${userData.username} has joined the chat`,
            username: "System",
            timestamp: new Date().toISOString()
        });

        // Update online users list
        broadcastOnlineUsers();
    });

    socket.on("sendMessage", (messageData) => {
        // Broadcast the message to all connected clients
        io.emit("message", messageData);
    });

    socket.on("disconnect", () => {
        const userData = users.get(socket.id);
        if (userData) {
            io.emit("message", {
                text: `${userData.username} has left the chat`,
                username: "System",
                timestamp: new Date().toISOString()
            });
            users.delete(socket.id);
            broadcastOnlineUsers();
        }
    });
});

app.get('/', (req, res) => {
    res.send("Chat Server Running");
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export { io, server };