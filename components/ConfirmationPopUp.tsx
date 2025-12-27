
import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ConfirmationPopUpProps {
  details: string;
  onClose: () => void;
}

const ConfirmationPopUp: React.FC<ConfirmationPopUpProps> = ({ details, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[32px] w-full max-w-md p-10 text-center shadow-2xl animate-popIn">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="mx-auto w-24 h-24 bg-verde-agua rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-teal-100">
          <CheckCircle size={48} />
        </div>
        
        <h3 className="text-2xl font-black text-gray-800 mb-4">Sucesso!</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Seu agendamento foi realizado. Detalhes:<br/>
          <span className="font-bold text-verde-agua mt-2 block">{details}</span>
        </p>
        
        <button 
          onClick={onClose}
          className="w-full py-4 bg-verde-agua text-white font-bold rounded-2xl hover:bg-teal-500 transition-all shadow-lg shadow-teal-100"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
