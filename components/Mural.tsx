
import React, { useEffect, useState } from 'react';
import { MOCK_CAMPAIGNS } from '../constants';
import { Bell, Info, Sparkles } from 'lucide-react';
import { getHealthTips } from '../services/geminiService';

const Mural: React.FC = () => {
  const [aiTips, setAiTips] = useState<{tip: string, description: string}[]>([]);
  const [loadingTips, setLoadingTips] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      const tips = await getHealthTips("Prevenção da Dengue no Verão");
      setAiTips(tips);
      setLoadingTips(false);
    };
    fetchTips();
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn">
      <header>
        <h2 className="text-2xl font-bold text-gray-800">Mural de Avisos</h2>
        <p className="text-gray-500">Fique por dentro das campanhas de saúde da nossa cidade.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CAMPAIGNS.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className={`h-2 ${
              campaign.type === 'dengue' ? 'bg-red-400' : 
              campaign.type === 'preventivo' ? 'bg-pink-400' : 'bg-verde-agua'
            }`} />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${
                  campaign.type === 'dengue' ? 'bg-red-50 text-red-500' : 
                  campaign.type === 'preventivo' ? 'bg-pink-50 text-pink-500' : 'bg-teal-50 text-teal-500'
                }`}>
                  <Bell size={20} />
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                  {campaign.date}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{campaign.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{campaign.description}</p>
              <button className="mt-4 w-full py-2 bg-gray-50 text-verde-agua font-semibold text-sm rounded-xl hover:bg-teal-50 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-azul-bebe rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles size={120} className="text-teal-600" />
        </div>
        <div className="flex items-center space-x-2 mb-6">
          <div className="bg-white p-2 rounded-lg text-verde-agua">
            <Sparkles size={24} />
          </div>
          <h3 className="text-xl font-bold text-teal-800">Dicas Personalizadas de Saúde</h3>
        </div>

        {loadingTips ? (
          <div className="flex items-center space-x-3 text-teal-600 animate-pulse">
            <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
            <span>O assistente virtual está gerando dicas para você...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiTips.map((tip, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white/50">
                <h4 className="font-bold text-teal-800 mb-2">{tip.tip}</h4>
                <p className="text-teal-700/80 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mural;
