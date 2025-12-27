
import React from 'react';
import { Syringe, CheckCircle2, AlertCircle, Clock, Download } from 'lucide-react';
import { MOCK_VACCINES } from '../constants';

const Vacinas: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Carteira de Vacinação Digital</h2>
          <p className="text-gray-500">Acompanhe seu histórico vacinal e pendências.</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
          <Download size={20} />
          <span>Baixar PDF</span>
        </button>
      </header>

      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-bold">Vacina / Imunizante</th>
              <th className="px-6 py-4 font-bold">Data de Aplicação</th>
              <th className="px-6 py-4 font-bold">Próxima Dose</th>
              <th className="px-6 py-4 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_VACCINES.map((v) => (
              <tr key={v.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      v.status === 'completa' ? 'bg-teal-50 text-teal-600' : 
                      v.status === 'atrasada' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                    }`}>
                      <Syringe size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm">{v.name}</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-gray-600">
                  {v.dateTaken || <span className="text-gray-300">---</span>}
                </td>
                <td className="px-6 py-5 text-sm text-gray-600">
                  {v.dueDate || <span className="text-gray-300">Esquema Completo</span>}
                </td>
                <td className="px-6 py-5">
                  <div className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase w-fit ${
                    v.status === 'completa' ? 'bg-teal-50 text-teal-600' : 
                    v.status === 'atrasada' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {v.status === 'completa' ? <CheckCircle2 size={12} /> : 
                     v.status === 'atrasada' ? <AlertCircle size={12} /> : <Clock size={12} />}
                    <span>{v.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-verde-agua p-6 rounded-3xl text-white shadow-lg shadow-teal-100">
           <h4 className="font-bold text-lg mb-2">Tudo em dia!</h4>
           <p className="text-white/80 text-sm">Você completou o esquema vacinal básico. Parabéns por cuidar da sua saúde e da comunidade!</p>
        </div>
        <div className="bg-azul-bebe p-6 rounded-3xl">
           <h4 className="font-bold text-blue-900 text-lg mb-2">Por que vacinar?</h4>
           <p className="text-blue-800/60 text-sm">As vacinas protegem você e todos à sua volta contra doenças graves que já foram erradicadas ou controladas.</p>
        </div>
      </div>
    </div>
  );
};

export default Vacinas;
