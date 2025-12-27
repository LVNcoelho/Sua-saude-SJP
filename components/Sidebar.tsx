
import React from 'react';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Baby, 
  MessageCircle, 
  Syringe, 
  LogOut,
  User
} from 'lucide-react';
import { Tab, UserRole } from '../types';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  userRole: UserRole;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, userRole, onLogout }) => {
  const menuItems = [
    { id: Tab.Mural, label: 'Mural de Avisos', icon: LayoutDashboard },
    { id: Tab.Agendamentos, label: 'Agendamentos', icon: CalendarCheck },
    { id: Tab.Gestantes, label: 'Pré-Natal', icon: Baby },
    { id: Tab.ACS, label: 'Falar com ACS', icon: MessageCircle },
    { id: Tab.Vacinas, label: 'Minhas Vacinas', icon: Syringe },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col fixed left-0 top-0 z-10">
      <div className="p-6 border-b border-gray-100 flex items-center space-x-2">
        <div className="w-10 h-10 bg-verde-agua rounded-lg flex items-center justify-center text-white">
          <Syringe size={24} />
        </div>
        <div>
          <h1 className="font-bold text-gray-800 text-lg leading-tight">Sua Saúde</h1>
          <p className="text-verde-agua font-bold text-xs">SJP</p>
        </div>
      </div>

      <div className="flex-1 py-4 px-3 space-y-1">
        <div className="px-3 mb-4 flex items-center space-x-3 p-2 bg-azul-bebe rounded-xl">
           <div className="w-8 h-8 rounded-full bg-verde-agua flex items-center justify-center text-white">
             <User size={16} />
           </div>
           <div className="overflow-hidden">
             <p className="text-xs font-semibold text-gray-700 truncate capitalize">{userRole}</p>
             <p className="text-[10px] text-gray-500">Unidade: Central</p>
           </div>
        </div>

        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeTab === item.id
                ? 'bg-verde-agua text-white shadow-md shadow-teal-100'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
