import React from 'react';
import { useState } from 'react';
import { Code, Server } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'frontend',
    title: 'FRONT-END DEVELOPMENT',
    icon: Code,
    description: 'Transform your ideas into engaging, user-friendly websites with my front-end development skills. I specialize in crafting responsive, visually appealing, and performance-optimized websites using the latest technologies. From interactive user interfaces to seamless cross-browser compatibility, I ensure your website looks great and functions flawlessly on all devices.',
    activeColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    textColor: 'text-blue-500'
  },
  {
    id: 'backend',
    title: 'BACK-END DEVELOPMENT',
    icon: Server,
    description: 'Ensure your website\'s core functions smoothly with my back-end development expertise. I build robust server-side solutions that handle data management, user authentication, and API integrations efficiently. Leveraging the latest frameworks and technologies, I create scalable and secure back-end systems that power your website\'s functionality and deliver a seamless user experience.',
    activeColor: 'bg-blue-700',
    hoverColor: 'hover:bg-blue-800',
    textColor: 'text-blue-300'
  }
];

const ServiceButton = ({ service, isActive, onClick }) => {
  const Icon = service.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all duration-300 ease-in-out
        ${isActive ? service.activeColor : 'bg-gray-800'} 
        ${service.hoverColor}
        hover:scale-105 text-white`}
      aria-pressed={isActive}
    >
      <span className="font-medium font-prompt">{service.title}</span>
      <Icon className="w-5 h-5" />
    </button>
  );
};

const ServicesComp = () => {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0].id);

  const currentService = SERVICES_DATA.find(service => service.id === activeService);

  return (
    <section className="bg-gray-900 text-white py-16 min-h-[75vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold font-prompt text-center mb-12">Services</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Services Selection Panel */}
          <div className="md:w-1/2 space-y-4 p-4 md:p-8">
            {SERVICES_DATA.map((service) => (
              <ServiceButton
                key={service.id}
                service={service}
                isActive={activeService === service.id}
                onClick={() => setActiveService(service.id)}
              />
            ))}
          </div>

          {/* Service Description Panel */}
          <div className="md:w-1/2 p-4 md:p-8">
            <div 
              className={`font-medium font-prompt text-md md:text-xl leading-relaxed ${currentService.textColor}`}
              key={currentService.id}
            >
              {currentService.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComp;