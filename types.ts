
export type UserRole = 'paciente' | 'profissional' | null;

export enum Tab {
  Mural = 'mural',
  Agendamentos = 'agendamentos',
  Gestantes = 'gestantes',
  ACS = 'acs',
  Vacinas = 'vacinas'
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'dengue' | 'vacina' | 'preventivo' | 'geral';
}

export interface Vaccine {
  id: string;
  name: string;
  dateTaken?: string;
  status: 'completa' | 'pendente' | 'atrasada';
  dueDate?: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'acs';
  text: string;
  timestamp: Date;
}

export interface Appointment {
  id: string;
  specialty: string;
  type: 'medico' | 'dentista';
  date: string;
  time: string;
  status: 'confirmado' | 'pendente';
}
