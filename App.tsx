
import React, { useState } from 'react';
import { UserRole, Tab } from './types';
import Sidebar from './components/Sidebar';
import Mural from './components/Mural';
import Agendamentos from './components/Agendamentos';
import Gestantes from './components/Gestantes';
import ChatACS from './components/ChatACS';
import Vacinas from './components/Vacinas';
import ConfirmationPopUp from './components/ConfirmationPopUp';
import { User, LogIn, ChevronRight, HeartPulse } from 'lucide-react';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Mural);
  const [showPopup, setShowPopup] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState('');

  const handleBooking = (details: string) => {
    setAppointmentDetails(details);
    setShowPopup(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tab.Mural: return <Mural />;
      case Tab.Agendamentos: return <Agendamentos onConfirm={handleBooking} />;
      case Tab.Gestantes: return <Gestantes />;
      case Tab.ACS: return <ChatACS />;
      case Tab.Vacinas: return <Vacinas />;
      default: return <Mural />;
    }
  };

  if (!userRole) {
    return (
      <div className="min-h-screen bg-azul-bebe flex items-center justify-center p-6">
        <div className="bg-white rounded-[40px] shadow-2xl p-10 w-full max-w-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-verde-agua rounded-3xl flex items-center justify-center text-white shadow-xl shadow-teal-100">
               <HeartPulse size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-black text-gray-800 mb-2">Sua Saúde SJP</h1>
          <p className="text-gray-500 mb-10">O portal de saúde oficial de São José dos Pinhais</p>

          <div className="space-y-4">
            <button 
              onClick={() => setUserRole('paciente')}
              className="w-full flex items-center justify-between p-6 bg-white border-2 border-gray-50 rounded-3xl hover:border-verde-agua group transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-teal-50 group-hover:text-verde-agua transition-colors">
                  <User size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Sou Paciente</p>
                  <p className="text-xs text-gray-400">Acesse suas consultas e vacinas</p>
                </div>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-verde-agua transition-colors" />
            </button>

            <button 
              onClick={() => setUserRole('profissional')}
              className="w-full flex items-center justify-between p-6 bg-white border-2 border-gray-50 rounded-3xl hover:border-verde-agua group transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-teal-50 group-hover:text-verde-agua transition-colors">
                  <LogIn size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Sou Profissional</p>
                  <p className="text-xs text-gray-400">Gerencie atendimentos e mural</p>
                </div>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-verde-agua transition-colors" />
            </button>
          </div>
          
          <p className="mt-10 text-[10px] text-gray-400 uppercase font-black tracking-widest">Prefeitura de São José dos Pinhais</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        userRole={userRole}
        onLogout={() => setUserRole(null)} 
      />
      <main className="flex-1 ml-64 p-10 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
      {showPopup && (
        <ConfirmationPopUp 
          details={appointmentDetails} 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </div>
  );
};

export default App;
