
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Icon } from './Icon';

export const Info: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-red-600 font-bold tracking-widest mb-2">VENHA NOS VISITAR</h2>
            <h3 className="text-4xl font-bold brand-font mb-8">Informações de Contato</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                  <Icon name="MapPin" className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Endereço</h4>
                  <p className="text-zinc-400">{BUSINESS_INFO.address}</p>
                  <a 
                    href={BUSINESS_INFO.addressLink} 
                    target="_blank" 
                    className="text-red-600 text-sm font-bold mt-2 inline-block hover:underline"
                  >
                    COMO CHEGAR
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                  <Icon name="Phone" className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefone</h4>
                  <p className="text-zinc-400">{BUSINESS_INFO.phone}</p>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
                    className="text-red-600 text-sm font-bold mt-2 inline-block hover:underline"
                  >
                    LIGAR AGORA
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                  <Icon name="Clock" className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                  <div className="text-zinc-400 space-y-1">
                    <p className="flex justify-between w-64">
                      <span>Seg à Sex:</span>
                      <span className="text-white font-semibold">{BUSINESS_INFO.hours.week}</span>
                    </p>
                    <p className="flex justify-between w-64">
                      <span>Sábado:</span>
                      <span className="text-white font-semibold">{BUSINESS_INFO.hours.sat}</span>
                    </p>
                    <p className="flex justify-between w-64">
                      <span>Domingo:</span>
                      <span className="text-red-600">Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[500px] border border-zinc-800 shadow-2xl group">
            {/* Google Maps Interactive Iframe */}
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.2)' }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Alpha Lub Center"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100"
            />
            
            {/* Subtle overlay hint that disappears on hover */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-zinc-800 text-white text-xs font-bold brand-font pointer-events-none group-hover:opacity-0 transition-opacity">
               MAPA INTERATIVO
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
