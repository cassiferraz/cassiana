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
import { techniques } from '../data/techniques';
import { Language } from '../types';
import { theme } from '../theme';

const TechniquesScreen = ({ navigation }: any) => {
  const { t, i18n } = useTranslation();

  const groupedTechniques = techniques.reduce((acc, technique) => {
    if (!acc[technique.type]) {
      acc[technique.type] = [];
    }
    acc[technique.type].push(technique);
    return acc;
  }, {} as Record<string, typeof techniques>);

  const typeIcons: Record<string, string> = {
    breathing: '🌬️',
    concentration: '🎯',
    mindfulness: '🧘',
    grounding: '🌟',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('techniques.title')}</Text>
          <Text style={styles.subtitle}>
            Técnicas para ajudar em momentos difíceis
          </Text>
        </View>

        {Object.entries(groupedTechniques).map(([type, typeTechniques]) => (
          <View key={type} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {typeIcons[type]} {t(`techniques.${type}`)}
            </Text>

            {typeTechniques.map((technique) => (
              <TouchableOpacity
                key={technique.id}
                style={styles.techniqueCard}
                onPress={() =>
                  navigation.navigate('TechniqueDetail', { technique })
                }
              >
                <View style={styles.techniqueHeader}>
                  <Text style={styles.techniqueIcon}>{technique.icon}</Text>
                  <View style={styles.techniqueInfo}>
                    <Text style={styles.techniqueName}>
                      {technique.title[i18n.language as Language]}
                    </Text>
                    <Text style={styles.techniqueDescription}>
                      {technique.description[i18n.language as Language]}
                    </Text>
                  </View>
                </View>
                <View style={styles.techniqueMeta}>
                  <Text style={styles.techniqueDuration}>
                    ⏱️ {technique.duration} {t('techniques.duration')}
                  </Text>
                  <Text style={styles.techniqueArrow}>→</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
  title: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  techniqueCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    ...theme.shadows.sm,
  },
  techniqueHeader: {
    flexDirection: 'row',
    marginBottom: theme.spacing.sm,
  },
  techniqueIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  techniqueInfo: {
    flex: 1,
  },
  techniqueName: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  techniqueDescription: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  techniqueMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xs,
  },
  techniqueDuration: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  techniqueArrow: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.primary,
  },
});

export default TechniquesScreen;
