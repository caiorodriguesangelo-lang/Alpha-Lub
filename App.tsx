
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Info } from './components/Info';
import { ChatBot } from './components/ChatBot';
import { Icon } from './components/Icon';
import { BUSINESS_INFO } from './constants';
import { ScrollReveal } from './components/ScrollReveal';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why Choose Us Ribbon */}
        <section className="bg-white py-12 relative z-20 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
              {[
                { icon: 'Droplets', text: 'Óleos Genuínos' },
                { icon: 'Clock', text: 'Serviço Expresso' },
                { icon: 'MapPin', text: 'Centro de Barueri' },
                { icon: 'CircleDot', text: 'Garantia Técnica' }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 150}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <Icon name={item.icon as any} className="text-red-600" size={24} />
                    </div>
                    <span className="text-black font-bold brand-font text-lg tracking-tight uppercase">{item.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Services />
        
        <ScrollReveal>
          <Info />
        </ScrollReveal>
      </main>

      <footer className="bg-black py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <a href="#inicio" className="hover:opacity-80 transition-opacity inline-block">
                <Logo height={60} className="mb-6" />
              </a>
              <p className="max-w-sm text-zinc-500 text-sm leading-relaxed font-medium">
                Sua referência em Barueri para serviços de lubrificação e troca de filtros com tecnologia de ponta e atendimento personalizado.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 md:gap-20">
              <div className="space-y-4">
                <h5 className="text-white font-bold text-xs tracking-[0.3em] uppercase">Navegação</h5>
                <div className="flex flex-col gap-3 text-sm text-zinc-500 uppercase font-bold tracking-widest">
                  <a href="#inicio" className="hover:text-red-600 transition-colors">Início</a>
                  <a href="#servicos" className="hover:text-red-600 transition-colors">Serviços</a>
                  <a href="#localizacao" className="hover:text-red-600 transition-colors">Contato</a>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-white font-bold text-xs tracking-[0.3em] uppercase">Contato Rápido</h5>
                <div className="flex gap-4">
                  <a 
                    href={BUSINESS_INFO.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Chamar no WhatsApp"
                    className="w-12 h-12 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all"
                  >
                      <Icon name="MessageSquare" size={20} />
                  </a>
                  <a 
                    href={BUSINESS_INFO.addressLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Ver Localização no Maps"
                    className="w-12 h-12 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-red-600 transition-all"
                  >
                      <Icon name="MapPin" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 uppercase font-bold tracking-[0.3em]">
            <p>© 2024 ALPHA LUB CENTER - BARUERI, SP.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Excelência em cada gota
            </p>
          </div>
        </div>
      </footer>

      {/* Persistent Call Actions */}
      <ChatBot />
      <a 
        href={BUSINESS_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[60] bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all md:hidden border-4 border-white/20"
      >
        <Icon name="MessageSquare" />
      </a>
    </div>
  );
};

export default App;
