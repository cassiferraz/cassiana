import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { getUser, getAchievements, getCleanDays } from '../services/storage';
import { AddictionType, Achievement, Language } from '../types';
import { getAddictionInfo } from '../constants/addictions';
import { theme } from '../theme';

const AchievementsScreen = () => {
  const { t, i18n } = useTranslation();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [cleanDays, setCleanDays] = useState<Record<string, number>>({});
  const [userAddictions, setUserAddictions] = useState<AddictionType[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const user = await getUser();
    const achievementsData = await getAchievements();
    const cleanDaysData = await getCleanDays();

    if (user) {
      setUserAddictions(user.addictions);
    }
    setAchievements(achievementsData);
    setCleanDays(cleanDaysData);
  };

  const getBadgeEmoji = (days: number) => {
    if (days >= 365) return '💎'; // Diamante - 1 ano
    if (days >= 180) return '🏆'; // Troféu - 6 meses
    if (days >= 90) return '🥇'; // Ouro - 3 meses
    if (days >= 30) return '🥈'; // Prata - 1 mês
    if (days >= 7) return '🥉'; // Bronze - 1 semana
    if (days >= 1) return '⭐'; // Estrela - 1 dia
    return '🌱'; // Iniciante
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('achievements.title')}</Text>
          <Text style={styles.subtitle}>
            Celebre cada vitória na sua jornada! 🎉
          </Text>
        </View>

        {/* Progress por compulsão */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Seu progresso</Text>

          {userAddictions.map((addiction) => {
            const days = cleanDays[addiction] || 0;
            const addictionInfo = getAddictionInfo(addiction);
            const badge = getBadgeEmoji(days);

            return (
              <View key={addiction} style={styles.progressCard}>
                <View style={styles.progressHeader}>
                  <Text style={styles.addictionIcon}>{addictionInfo.icon}</Text>
                  <View style={styles.progressInfo}>
                    <Text style={styles.addictionName}>
                      {addictionInfo.name[i18n.language as Language]}
                    </Text>
                    <Text style={styles.progressDays}>
                      {days} {t('achievements.daysClean')}
                    </Text>
                  </View>
                  <Text style={styles.badge}>{badge}</Text>
                </View>

                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${Math.min((days / 30) * 100, 100)}%`,
                        backgroundColor: addictionInfo.color,
                      },
                    ]}
                  />
                </View>

                <Text style={styles.nextMilestone}>
                  {days < 7 && `Próximo marco: 7 dias 🥉`}
                  {days >= 7 && days < 30 && `Próximo marco: 30 dias 🥈`}
                  {days >= 30 && days < 90 && `Próximo marco: 90 dias 🥇`}
                  {days >= 90 && days < 180 && `Próximo marco: 180 dias 🏆`}
                  {days >= 180 && days < 365 && `Próximo marco: 365 dias 💎`}
                  {days >= 365 && `Parabéns! Você é incrível! 🌟`}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Badges conquistados */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('achievements.badges')}</Text>

          {achievements.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>🌱</Text>
              <Text style={styles.emptyText}>{t('achievements.noBadges')}</Text>
            </View>
          ) : (
            <View style={styles.badgesGrid}>
              {achievements.map((achievement) => (
                <View key={achievement.id} style={styles.badgeCard}>
                  <Text style={styles.badgeEmoji}>
                    {getBadgeEmoji(achievement.daysClean)}
                  </Text>
                  <Text style={styles.badgeDays}>
                    {achievement.daysClean} dias
                  </Text>
                  <Text style={styles.badgeType}>
                    {t(`achievements.${achievement.type}`)}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Mensagem motivacional */}
        <View style={styles.motivationBox}>
          <Text style={styles.motivationText}>
            💪 Cada dia é uma vitória! Continue firme no seu propósito.
            Você está fazendo um trabalho incrível!
          </Text>
        </View>
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
  progressCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...theme.shadows.sm,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  addictionIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  progressInfo: {
    flex: 1,
  },
  addictionName: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.text,
  },
  progressDays: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  badge: {
    fontSize: 32,
  },
  progressBar: {
    height: 8,
    backgroundColor: theme.colors.border,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: theme.spacing.sm,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  nextMilestone: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  emptyState: {
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: theme.spacing.md,
  },
  emptyText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  badgeCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    width: '48%',
    ...theme.shadows.sm,
  },
  badgeEmoji: {
    fontSize: 40,
    marginBottom: theme.spacing.sm,
  },
  badgeDays: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.text,
  },
  badgeType: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
  },
  motivationBox: {
    backgroundColor: theme.colors.primaryLight + '30',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  motivationText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    lineHeight: 24,
  },
});

export default AchievementsScreen;
