import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import {FaCircleNotch} from 'react-icons/fa'

const Journey = () => {
  const journeyData = [
    { year: "2022", technology: "HTML, CSS & JAVASCRIPT", description: "Started with the basics of web development, mastering the structure, styling and interaction of web pages." },
    { year: "2023", technology: "React.js", description: "Learnt React.js to build dynamic  & fast single-page applications." },
    { year: "2023", technology: "Tailwind CSS", description: "Adopted Tailwind CSS for utility-first styling and rapid UI development." },
    { year: "2023", technology: "Firebase", description: "Integrated Firebase for real-time databases and user authentication in web apps." },

    { year: "2024", technology: "Next.js", description: "Learnt Next.js for server-side rendering & building full-stack applications." },
    { year: "2024", technology: "Node.js", description: "Learnt little about node.js but switched to python" },
    { year: "2024", technology: "Python", description: "Expanded into Python for robust backend logic, data analysis, and general use" },
    { year: "2024", technology: "Django", description: "Learnt Django for building full-stack native django apps" },
    { year: "2024", technology: "Django rest Framework", description: "Learnt Django rest framework for building robust apis" },
    { year: "2024", technology: "FastApi", description: "Learnt FastApi for building fast & robust python apps " },
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
