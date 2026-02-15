
import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';
import { getMaintenanceTips } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: 'Olá! Sou o assistente da Alpha Lub. Em que posso ajudar na manutenção do seu carro hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getMaintenanceTips(userMessage);
    setMessages(prev => [...prev, { role: 'model', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-600/30 hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <Icon name="X" /> : <Icon name="Info" size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-red-600 p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Icon name="Activity" className="text-red-600" size={16} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Assistente Alpha Lub</h4>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] text-red-100 uppercase font-bold">Online para Dicas</span>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 p-4 h-[300px] overflow-y-auto space-y-4 bg-zinc-950 scrollbar-hide"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-red-600 text-white rounded-tr-none' 
                  : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl text-zinc-100 rounded-tl-none flex gap-1 items-center">
                  <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-900 border-t border-zinc-800">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte sobre manutenção..."
                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-red-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-red-600 p-2 rounded-lg text-white hover:bg-red-700 disabled:opacity-50"
              >
                <Icon name="ArrowRight" size={18} />
              </button>
            </div>
            <p className="text-[9px] text-zinc-500 mt-2 text-center">IA orientada a dicas técnicas. Consulte nossos mecânicos.</p>
          </div>
        </div>
      )}
    </div>
  );
};
