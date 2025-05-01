"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SidebarComponent from "@/component/sidebar/teacherSidebar";
import login from "../../../public/assets/login.png"
import { Book, Presentation, Users, GraduationCap, FileText, Microscope } from "lucide-react";

// Updated Data for Teacher Dashboard
const teacherProgressData = [
    { subject: 'English', hoursTeaching: 12 },
    { subject: 'Physics', hoursTeaching: 8 },
    { subject: 'Mathematics', hoursTeaching: 10 },
    { subject: 'Chemistry', hoursTeaching: 6 },
];

const assignedClasses = [
    { name: 'Advanced Physics', students: 45, progress: '75%' },
    { name: 'Organic Chemistry', students: 38, progress: '60%' },
    { name: 'Calculus', students: 52, progress: '85%' },
    { name: 'Biology Research', students: 30, progress: '50%' },
];

const recommendedResources = [
    { 
        name: 'Advanced Teaching Strategies', 
        description: 'Modern pedagogical approaches for STEM education.', 
        completionRate: '30%' 
    },
    { 
        name: 'Curriculum Development', 
        description: 'Innovative methods for designing engaging course content.', 
        completionRate: '45%' 
    },
    { 
        name: 'Educational Technology', 
        description: 'Integrating digital tools in classroom learning.', 
        completionRate: '55%' 
    },
];

const TeacherIntegratedDashboard: React.FC = () => {
    const teacherName = useSelector((state: RootState) => state.teacher.teacher);
    console.log(teacherName);

    // Classroom Configuration
    const classRooms = [
        { 
            name: 'English Class', 
            roomID: 'english', 
            icon: <Book className="w-6 h-6 mr-2" /> 
        },
        { 
            name: 'Physics Class', 
            roomID: 'phy', 
            icon: <Microscope className="w-6 h-6 mr-2" /> 
        },
        { 
            name: 'Mathematics Class', 
            roomID: 'math', 
            icon: <GraduationCap className="w-6 h-6 mr-2" /> 
        },
        { 
            name: 'Chemistry Class', 
            roomID: 'chem', 
            icon: <Presentation className="w-6 h-6 mr-2" /> 
        }
    ];

    // Classroom Joining Handler
    const handleJoinClass = (roomID: string) => {
        console.log("Redirecting to:", process.env.NEXT_PUBLIC_LOCAL);
        window.location.replace(`${process.env.NEXT_PUBLIC_LOCAL}/?role=teacher&roomID=${roomID}&userID=${teacherName?.firstName}`);
    };

    return (
        <div className="flex h-screen bg-gray-900">
            <SidebarComponent />
            <div className="flex-1 p-10 overflow-y-auto dark:bg-neutral-800">
                {/* User Welcome Section */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        Welcome back, <br /> 
                        <span className="text-4xl">{teacherName?.firstName || 'Teacher'} 👋</span>
                    </h2>
                    <div className="flex items-center text-gray-300">
                        <Image
                            src={login}
                            className="flex-shrink-0 rounded-full mr-4"
                            width={75}
                            height={75}
                            alt="Avatar"
                        />
                        <span className="text-2xl">{teacherName?.firstName || 'Teacher'} {teacherName?.lastName || ''}</span>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                        { icon: <Users className="w-8 h-8 text-blue-400" />, label: 'Total Students', value: 150 },
                        { icon: <FileText className="w-8 h-8 text-green-400" />, label: 'Courses', value: 6 },
                        { icon: <Presentation className="w-8 h-8 text-purple-400" />, label: 'Active Classes', value: 4 },
                    ].map((stat, index) => (
                        <div key={index} className="bg-gray-700 shadow-md rounded-lg p-6 flex items-center">
                            <span className="mr-4">{stat.icon}</span>
                            <div>
                                <p className="text-3xl font-bold text-white">{stat.value}</p>
                                <p className="text-gray-300">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Improved Classroom Buttons Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Start Your Classes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {classRooms.map((classroom) => (
                            <button 
                                key={classroom.roomID}
                                onClick={() => handleJoinClass(classroom.roomID)}
                                className="
                                    flex items-center justify-center 
                                    px-4 py-3 
                                    bg-gradient-to-r 
                                    from-gray-600 to-gray-700 
                                    text-white 
                                    rounded-lg 
                                    shadow-md 
                                    hover:from-gray-700 hover:to-gray-800 
                                    transition-all 
                                    duration-300 
                                    transform 
                                    hover:scale-105
                                    focus:outline-none 
                                    focus:ring-2 
                                    focus:ring-gray-500
                                "
                            >
                                {classroom.icon}
                                {classroom.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Assigned Classes Section */}
                <div className="bg-gray-700 shadow-md rounded-lg mb-8">
                    <div className="p-6 border-b border-gray-600">
                        <h3 className="text-xl font-semibold text-white">Assigned Classes</h3>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {assignedClasses.map((cls, index) => (
                                <div 
                                    key={index} 
                                    className="
                                        p-4 
                                        border border-gray-600 
                                        rounded-lg 
                                        shadow-md 
                                        bg-gray-800 
                                        transition-all 
                                        duration-300 
                                        hover:scale-105
                                    "
                                >
                                    <h4 className="text-lg font-semibold text-white">{cls.name}</h4>
                                    <div className="mt-2 text-gray-300">
                                        <p>Students: {cls.students}</p>
                                        <p>Progress: {cls.progress}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommended Resources Section */}
                <div className="bg-gray-700 shadow-md rounded-lg">
                    <div className="p-6 border-b border-gray-600">
                        <h3 className="text-3xl font-semibold text-white">Professional Development</h3>
                    </div>
                    <div className="p-6 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {recommendedResources.map((resource, index) => (
                            <div 
                                key={index} 
                                className="
                                    p-4 
                                    border border-gray-600 
                                    rounded-lg 
                                    shadow-md 
                                    bg-gray-800 
                                    transition-all 
                                    duration-300 
                                    hover:scale-105
                                "
                            >
                                <h4 className="text-lg font-semibold text-white">{resource.name}</h4>
                                <p className="text-gray-300 mt-2">{resource.description}</p>
                                <div className="mt-4">
                                    <span className="text-blue-400 font-semibold">
                                        Completion: {resource.completionRate}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherIntegratedDashboard;