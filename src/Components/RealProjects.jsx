import React, { useRef } from 'react';

const RealProjects = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-black py-20">
      <div className="flex flex-col items-center justify-center space-y-4 mb-12">
        <h2 className="font-bold text-4xl text-white tracking-wider">
          Recent Projects
        </h2>
        <div className="w-24 h-1 bg-violet-500 rounded-full"></div>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const carouselRef = useRef(null);

  return (
    <section className="relative h-[60vh] mb-[20vh]">
      <div className="overflow-x-auto flex justify-start px-4 py-8">
        <div ref={carouselRef} className="flex gap-8">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="relative w-[350px] h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600/20 to-blue-900/30">
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="w-full flex justify-end">
          {card.link && (
            <div className="bg-white/10 backdrop-blur-md rounded-full p-2">
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-violet-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">{card.title}</h3>
          <div className="h-0.5 bg-gradient-to-r from-violet-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Netflix Clone",
    id: 1,
    link: "https://old-netflix-clone.vercel.app/",
  },
  {
    title: "Company SPA",
    id: 2,
    link: "https://naxtech-h6pid19p6-rhonaiyes-projects.vercel.app/"
  },
  {
    title: "Currency Converter",
    id: 3,
    link: "https://currency-converter-bice-tau.vercel.app/"
  },
  {
    title: "Your Project Next?",
    id: 4
  }
];

export default RealProjects;
