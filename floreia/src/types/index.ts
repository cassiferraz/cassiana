// Tipos principais do FloreIA

export type UserRole = 'patient' | 'family';

export type AddictionType =
  | 'food'
  | 'medicine'
  | 'drugs'
  | 'shopping'
  | 'gambling'
  | 'alcohol'
  | 'other';

export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export type Language = 'pt-BR' | 'es' | 'en';

export interface User {
  id: string;
  name: string;
  photo?: string;
  role: UserRole;
  addictions: AddictionType[];
  language: Language;
  emergencyContacts: EmergencyContact[];
  createdAt: string;
  completedOnboarding: boolean;
  linkedUserId?: string; // ID do familiar/paciente vinculado
  shareDataWithLinked: boolean;
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
}

export interface MoodEntry {
  id: string;
  userId: string;
  date: string;
  mood: MoodLevel;
  feeling: string;
  notes?: string;
  triggers?: string[];
}

export interface Achievement {
  id: string;
  userId: string;
  type: 'daily' | 'weekly' | 'monthly';
  daysClean: number;
  earnedAt: string;
  addictionType: AddictionType;
}

export interface Technique {
  id: string;
  type: 'breathing' | 'concentration' | 'mindfulness' | 'grounding';
  title: Record<Language, string>;
  description: Record<Language, string>;
  steps: Record<Language, string[]>;
  duration: number; // em minutos
  icon: string;
}

export interface MotivationalMessage {
  id: string;
  message: Record<Language, string>;
  category: 'morning' | 'evening' | 'struggle' | 'achievement';
}

export interface BotResponse {
  id: string;
  trigger: string; // palavra-chave ou contexto
  response: Record<Language, string>;
  actions?: MiniTask[];
}

export interface MiniTask {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  duration: number; // em minutos
  type: 'distraction' | 'support' | 'technique';
}

export interface Resource {
  id: string;
  type: 'book' | 'video' | 'article' | 'support-group';
  title: Record<Language, string>;
  description: Record<Language, string>;
  url?: string;
  addictionTypes: AddictionType[];
  location?: string; // para grupos de apoio presenciais
}
