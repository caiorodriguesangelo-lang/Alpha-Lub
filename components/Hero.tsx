
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Icon } from './Icon';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1632823471565-1ec2c63db7f5?auto=format&fit=crop&q=80&w=1920" 
          alt="Oficina Mecânica Moderna" 
          className="w-full h-full object-cover opacity-40 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-red-600 mb-4 font-bold tracking-widest text-sm uppercase animate-pulse">
            <div className="h-px w-8 bg-red-600"></div>
            Excelência em Lubrificação
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            CUIDANDO DO SEU <br />
            <span className="text-red-600 text-glow-red">MOTOR</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-lg">
            Troca de óleo rápida e eficiente em Barueri. Prolongue a vida útil do seu veículo com os melhores lubrificantes do mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={BUSINESS_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-red-600/20"
            >
              <Icon name="MessageSquare" size={20} />
              AGENDAR VIA WHATSAPP
            </a>
            <a 
              href="#servicos"
              className="border border-zinc-700 hover:bg-zinc-800 text-white px-8 py-4 rounded font-bold flex items-center justify-center gap-2 transition-all"
            >
              NOSSOS SERVIÇOS
              <Icon name="ChevronRight" size={18} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-zinc-500">
            <div className="flex items-center gap-2">
              <Icon name="Clock" className="text-red-600" size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider">Aberto hoje até as 18:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" className="text-red-600" size={18} />
              <span className="text-xs font-semibold uppercase tracking-wider">Barueri - SP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Quick Info Bottom */}
      <div className="absolute bottom-0 right-0 w-full lg:w-1/3 bg-red-600 p-8 hidden lg:block skew-x-[-12deg] translate-x-12">
        <div className="skew-x-[12deg] flex justify-around">
          <div className="text-center">
            <div className="text-3xl font-bold text-white brand-font tracking-tighter">100%</div>
            <div className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Qualidade</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white brand-font tracking-tighter">BARUERI</div>
            <div className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Localização</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white brand-font tracking-tighter">EXPRESS</div>
            <div className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Atendimento</div>
          </div>
        </div>
      </div>
    </section>
  );
};
