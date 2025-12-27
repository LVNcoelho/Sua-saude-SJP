
import React from 'react';
import { Baby, HeartPulse, Apple, CalendarDays, Info } from 'lucide-react';

const Gestantes: React.FC = () => {
  const currentWeek = 24;
  const totalWeeks = 40;
  const progress = (currentWeek / totalWeeks) * 100;

  return (
    <div className="space-y-8 animate-fadeIn">
      <header>
        <h2 className="text-2xl font-bold text-gray-800">Painel da Gestante</h2>
        <p className="text-gray-500">Acompanhamento completo para uma gestação saudável.</p>
      </header>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-gray-100"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 - (552.92 * progress) / 100}
                className="text-verde-agua transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black text-gray-800">{currentWeek}</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Semanas</span>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Seu bebê está do tamanho de um Melão! 🍈</h3>
            <p className="text-gray-600 leading-relaxed">
              Nesta fase, os pulmões estão começando a produzir surfactante, a substância que ajudará seu bebê a respirar por conta própria após o nascimento. 
              Ele já pode ouvir sons externos e até reagir a luzes fortes!
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-bold">2º Trimestre</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">Desenvolvimento Fetal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-azul-bebe rounded-3xl p-6">
          <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Apple size={20} /> Alimentação
          </h4>
          <p className="text-sm text-blue-800/80 mb-4">
            Aumente o consumo de ferro e cálcio. Não esqueça de beber pelo menos 2 litros de água por dia.
          </p>
          <button className="text-xs font-bold text-blue-700 underline">Ver plano alimentar</button>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CalendarDays size={20} className="text-verde-agua" /> Próxima Consulta
          </h4>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
             <div className="text-center bg-white px-2 py-1 rounded-lg border border-gray-100 min-w-[50px]">
               <p className="text-xs text-gray-400 font-bold uppercase">Nov</p>
               <p className="text-lg font-black text-gray-800">12</p>
             </div>
             <div>
               <p className="font-bold text-sm text-gray-800">Pré-Natal Mensal</p>
               <p className="text-[10px] text-gray-500">Dr. Ricardo • 08:30h</p>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HeartPulse size={20} className="text-red-400" /> Sinais de Alerta
          </h4>
          <ul className="text-xs space-y-2 text-gray-600">
            <li>• Dor de cabeça persistente</li>
            <li>• Inchaço súbito nas mãos/rosto</li>
            <li>• Redução dos movimentos do bebê</li>
          </ul>
          <button className="mt-4 text-xs font-bold text-red-500 flex items-center gap-1">
             <Info size={14} /> O que fazer?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gestantes;
