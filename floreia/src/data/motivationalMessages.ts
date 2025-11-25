import { MotivationalMessage } from '../types';

export const motivationalMessages: MotivationalMessage[] = [
  // Mensagens da manhã
  {
    id: 'morning-1',
    category: 'morning',
    message: {
      'pt-BR': 'Bom dia! Hoje é um novo dia cheio de possibilidades. Você é mais forte do que pensa! 🌅',
      'es': '¡Buenos días! Hoy es un nuevo día lleno de posibilidades. ¡Eres más fuerte de lo que crees! 🌅',
      'en': 'Good morning! Today is a new day full of possibilities. You are stronger than you think! 🌅',
    },
  },
  {
    id: 'morning-2',
    category: 'morning',
    message: {
      'pt-BR': 'Cada amanhecer é uma chance de recomeçar. Acredite em você! ☀️',
      'es': 'Cada amanecer es una oportunidad de empezar de nuevo. ¡Cree en ti! ☀️',
      'en': 'Every sunrise is a chance to start over. Believe in yourself! ☀️',
    },
  },
  {
    id: 'morning-3',
    category: 'morning',
    message: {
      'pt-BR': 'Você já deu o primeiro passo ao acordar. Continue assim! 💪',
      'es': 'Ya diste el primer paso al despertar. ¡Sigue así! 💪',
      'en': 'You already took the first step by waking up. Keep it up! 💪',
    },
  },

  // Mensagens da noite
  {
    id: 'evening-1',
    category: 'evening',
    message: {
      'pt-BR': 'Você passou por mais um dia. Isso merece reconhecimento! Descanse bem. 🌙',
      'es': 'Pasaste otro día más. ¡Eso merece reconocimiento! Descansa bien. 🌙',
      'en': 'You made it through another day. That deserves recognition! Rest well. 🌙',
    },
  },
  {
    id: 'evening-2',
    category: 'evening',
    message: {
      'pt-BR': 'Cada dia em controle é uma vitória. Orgulhe-se de você! ✨',
      'es': 'Cada día en control es una victoria. ¡Siéntete orgulloso/a de ti! ✨',
      'en': 'Every day in control is a victory. Be proud of yourself! ✨',
    },
  },

  // Mensagens de luta/dificuldade
  {
    id: 'struggle-1',
    category: 'struggle',
    message: {
      'pt-BR': 'Está difícil? Isso é normal. A vontade vai passar. Respire fundo. 🌬️',
      'es': '¿Es difícil? Eso es normal. Las ganas pasarán. Respira profundo. 🌬️',
      'en': 'Is it difficult? That\'s normal. The urge will pass. Take a deep breath. 🌬️',
    },
  },
  {
    id: 'struggle-2',
    category: 'struggle',
    message: {
      'pt-BR': 'Você não está sozinho(a). Peça ajuda, não há vergonha nisso. 💚',
      'es': 'No estás solo/a. Pide ayuda, no hay vergüenza en eso. 💚',
      'en': 'You are not alone. Ask for help, there\'s no shame in that. 💚',
    },
  },
  {
    id: 'struggle-3',
    category: 'struggle',
    message: {
      'pt-BR': 'Um momento de cada vez. Você consegue superar isso. 🌟',
      'es': 'Un momento a la vez. Puedes superar esto. 🌟',
      'en': 'One moment at a time. You can overcome this. 🌟',
    },
  },
  {
    id: 'struggle-4',
    category: 'struggle',
    message: {
      'pt-BR': 'O desconforto é temporário. Sua força é permanente. 💪',
      'es': 'La incomodidad es temporal. Tu fuerza es permanente. 💪',
      'en': 'Discomfort is temporary. Your strength is permanent. 💪',
    },
  },
  {
    id: 'struggle-5',
    category: 'struggle',
    message: {
      'pt-BR': 'Lembre-se do motivo pelo qual você começou. Você vale a pena! 🌻',
      'es': 'Recuerda por qué empezaste. ¡Tú vales la pena! 🌻',
      'en': 'Remember why you started. You are worth it! 🌻',
    },
  },

  // Mensagens de conquista
  {
    id: 'achievement-1',
    category: 'achievement',
    message: {
      'pt-BR': 'Parabéns! Cada dia é uma conquista incrível! 🎉',
      'es': '¡Felicitaciones! ¡Cada día es un logro increíble! 🎉',
      'en': 'Congratulations! Every day is an amazing achievement! 🎉',
    },
  },
  {
    id: 'achievement-2',
    category: 'achievement',
    message: {
      'pt-BR': 'Você está fazendo isso! Continue no caminho, guerreiro(a)! 🏆',
      'es': '¡Lo estás haciendo! ¡Sigue en el camino, guerrero/a! 🏆',
      'en': 'You\'re doing it! Stay on the path, warrior! 🏆',
    },
  },
  {
    id: 'achievement-3',
    category: 'achievement',
    message: {
      'pt-BR': 'Sua jornada inspira! Continue sendo essa pessoa incrível! 🌟',
      'es': '¡Tu viaje inspira! ¡Sigue siendo esa persona increíble! 🌟',
      'en': 'Your journey inspires! Keep being that amazing person! 🌟',
    },
  },
];

export const getRandomMessage = (category?: MotivationalMessage['category']): MotivationalMessage => {
  const filtered = category
    ? motivationalMessages.filter((m) => m.category === category)
    : motivationalMessages;

  return filtered[Math.floor(Math.random() * filtered.length)];
};
