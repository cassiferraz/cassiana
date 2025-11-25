import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { User, Language } from '../types';
import { getUser, saveLastLogin } from '../services/storage';
import { getRandomMessage } from '../data/motivationalMessages';
import { theme } from '../theme';

const HomeScreen = ({ navigation }: any) => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState<User | null>(null);
  const [motivationalMessage, setMotivationalMessage] = useState('');

  useEffect(() => {
    loadUser();
    saveLastLogin();
  }, []);

  const loadUser = async () => {
    const userData = await getUser();
    setUser(userData);

    // Gerar mensagem motivacional baseada na hora do dia
    const hour = new Date().getHours();
    let category: 'morning' | 'evening' | 'struggle' | 'achievement' = 'morning';

    if (hour < 12) {
      category = 'morning';
    } else if (hour >= 18) {
      category = 'evening';
    }

    const message = getRandomMessage(category);
    setMotivationalMessage(message.message[i18n.language as Language]);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t('home.greeting.morning');
    if (hour < 18) return t('home.greeting.afternoon');
    return t('home.greeting.evening');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            {getGreeting()}, {user?.name || 'Amigo'}! 👋
          </Text>
        </View>

        {/* Mensagem motivacional */}
        <View style={styles.motivationalCard}>
          <Text style={styles.motivationalText}>{motivationalMessage}</Text>
        </View>

        {/* Pergunta principal */}
        <View style={styles.mainQuestion}>
          <Text style={styles.questionText}>{t('home.howAreYou')}</Text>
        </View>

        {/* Botões de ação principais */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryAction]}
            onPress={() => navigation.navigate('MoodCheck')}
          >
            <Text style={styles.actionIcon}>😊</Text>
            <Text style={styles.actionText}>{t('home.checkIn')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryAction]}
            onPress={() => navigation.navigate('Techniques')}
          >
            <Text style={styles.actionIcon}>🧘</Text>
            <Text style={styles.actionText}>{t('home.techniques')}</Text>
          </TouchableOpacity>
        </View>

        {/* Botão SOS (destaque) */}
        <TouchableOpacity
          style={styles.sosButton}
          onPress={() => navigation.navigate('SOS')}
        >
          <Text style={styles.sosIcon}>🆘</Text>
          <Text style={styles.sosText}>{t('home.sos')}</Text>
        </TouchableOpacity>

        {/* Card de progresso resumido */}
        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>💪 {t('home.progress')}</Text>
          <Text style={styles.progressSubtitle}>
            Você está no caminho certo! Continue assim.
          </Text>
          <TouchableOpacity
            style={styles.progressButton}
            onPress={() => navigation.navigate('Achievements')}
          >
            <Text style={styles.progressButtonText}>Ver conquistas →</Text>
          </TouchableOpacity>
        </View>

        {/* Quick access para bot */}
        <TouchableOpacity
          style={styles.botButton}
          onPress={() => navigation.navigate('Bot')}
        >
          <Text style={styles.botIcon}>💬</Text>
          <Text style={styles.botText}>Conversar com o bot de apoio</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.lg,
  },
  header: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  greeting: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  motivationalCard: {
    backgroundColor: theme.colors.primaryLight + '40',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  motivationalText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    lineHeight: 24,
  },
  mainQuestion: {
    marginBottom: theme.spacing.md,
  },
  questionText: {
    fontSize: theme.fontSizes.lg,
    fontWeight: '600',
    color: theme.colors.text,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  actionButton: {
    flex: 1,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    alignItems: 'center',
    ...theme.shadows.md,
  },
  primaryAction: {
    backgroundColor: theme.colors.primary,
  },
  secondaryAction: {
    backgroundColor: theme.colors.secondary,
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: theme.spacing.sm,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
  },
  sosButton: {
    backgroundColor: theme.colors.error + '20',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
    borderWidth: 2,
    borderColor: theme.colors.error,
  },
  sosIcon: {
    fontSize: 24,
    marginRight: theme.spacing.sm,
  },
  sosText: {
    color: theme.colors.error,
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
  progressCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  progressTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  progressSubtitle: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  progressButton: {
    alignSelf: 'flex-start',
  },
  progressButtonText: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
  },
  botButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  botIcon: {
    fontSize: 24,
    marginRight: theme.spacing.md,
  },
  botText: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.md,
  },
});

export default HomeScreen;
