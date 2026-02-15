
import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { BUSINESS_INFO } from '../constants';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a href="#inicio" className="hover:opacity-90 transition-opacity">
            <Logo height={45} />
          </a>

          <div className="hidden md:flex items-center space-x-10">
            <a href="#inicio" className="text-xs font-bold tracking-widest hover:text-red-600 transition-colors uppercase">Início</a>
            <a href="#servicos" className="text-xs font-bold tracking-widest hover:text-red-600 transition-colors uppercase">Serviços</a>
            <a href="#localizacao" className="text-xs font-bold tracking-widest hover:text-red-600 transition-colors uppercase">Localização</a>
            <a 
              href={BUSINESS_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded text-xs font-black tracking-tighter transition-all transform hover:scale-105 shadow-lg shadow-red-600/20"
            >
              AGENDAR AGORA
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-zinc-100 p-2 focus:outline-none"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              <Icon name={isOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Content */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 top-24 bg-black/80 backdrop-blur-sm z-[-1] animate-in fade-in duration-300 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="md:hidden bg-zinc-950 border-b border-zinc-800 animate-in slide-in-from-top duration-300 shadow-2xl">
            <div className="px-4 pt-4 pb-8 space-y-2">
              <a 
                href="#inicio" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-5 text-lg font-bold brand-font border-b border-zinc-900 hover:text-red-600 transition-colors uppercase tracking-wider"
              >
                Início
              </a>
              <a 
                href="#servicos" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-5 text-lg font-bold brand-font border-b border-zinc-900 hover:text-red-600 transition-colors uppercase tracking-wider"
              >
                Serviços
              </a>
              <a 
                href="#localizacao" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-5 text-lg font-bold brand-font border-b border-zinc-900 hover:text-red-600 transition-colors uppercase tracking-wider"
              >
                Localização
              </a>
              <div className="pt-6">
                <a 
                  href={BUSINESS_INFO.whatsapp} 
                  className="block w-full text-center bg-red-600 py-6 font-bold text-xl tracking-wider brand-font hover:bg-red-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FALAR NO WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
