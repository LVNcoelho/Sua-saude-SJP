
import React from 'react';
import { Campaign, Vaccine, Appointment } from './types';

export const COLORS = {
  primary: '#4FD1C5', // Verde Água
  secondary: '#E0F2FE', // Azul Bebê
  white: '#FFFFFF',
  text: '#1F2937',
  danger: '#EF4444',
  success: '#10B981',
};

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    title: 'Dia D contra a Dengue',
    description: 'Mutirão de limpeza e conscientização em todos os bairros de SJP.',
    date: '25 de Outubro',
    type: 'dengue',
  },
  {
    id: '2',
    title: 'Campanha de Preventivo',
    description: 'Exames gratuitos para mulheres de 25 a 64 anos na UBS Central.',
    date: 'Até 30 de Outubro',
    type: 'preventivo',
  },
  {
    id: '3',
    title: 'Vacinação contra Gripe',
    description: 'Público geral acima de 6 meses de idade.',
    date: 'Segunda a Sexta',
    type: 'vacina',
  }
];

export const MOCK_VACCINES: Vaccine[] = [
  { id: '1', name: 'BCG', status: 'completa', dateTaken: '12/01/2000' },
  { id: '2', name: 'Hepatite B', status: 'completa', dateTaken: '12/01/2000' },
  { id: '3', name: 'Penta (DTP/Hib/Hep B)', status: 'completa', dateTaken: '15/03/2000' },
  { id: '4', name: 'Influenza (Gripe)', status: 'pendente', dueDate: '15/11/2024' },
  { id: '5', name: 'COVID-19 - Bivalente', status: 'atrasada', dueDate: '01/05/2024' },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', specialty: 'Clínico Geral', type: 'medico', date: '2024-11-10', time: '14:30', status: 'confirmado' },
];
