
import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { Icon } from './Icon';
import { ScrollReveal } from './ScrollReveal';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-zinc-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-red-600 font-bold tracking-widest mb-2">CHECK-UP COMPLETO</h2>
          <h3 className="text-4xl md:text-5xl font-bold brand-font">Nossos Serviços Especializados</h3>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div 
                className="group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:bg-zinc-900 transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon name={service.iconName as any} size={80} />
                </div>
                
                <div className="w-14 h-14 bg-red-600/10 text-red-600 flex items-center justify-center rounded-lg mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Icon name={service.iconName as any} />
                </div>
                
                <h4 className="text-xl font-bold mb-4 brand-font tracking-wide">{service.title}</h4>
                <p className="text-zinc-500 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <a 
                  href={`${BUSINESS_INFO.whatsapp}&text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-600 text-sm font-bold hover:gap-4 transition-all mt-auto"
                >
                  SAIBA MAIS <Icon name="ArrowRight" size={16} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={300}>
          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white brand-font mb-2">Precisa de um orçamento rápido?</h4>
              <p className="text-red-100">Fale com nossa equipe técnica agora mesmo pelo WhatsApp.</p>
            </div>
            <a 
              href={BUSINESS_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white rounded font-bold hover:bg-zinc-900 transition-all flex items-center gap-2 shadow-xl"
            >
              <Icon name="MessageSquare" />
              CONVERSAR AGORA
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
