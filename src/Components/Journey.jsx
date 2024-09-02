import React from 'react';

const Journey = () => {
  const journeyData = [
    { year: "2022", technology: "HTML & CSS", description: "Started with the basics of web development, mastering the structure and styling of web pages." },
    { year: "2022", technology: "JavaScript", description: "Dived into JavaScript to add interactivity and dynamic functionality to websites." },
    { year: "2023", technology: "React.js", description: "Learned React.js to build dynamic, responsive single-page applications." },
    { year: "2023", technology: "Tailwind CSS", description: "Adopted Tailwind CSS for utility-first styling and rapid UI development." },
    { year: "2023", technology: "Firebase", description: "Integrated Firebase for real-time databases and user authentication in web apps." },
    { year: "2024", technology: "Next.js", description: "Learned Next.js for server-side rendering and building full-stack applications." },
    { year: "2024", technology: "Node.js", description: "Enhanced backend skills with Node.js for building scalable, event-driven servers." },
    { year: "2024", technology: "Python", description: "Expanded into Python for backend logic, data analysis, and scripting." },
    { year: "2024", technology: "Django", description: "Mastered Django for building robust and scalable backend web applications." },


  ];

  return (
    <div className="max-w-4xl mx-auto p-6 pt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-8">My Learning Journey</h2>
      <div className="relative">
        {journeyData.map((entry, index) => (
          <div key={index} className="mb-12 flex items-start">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-400"></div>
            {/* Timeline Marker */}
            <div className="relative z-10 bg-[#dddddd] rounded-full h-3 w-3 mt-1.5 mr-3"></div>
            {/* Timeline Content */}
            <div className="pl-12">
              <h3 className="text-xl font-bold text-blue-900">{entry.year}</h3>
              <h4 className="text-lg font-medium text-blue-400">{entry.technology}</h4>
              <p className="text-[#e2e2e2]">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;