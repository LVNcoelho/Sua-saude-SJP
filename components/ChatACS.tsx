
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Phone, Video, MoreVertical } from 'lucide-react';
import { Message } from '../types';

const ChatACS: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'acs', text: 'Olá! Sou a Maria, sua Agente Comunitária de Saúde. Como posso te ajudar hoje?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMsg]);
    setInputText('');

    // Mock response
    setTimeout(() => {
      const acsResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'acs',
        text: 'Vou verificar isso agora mesmo para você. Só um momento!',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, acsResponse]);
    }, 1500);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] animate-fadeIn">
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-verde-agua flex items-center justify-center text-white border-4 border-white shadow-sm">
            <User size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Maria da Silva</h2>
            <p className="text-xs text-verde-agua font-bold">Agente Comunitária (ACS)</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
            <Phone size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
            <Video size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
              msg.sender === 'user' 
                ? 'bg-verde-agua text-white rounded-tr-none shadow-md shadow-teal-50' 
                : 'bg-azul-bebe text-gray-800 rounded-tl-none'
            }`}>
              <p>{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-white/70 text-right' : 'text-gray-400'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Escreva sua mensagem..."
          className="flex-1 p-4 bg-white border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-verde-agua shadow-sm"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button 
          onClick={handleSend}
          className="p-4 bg-verde-agua text-white rounded-2xl shadow-lg shadow-teal-100 hover:bg-teal-500 transition-all active:scale-95"
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatACS;
