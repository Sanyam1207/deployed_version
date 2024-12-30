'use client'
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { jwtDecode } from 'jwt-decode';

interface Message {
  username: string;
  text: string;
  timestamp: string;
}

interface UserData {
  username: string;
  email: string;
}

const ChatComponent: React.FC = () => {
  const [socket, setSocket] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<UserData[]>([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // Get user data from token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        setUserData({
          username: decoded.username,
          email: decoded.email
        });
      } catch (error) {
        console.error('Token decode error', error);
      }
    }

    // Initialize socket connection
    const newSocket = io('http://localhost:4000', { 
      withCredentials: true 
    });

    newSocket.on('connect', () => {
      if (userData) {
        newSocket.emit('register', userData);
      }
    });

    // Listen for messages
    newSocket.on('message', (message: Message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // Listen for online users
    newSocket.on('updateOnlineUsers', (users: UserData[]) => {
      setOnlineUsers(users);
    });

    setSocket(newSocket);

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, [userData]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && socket && userData) {
      const messageData = {
        username: userData.username,
        text: inputMessage,
        timestamp: new Date().toISOString()
      };
      
      socket.emit('sendMessage', messageData);
      setInputMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Online Users Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Online Users</h2>
        {onlineUsers.map((user, index) => (
          <div key={index} className="p-2 border-b">
            {user.username}
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-2 p-2 rounded ${
                msg.username === 'System' 
                  ? 'bg-gray-200 text-center' 
                  : msg.username === userData?.username 
                    ? 'bg-blue-100 self-end' 
                    : 'bg-gray-100'
              }`}
            >
              <div className="font-bold">{msg.username}</div>
              <div>{msg.text}</div>
              <div className="text-xs text-gray-500">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form onSubmit={sendMessage} className="p-4 bg-white border-t flex">
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..." 
            className="flex-1 p-2 border rounded mr-2"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;