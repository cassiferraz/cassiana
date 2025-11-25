import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Language } from '../types';
import { theme } from '../theme';

const TechniqueDetailScreen = ({ route, navigation }: any) => {
  const { technique } = route.params;
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{technique.icon}</Text>
        </View>

        <Text style={styles.title}>
          {technique.title[i18n.language as Language]}
        </Text>

        <Text style={styles.description}>
          {technique.description[i18n.language as Language]}
        </Text>

        <View style={styles.metaInfo}>
          <Text style={styles.metaText}>
            ⏱️ Duração: {technique.duration} minutos
          </Text>
        </View>

        <View style={styles.stepsContainer}>
          <Text style={styles.stepsTitle}>{t('techniques.steps')}</Text>

          {technique.steps[i18n.language as Language].map(
            (step: string, index: number) => (
              <View key={index} style={styles.stepItem}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            )
          )}
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            // Aqui pode adicionar um timer ou guia passo a passo
            navigation.goBack();
          }}
        >
          <Text style={styles.startButtonText}>{t('techniques.start')}</Text>
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
    marginBottom: theme.spacing.md,
  },
  backButton: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.lg,
  },
  icon: {
    fontSize: 80,
  },
  title: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  metaInfo: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  metaText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    textAlign: 'center',
  },
  stepsContainer: {
    marginBottom: theme.spacing.xl,
  },
  stepsTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  stepItem: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: theme.fontSizes.md,
  },
  stepText: {
    flex: 1,
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    lineHeight: 24,
  },
  startButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
});

export default TechniqueDetailScreen;
