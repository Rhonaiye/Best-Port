import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import {FaCircleNotch} from 'react-icons/fa'

const Journey = () => {
 const journeyData = [
    {
      year: "2021",
      technology: "HTML, CSS & JavaScript",
      description:
        "Started with the basics of web development—learning structure, styling, and interactivity of web pages.",
    },
    {
      year: "2021",
      technology: "React.js",
      description:
        "Mastered React.js for building fast and interactive single-page applications.",
    },
    {
      year: "2021",
      technology: "Tailwind CSS",
      description:
        "Adopted Tailwind CSS for utility-first styling and rapid UI development.",
    },
    {
      year: "2022",
      technology: "Firebase",
      description:
        "Used Firebase for real-time databases, hosting, and authentication in web apps.",
    },
    {
      year: "2022",
      technology: "TypeScript",
      description:
        "Transitioned to TypeScript for safer, scalable, and strongly-typed frontend and backend development.",
    },
    {
      year: "2022",
      technology: "Next.js & API Routes",
      description:
        "Built full-stack apps using Next.js with SSR, static site generation, and backend API routes.",
    },
    {
      year: "2023",
      technology: "Node.js & Express.js",
      description:
        "Developed backend services and REST APIs using Node.js and Express.js.",
    },
    {
      year: "2023",
      technology: "Socket.IO",
      description:
        "Implemented real-time features like chat, live presence, and updates using Socket.IO.",
    },
    {
      year: "2023",
      technology: "MongoDB & PostgreSQL",
      description:
        "Worked with both NoSQL (MongoDB) and SQL (PostgreSQL) databases for flexible data storage.",
    },
    {
      year: "2024",
      technology: "Python",
      description:
        "Used Python for server-side development, automation, and scripting.",
    },
    {
      year: "2024",
      technology: "Django & Django REST Framework",
      description:
        "Built scalable backend systems and APIs using Django and DRF.",
    },
    {
      year: "2024",
      technology: "FastAPI",
      description:
        "Built high-performance APIs using FastAPI with auto-generated docs and fast async handling.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-16">
      <h2 className="text-5xl font-bold text-center font-prompt bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-1 mb-[10vh]">My Learning Journey</h2>
      <Timeline mode="alternate">
        {journeyData.map((entry, index) => (
          <Timeline.Item
            key={index}
            color={index % 2 === 0 ? "blue" : "red"}
          >
            <h3 className="text-2xl font-prompt font-extrabold text-blue-600">{entry.year}</h3>
            <h4 className="text-md font-prompt font-bold text-blue-600 ">{entry.technology}</h4>
            <p className="text-blue-300 font-prompt text-sm font-extralight mb-[5vh] md:mb-[10vh]">{entry.description}</p>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Journey;
