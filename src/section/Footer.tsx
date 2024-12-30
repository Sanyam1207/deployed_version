"use client";

import React from "react";
import { AnimatedTooltip } from "@/component/ui/animated-tooltip";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const Footer = () => {
  const { translations } = useSelector((state: RootState) => state.translation);

  return (
    <footer className="p-4 bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto">
        <div className="bg-navy-800/20 backdrop-blur-sm p-4 rounded-lg">
          <div className="flex justify-between items-center"></div>
        </div>

        <div className="mx-0 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-[#e3f3fb]">
            {translations["footer_title"] || "NavShiksha: Empowering Rural Education, Together"}
          </h1>

          <p className="mb-2">{translations["registered_office"] || "Registered Office: Boys Hostel G-114, IIT Shahdara, Delhi 110032"}</p>
          <p className="mb-2">
            <strong className="dark:text-[#719dbd]">
              {translations["registered_office_note"] || "(Yes, we take education seriously, and we're just getting started)"}
            </strong>
          </p>
          <p className="mb-2">
            {translations["email_label"] || "Email:"}{" "}
            <a
              href="mailto:contact@navshiksha.com"
              className="text-blue-500 hover:underline dark:text-[#71879f] dark:hover:text-[#8c94a4]"
            >
              contact@navshiksha.com
            </a>
          </p>
          <p className="mb-2">
            <strong className="dark:text-[#719dbd]">
              {translations["email_note"] || "(Your queries fuel our mission!)"}
            </strong>
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 dark:text-[#e3f3fb]">
            {translations["our_mission_title"] || "Our Mission"}
          </h2>
          <p className="dark:text-[#71879f]">
            {translations["our_mission"] || "NavShiksha is dedicated to bridging the educational divide in rural communities. Because quality education shouldn't be limited by geography."}
          </p>
          <p className="mb-2">
            {translations["our_mission_closing"] || "We're here to inspire, empower, and support every learner."}
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 dark:text-[#e3f3fb]">
            {translations["transparency_title"] || "Transparency and Accountability"}
          </h2>
          <p className="mb-2">
            {translations["transparency_details"] || "Our efforts are genuine, with every detail carefully managed. We're committed to building a future where education is accessible to all."}
          </p>
          <p className="mb-2">{translations["transparency_note"] || "Want to learn more? Just ask!"}</p>
          <p className="mb-2">© {new Date().getFullYear()} NavShiksha - {translations["footer_closing"] || "Advancing Education for a Better Tomorrow"}</p>
          <p className="mb-2">
            <a
              href="https://navshiksha.com"
              className="text-blue-500 hover:underline dark:text-[#71879f] dark:hover:text-[#8c94a4]"
            >
              navshiksha.com
            </a>. {translations["all_rights_reserved"] || "All Rights Reserved."}
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            {translations["meet_team_title"] || "Meet the NavShiksha Team:"}
          </h2>
          <AnimatedTooltip
            items={[
              {
                id: 1,
                name: translations["team_priyanshu"] || "Priyanshu Raj",
                designation: translations["team_priyanshu_designation"] || "Frontend Lead",
                image: "/Team-Assets/priyanshu.png",
              },
              {
                id: 2,
                name: translations["team_satyam"] || "Satyam Chettri",
                designation: translations["team_satyam_designation"] || "AI-ML Lead",
                image: "/Team-Assets/satyam.png",
              },
              {
                id: 3,
                name: translations["team_sanyam"] || "Sanyam Pandey",
                designation: translations["team_sanyam_designation"] || "Web-Dev Lead",
                image: "/Team-Assets/sanyam.png",
              },
              {
                id: 4,
                name: translations["team_ankit"] || "Ankit Lingwal",
                designation: translations["team_ankit_designation"] || "Web-3 Lead",
                image: "/Team-Assets/ankit.png",
              },
              {
                id: 5,
                name: translations["team_tanushree"] || "Tanushree Gupta",
                designation: translations["team_tanushree_designation"] || "AI-ML Lead",
                image: "/Team-Assets/tanushree.png",
              },
              {
                id: 6,
                name: translations["team_tanya"] || "Tanya Gupta",
                designation: translations["team_tanya_designation"] || "Cloud Lead",
                image: "/Team-Assets/tanya.png",
              },
            ]}
          />
          <p className="mt-4 mb-4">
            <strong>{translations["join_us_message"] || "Join us as we reimagine and reshape education for rural India!"}</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
