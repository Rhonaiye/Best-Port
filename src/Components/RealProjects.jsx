import React, { useRef, useState } from 'react';

const RealProjects = () => (
  <div className="bg-gradient-to-b font-prompt from-blue-950 to-black py-20">
    <div className="flex flex-col items-center justify-center space-y-4 mb-16 text-center px-4">
      <h2 className="font-bold text-4xl md:text-5xl text-white tracking-wider">Recent Projects</h2>
      <div className="h-1 w-32 bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 rounded-full"></div>
    </div>
    <HorizontalScrollCarousel />
  </div>
);

const HorizontalScrollCarousel = () => {
  const containerRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const scrollToCard = (index) => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.project-card-container');
      cards[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      setVisibleIndex(index);
    }
  };

  return (
    <section className="relative h-auto mb-20">
      <div ref={containerRef} className="overflow-x-auto flex px-4 py-8 scrollbar-hide snap-x snap-mandatory">
        {cards.map((card) => (
          <div key={card.id} className="project-card-container min-w-[80%] sm:min-w-[450px] px-2 snap-center">
            <Card card={card} />
          </div>
        ))}
      </div>
    </section>
  );
};

const Card = ({ card }) => (
  <div className="project-card w-full h-[420px] rounded-2xl bg-gradient-to-br from-indigo-900/40 via-violet-900/30 to-blue-900/20 backdrop-blur-sm border border-indigo-500/20 p-8 flex flex-col justify-between text-white overflow-hidden relative group">
    <div className="flex justify-between items-start">
      <span className="text-xs font-medium tracking-wider py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300">
        {card.id === 4 ? "UPCOMING" : "DEPLOYED"}
      </span>
      {card.link && (
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white flex items-center space-x-1 text-sm"
          aria-label={`Visit ${card.title}`}
        >
          <span>Visit</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      )}
    </div>
    <div>
      <h3 className="text-3xl font-bold mb-3 group-hover:text-indigo-300 transition-colors duration-300">{card.title}</h3>
      <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
    </div>
    {card.id === 4 ? (
      <div className="flex justify-center">
        <a href="https://wa.me/message/ZTMSFLMIRNXTM1">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-full text-white font-medium transition shadow-lg shadow-indigo-500/20">
            Start Project
          </button>
        </a>
      </div>
    ) : (
      <p className="text-sm text-indigo-200/80">Click the link icon to view this project live.</p>
    )}
  </div>
);

const cards = [
  { title: "Netflix Clone", id: 1, link: "https://old-netflix-clone.vercel.app/" },
  { title: "Company SPA", id: 2, link: "https://spa-one-nu.vercel.app/" },
  { title: "SaaS Pricing Page", id: 3, link: "https://landing-page-mu-opal.vercel.app/" },
  { title: "Your Project Next?", id: 4, link: 'https://wa.me/message/ZTMSFLMIRNXTM1' }
];

export default RealProjects;
