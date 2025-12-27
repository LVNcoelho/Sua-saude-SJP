
import React, { useState } from 'react';
// Added missing Info import
import { Calendar, User, Stethoscope, BriefcaseMedical, CheckCircle, Clock, Info } from 'lucide-react';

interface AgendamentosProps {
  onConfirm: (details: string) => void;
}

const Agendamentos: React.FC<AgendamentosProps> = ({ onConfirm }) => {
  const [activeSubTab, setActiveSubTab] = useState<'medico' | 'dentista'>('medico');
  const [formData, setFormData] = useState({
    especialidade: '',
    data: '',
    horario: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = `${activeSubTab === 'medico' ? 'Consulta Médica' : 'Consulta Odontológica'} - ${formData.especialidade} em ${formData.data} às ${formData.horario}`;
    onConfirm(details);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <header>
        <h2 className="text-2xl font-bold text-gray-800">Agendamentos</h2>
        <p className="text-gray-500">Escolha o serviço desejado e reserve seu horário.</p>
      </header>

      <div className="flex space-x-4 p-1 bg-gray-100 rounded-2xl w-fit">
        <button
          onClick={() => setActiveSubTab('medico')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
            activeSubTab === 'medico' ? 'bg-white text-verde-agua shadow-sm' : 'text-gray-500'
          }`}
        >
          <Stethoscope size={20} />
          <span>Consulta Médica</span>
        </button>
        <button
          onClick={() => setActiveSubTab('dentista')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
            activeSubTab === 'dentista' ? 'bg-white text-verde-agua shadow-sm' : 'text-gray-500'
          }`}
        >
          <BriefcaseMedical size={20} />
          <span>Marcar Dentista</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Calendar className="text-verde-agua" size={24} />
            Preencha os Dados
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Especialidade</label>
              <select 
                required
                className="w-full p-4 bg-gray-50 border-none rounded-2xl text-gray-800 focus:ring-2 focus:ring-verde-agua"
                value={formData.especialidade}
                onChange={(e) => setFormData({...formData, especialidade: e.target.value})}
              >
                <option value="">Selecione uma especialidade</option>
                {activeSubTab === 'medico' ? (
                  <>
                    <option value="Clinico Geral">Clínico Geral</option>
                    <option value="Pediatria">Pediatria</option>
                    <option value="Ginecologia">Ginecologia</option>
                    <option value="Cardiologia">Cardiologia</option>
                  </>
                ) : (
                  <>
                    <option value="Odontologia Geral">Odontologia Geral</option>
                    <option value="Limpeza">Limpeza / Prevenção</option>
                    <option value="Extração">Extração</option>
                  </>
                )}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                <input 
                  type="date" 
                  required
                  className="w-full p-4 bg-gray-50 border-none rounded-2xl text-gray-800 focus:ring-2 focus:ring-verde-agua"
                  value={formData.data}
                  onChange={(e) => setFormData({...formData, data: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                <input 
                  type="time" 
                  required
                  className="w-full p-4 bg-gray-50 border-none rounded-2xl text-gray-800 focus:ring-2 focus:ring-verde-agua"
                  value={formData.horario}
                  onChange={(e) => setFormData({...formData, horario: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-verde-agua text-white font-bold rounded-2xl hover:bg-teal-500 transition-all shadow-lg shadow-teal-100 flex items-center justify-center space-x-2"
            >
              <CheckCircle size={20} />
              <span>Agendar Consulta</span>
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-azul-bebe rounded-3xl p-6 border border-blue-50">
            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Info size={18} /> Informações Importantes
            </h4>
            <ul className="space-y-3 text-sm text-blue-800/80">
              <li>• Chegue com 15 minutos de antecedência.</li>
              <li>• Traga seu Cartão do SUS e Documento com Foto.</li>
              <li>• Se não puder comparecer, cancele com 24h de antecedência.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-4">Próximos Agendamentos</h4>
            <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-verde-agua rounded-lg text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Clínico Geral</p>
                  <p className="text-xs text-gray-500">UBS Central • 10/11 às 14:30</p>
                </div>
              </div>
              <span className="text-[10px] uppercase font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">Confirmado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendamentos;
