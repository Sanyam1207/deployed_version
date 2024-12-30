import { HoverEffect } from "../component/ui/card-hover-effect";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export function CardHoverEffectDemo() {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: RootState) => state.translation.currentLanguage);
    return (
        <div className="bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div></div>
    );
}
export const projects = [
    {
        title: "Access Educational Content",
        description: "Explore a wide range of educational materials designed for students in rural areas. Content is aligned with the curriculum and is available in multiple languages for easy understanding."
      },
      {
        title: "Interactive Lessons",
        description: "Engage in interactive, easy-to-understand lessons that make learning fun and effective. These lessons are designed to cater to different learning styles and help students grasp concepts quickly."
      },
      {
        title: "Doubt-Solving Section",
        description: "Have your questions answered in real time through our dedicated doubt-solving section. Experts and peers collaborate to clarify any uncertainties and enhance your learning experience."
      },
      {
        title: "Track Performance and Progress",
        description: "Monitor your academic progress with detailed reports that show your strengths and areas for improvement. This feature helps you stay on track with your learning goals."
      },
      {
        title: "Access Educational Content Offline",
        description: "Download and access educational content even without an internet connection. This feature ensures uninterrupted learning in areas with limited or no connectivity."
      },
      {
        title: "AI-Personalized Recommendations",
        description: "Receive personalized content recommendations powered by AI. Our system adapts to your learning style and preferences to suggest relevant lessons and activities."
      },
      {
        title: "Feedback and Complaint System",
        description: "Provide feedback on the platform and raise any issues through our feedback and complaint system. We value your input and strive to improve the platform continuously based on your experience."
      },
      {
        title: "Student and Teacher Community for Discussions and Meetups",
        description: "Join a vibrant community where students and teachers can engage in discussions, exchange ideas, and participate in virtual meetups. Strengthen your learning through collaboration and shared knowledge."
      },
      {
        title: "AI-Based Attendance System",
        description: "Leverage our AI-powered attendance system that can be easily integrated into school infrastructure. Track student attendance efficiently, ensuring accuracy and minimizing manual effort."
      }
];

