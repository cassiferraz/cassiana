import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Language } from '../types';
import { theme } from '../theme';
import { getRandomMessage } from '../data/motivationalMessages';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const BotScreen = ({ navigation }: any) => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    // Mensagem inicial do bot
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: getWelcomeMessage(),
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        'Estou com vontade de usar',
        'Estou me sentindo ansioso',
        'Preciso de uma técnica',
        'Quero falar sobre meus sentimentos',
      ],
    };
    setMessages([welcomeMessage]);
  }, []);

  const getWelcomeMessage = () => {
    const messages: Record<Language, string> = {
      'pt-BR':
        'Olá! 👋 Sou o bot de apoio do FloreIA. Estou aqui para ajudar você. Como está se sentindo agora?',
      es: '¡Hola! 👋 Soy el bot de apoyo de FloreIA. Estoy aquí para ayudarte. ¿Cómo te sientes ahora?',
      en: 'Hello! 👋 I am FloreIA support bot. I am here to help you. How are you feeling now?',
    };
    return messages[i18n.language as Language];
  };

  const getBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();

    // Respostas baseadas em palavras-chave
    let responseText = '';
    let suggestions: string[] = [];

    // Detectar crise/emergência
    if (
      lowerMessage.includes('suicid') ||
      lowerMessage.includes('morrer') ||
      lowerMessage.includes('acabar com tudo')
    ) {
      responseText =
        '🚨 Percebo que você está passando por um momento muito difícil. Por favor, ligue imediatamente para o CVV (188) ou procure ajuda de emergência. Você não está sozinho e sua vida importa muito.';
      suggestions = ['Ligar para CVV', 'Ver contatos de emergência'];
    }
    // Vontade de usar
    else if (
      lowerMessage.includes('vontade') ||
      lowerMessage.includes('desejo') ||
      lowerMessage.includes('quero usar')
    ) {
      responseText =
        'Entendo que você está com vontade. Isso é normal e vai passar. Vamos fazer algo agora:\n\n1. Respire fundo 3 vezes\n2. A vontade é como uma onda, ela sobe e desce\n3. Você pode resistir!\n\nQue tal tentar uma técnica de respiração?';
      suggestions = [
        'Ver técnicas de respiração',
        'Ligar para alguém',
        'Registrar meu humor',
      ];
    }
    // Ansiedade
    else if (
      lowerMessage.includes('ansioso') ||
      lowerMessage.includes('ansiosa') ||
      lowerMessage.includes('ansiedade') ||
      lowerMessage.includes('nervoso')
    ) {
      responseText =
        'A ansiedade pode ser muito desafiadora. Vamos acalmar juntos:\n\n✨ Técnica rápida 5-4-3-2-1:\n• 5 coisas que você VÊ\n• 4 coisas que você TOCA\n• 3 coisas que você OUVE\n• 2 coisas que você CHEIRA\n• 1 coisa que você PROVA\n\nIsso ajuda a te trazer para o presente.';
      suggestions = ['Ver todas as técnicas', 'Falar mais sobre o que sinto'];
    }
    // Tristeza
    else if (
      lowerMessage.includes('triste') ||
      lowerMessage.includes('deprimido') ||
      lowerMessage.includes('mal') ||
      lowerMessage.includes('down')
    ) {
      responseText =
        'Sinto muito que você esteja se sentindo assim. 💙 Seus sentimentos são válidos. Lembre-se:\n\n• Você não está sozinho\n• Este momento vai passar\n• Você já superou dias difíceis antes\n• Pedir ajuda é sinal de força\n\nQuer conversar mais sobre isso ou fazer algo que te ajude agora?';
      suggestions = [
        'Registrar meus sentimentos',
        'Falar com alguém',
        'Ver conquistas',
      ];
    }
    // Positivo/bem
    else if (
      lowerMessage.includes('bem') ||
      lowerMessage.includes('feliz') ||
      lowerMessage.includes('ótimo') ||
      lowerMessage.includes('bom')
    ) {
      responseText =
        'Que maravilha ouvir isso! 🎉 Estou muito feliz por você. Aproveite esse momento positivo e lembre-se dele nos dias mais difíceis. Você merece se sentir assim!';
      suggestions = ['Registrar esse momento', 'Ver meu progresso'];
    }
    // Padrão
    else {
      responseText =
        'Obrigado por compartilhar. Estou aqui para apoiar você. Pode me contar mais sobre como está se sentindo ou o que está precisando agora?';
      suggestions = [
        'Ver técnicas de apoio',
        'Registrar meu humor',
        'Falar com alguém',
      ];
    }

    return {
      id: Date.now().toString(),
      text: responseText,
      isBot: true,
      timestamp: new Date(),
      suggestions,
    };
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Adicionar mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    // Simular delay do bot
    setTimeout(() => {
      const botResponse = getBotResponse(inputText.trim());
      setMessages((prev) => [...prev, botResponse]);
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 1000);
  };

  const handleSuggestionPress = (suggestion: string) => {
    // Mapear sugestões para ações
    if (suggestion.includes('técnica') || suggestion.includes('respiração')) {
      navigation.navigate('Techniques');
    } else if (suggestion.includes('humor') || suggestion.includes('sentimento')) {
      navigation.navigate('MoodCheck');
    } else if (
      suggestion.includes('emergência') ||
      suggestion.includes('alguém') ||
      suggestion.includes('CVV')
    ) {
      navigation.navigate('SOS');
    } else if (suggestion.includes('progresso') || suggestion.includes('conquista')) {
      navigation.navigate('Achievements');
    } else {
      // Se não mapear para ação, enviar como mensagem
      setInputText(suggestion);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>💬 {t('bot.title')}</Text>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.map((message) => (
            <View key={message.id}>
              <View
                style={[
                  styles.messageBubble,
                  message.isBot ? styles.botBubble : styles.userBubble,
                ]}
              >
                {message.isBot && <Text style={styles.botIcon}>🤖</Text>}
                <Text
                  style={[
                    styles.messageText,
                    message.isBot ? styles.botText : styles.userText,
                  ]}
                >
                  {message.text}
                </Text>
              </View>

              {/* Sugestões */}
              {message.suggestions && message.suggestions.length > 0 && (
                <View style={styles.suggestionsContainer}>
                  {message.suggestions.map((suggestion, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.suggestionButton}
                      onPress={() => handleSuggestionPress(suggestion)}
                    >
                      <Text style={styles.suggestionText}>{suggestion}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder={t('bot.placeholder')}
            placeholderTextColor={theme.colors.textLight}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <Text style={styles.sendButtonText}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  backButton: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: theme.spacing.lg,
  },
  messageBubble: {
    maxWidth: '80%',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  botBubble: {
    backgroundColor: theme.colors.surface,
    alignSelf: 'flex-start',
    ...theme.shadows.sm,
  },
  userBubble: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
  },
  botIcon: {
    fontSize: 20,
    marginRight: theme.spacing.sm,
  },
  messageText: {
    fontSize: theme.fontSizes.md,
    lineHeight: 22,
    flex: 1,
  },
  botText: {
    color: theme.colors.text,
  },
  userText: {
    color: '#FFFFFF',
  },
  suggestionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.xs,
  },
  suggestionButton: {
    backgroundColor: theme.colors.primaryLight + '40',
    borderRadius: theme.borderRadius.round,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  suggestionText: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.sm,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    maxHeight: 100,
    marginRight: theme.spacing.sm,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: theme.colors.buttonDisabled,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BotScreen;
