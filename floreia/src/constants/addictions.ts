import { AddictionType, Language } from '../types';

export interface AddictionInfo {
  type: AddictionType;
  name: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  color: string;
}

export const ADDICTIONS: AddictionInfo[] = [
  {
    type: 'food',
    name: {
      'pt-BR': 'Comida',
      'es': 'Comida',
      'en': 'Food',
    },
    description: {
      'pt-BR': 'Compulsão alimentar',
      'es': 'Compulsión alimentaria',
      'en': 'Eating disorder',
    },
    icon: '🍽️',
    color: '#F4A460',
  },
  {
    type: 'medicine',
    name: {
      'pt-BR': 'Remédios',
      'es': 'Medicamentos',
      'en': 'Medicine',
    },
    description: {
      'pt-BR': 'Uso excessivo de medicamentos',
      'es': 'Uso excesivo de medicamentos',
      'en': 'Medication overuse',
    },
    icon: '💊',
    color: '#9B87C4',
  },
  {
    type: 'drugs',
    name: {
      'pt-BR': 'Drogas',
      'es': 'Drogas',
      'en': 'Drugs',
    },
    description: {
      'pt-BR': 'Dependência química',
      'es': 'Dependencia química',
      'en': 'Drug addiction',
    },
    icon: '🚬',
    color: '#E88D8D',
  },
  {
    type: 'shopping',
    name: {
      'pt-BR': 'Compras',
      'es': 'Compras',
      'en': 'Shopping',
    },
    description: {
      'pt-BR': 'Compulsão por compras',
      'es': 'Compulsión por compras',
      'en': 'Shopping addiction',
    },
    icon: '🛍️',
    color: '#F4B183',
  },
  {
    type: 'gambling',
    name: {
      'pt-BR': 'Jogos',
      'es': 'Juegos',
      'en': 'Gambling',
    },
    description: {
      'pt-BR': 'Jogo compulsivo',
      'es': 'Juego compulsivo',
      'en': 'Gambling addiction',
    },
    icon: '🎰',
    color: '#FFD700',
  },
  {
    type: 'alcohol',
    name: {
      'pt-BR': 'Bebida',
      'es': 'Bebida',
      'en': 'Alcohol',
    },
    description: {
      'pt-BR': 'Alcoolismo',
      'es': 'Alcoholismo',
      'en': 'Alcoholism',
    },
    icon: '🍺',
    color: '#7FAFCC',
  },
  {
    type: 'other',
    name: {
      'pt-BR': 'Outro',
      'es': 'Otro',
      'en': 'Other',
    },
    description: {
      'pt-BR': 'Outras compulsões',
      'es': 'Otras compulsiones',
      'en': 'Other addictions',
    },
    icon: '📌',
    color: '#9EADAC',
  },
];

export const getAddictionInfo = (type: AddictionType): AddictionInfo => {
  return ADDICTIONS.find((a) => a.type === type) || ADDICTIONS[ADDICTIONS.length - 1];
};
