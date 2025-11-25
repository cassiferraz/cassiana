import { Technique } from '../types';

export const techniques: Technique[] = [
  {
    id: 'breathing-1',
    type: 'breathing',
    icon: '🌬️',
    duration: 5,
    title: {
      'pt-BR': 'Respiração 4-7-8',
      'es': 'Respiración 4-7-8',
      'en': '4-7-8 Breathing',
    },
    description: {
      'pt-BR': 'Técnica de respiração para acalmar a ansiedade e reduzir o estresse',
      'es': 'Técnica de respiración para calmar la ansiedad y reducir el estrés',
      'en': 'Breathing technique to calm anxiety and reduce stress',
    },
    steps: {
      'pt-BR': [
        'Encontre um lugar confortável para sentar ou deitar',
        'Expire completamente pela boca',
        'Inspire pelo nariz contando até 4',
        'Segure a respiração contando até 7',
        'Expire pela boca contando até 8',
        'Repita o ciclo 4 vezes',
      ],
      'es': [
        'Encuentra un lugar cómodo para sentarte o acostarte',
        'Exhala completamente por la boca',
        'Inhala por la nariz contando hasta 4',
        'Sostén la respiración contando hasta 7',
        'Exhala por la boca contando hasta 8',
        'Repite el ciclo 4 veces',
      ],
      'en': [
        'Find a comfortable place to sit or lie down',
        'Exhale completely through your mouth',
        'Inhale through your nose counting to 4',
        'Hold your breath counting to 7',
        'Exhale through your mouth counting to 8',
        'Repeat the cycle 4 times',
      ],
    },
  },
  {
    id: 'breathing-2',
    type: 'breathing',
    icon: '💨',
    duration: 3,
    title: {
      'pt-BR': 'Respiração Quadrada',
      'es': 'Respiración Cuadrada',
      'en': 'Box Breathing',
    },
    description: {
      'pt-BR': 'Técnica simples de respiração para focar e acalmar',
      'es': 'Técnica simple de respiración para enfocarse y calmarse',
      'en': 'Simple breathing technique to focus and calm down',
    },
    steps: {
      'pt-BR': [
        'Inspire contando até 4',
        'Segure a respiração contando até 4',
        'Expire contando até 4',
        'Pause contando até 4',
        'Repita por 2-3 minutos',
      ],
      'es': [
        'Inhala contando hasta 4',
        'Sostén la respiración contando hasta 4',
        'Exhala contando hasta 4',
        'Pausa contando hasta 4',
        'Repite por 2-3 minutos',
      ],
      'en': [
        'Inhale counting to 4',
        'Hold your breath counting to 4',
        'Exhale counting to 4',
        'Pause counting to 4',
        'Repeat for 2-3 minutes',
      ],
    },
  },
  {
    id: 'grounding-1',
    type: 'grounding',
    icon: '🌟',
    duration: 5,
    title: {
      'pt-BR': 'Técnica 5-4-3-2-1',
      'es': 'Técnica 5-4-3-2-1',
      'en': '5-4-3-2-1 Technique',
    },
    description: {
      'pt-BR': 'Técnica de ancoragem para trazer você de volta ao presente',
      'es': 'Técnica de anclaje para traerte de vuelta al presente',
      'en': 'Grounding technique to bring you back to the present',
    },
    steps: {
      'pt-BR': [
        'Identifique 5 coisas que você pode VER',
        'Identifique 4 coisas que você pode TOCAR',
        'Identifique 3 coisas que você pode OUVIR',
        'Identifique 2 coisas que você pode CHEIRAR',
        'Identifique 1 coisa que você pode PROVAR',
        'Respire fundo e observe como se sente agora',
      ],
      'es': [
        'Identifica 5 cosas que puedes VER',
        'Identifica 4 cosas que puedes TOCAR',
        'Identifica 3 cosas que puedes OÍR',
        'Identifica 2 cosas que puedes OLER',
        'Identifica 1 cosa que puedes PROBAR',
        'Respira profundo y observa cómo te sientes ahora',
      ],
      'en': [
        'Identify 5 things you can SEE',
        'Identify 4 things you can TOUCH',
        'Identify 3 things you can HEAR',
        'Identify 2 things you can SMELL',
        'Identify 1 thing you can TASTE',
        'Take a deep breath and notice how you feel now',
      ],
    },
  },
  {
    id: 'concentration-1',
    type: 'concentration',
    icon: '🎯',
    duration: 10,
    title: {
      'pt-BR': 'Foco no Momento',
      'es': 'Enfoque en el Momento',
      'en': 'Moment Focus',
    },
    description: {
      'pt-BR': 'Exercício de concentração para distrair da compulsão',
      'es': 'Ejercicio de concentración para distraer de la compulsión',
      'en': 'Concentration exercise to distract from compulsion',
    },
    steps: {
      'pt-BR': [
        'Escolha um objeto próximo a você',
        'Observe todos os detalhes: cor, forma, textura',
        'Conte quantas características diferentes você consegue identificar',
        'Toque o objeto e sinta sua temperatura e peso',
        'Descreva mentalmente o objeto em detalhes',
        'Faça isso por 5-10 minutos',
      ],
      'es': [
        'Elige un objeto cerca de ti',
        'Observa todos los detalles: color, forma, textura',
        'Cuenta cuántas características diferentes puedes identificar',
        'Toca el objeto y siente su temperatura y peso',
        'Describe mentalmente el objeto en detalle',
        'Haz esto por 5-10 minutos',
      ],
      'en': [
        'Choose an object near you',
        'Observe all details: color, shape, texture',
        'Count how many different characteristics you can identify',
        'Touch the object and feel its temperature and weight',
        'Mentally describe the object in detail',
        'Do this for 5-10 minutes',
      ],
    },
  },
  {
    id: 'mindfulness-1',
    type: 'mindfulness',
    icon: '🧘',
    duration: 5,
    title: {
      'pt-BR': 'Atenção Plena Rápida',
      'es': 'Atención Plena Rápida',
      'en': 'Quick Mindfulness',
    },
    description: {
      'pt-BR': 'Exercício curto de mindfulness para momentos difíceis',
      'es': 'Ejercicio corto de mindfulness para momentos difíciles',
      'en': 'Short mindfulness exercise for difficult moments',
    },
    steps: {
      'pt-BR': [
        'Pause o que está fazendo',
        'Coloque as mãos sobre o coração',
        'Sinta sua respiração entrando e saindo',
        'Diga para si mesmo: "Este momento vai passar"',
        'Reconheça seus sentimentos sem julgamento',
        'Respire fundo 3 vezes antes de decidir o próximo passo',
      ],
      'es': [
        'Pausa lo que estás haciendo',
        'Coloca las manos sobre tu corazón',
        'Siente tu respiración entrando y saliendo',
        'Dite a ti mismo: "Este momento pasará"',
        'Reconoce tus sentimientos sin juicio',
        'Respira profundo 3 veces antes de decidir el próximo paso',
      ],
      'en': [
        'Pause what you\'re doing',
        'Place your hands on your heart',
        'Feel your breath going in and out',
        'Tell yourself: "This moment will pass"',
        'Acknowledge your feelings without judgment',
        'Take 3 deep breaths before deciding the next step',
      ],
    },
  },
];

export const getTechniquesByType = (type: Technique['type']): Technique[] => {
  return techniques.filter((t) => t.type === type);
};
