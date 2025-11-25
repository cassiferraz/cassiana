import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { User, UserRole, AddictionType, Language } from '../types';
import { saveUser } from '../services/storage';
import { ADDICTIONS } from '../constants/addictions';
import { theme } from '../theme';

const OnboardingScreen = ({ navigation }: any) => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole | null>(null);
  const [selectedAddictions, setSelectedAddictions] = useState<AddictionType[]>([]);
  const [name, setName] = useState('');

  const handleSelectRole = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleToggleAddiction = (addiction: AddictionType) => {
    if (selectedAddictions.includes(addiction)) {
      setSelectedAddictions(selectedAddictions.filter((a) => a !== addiction));
    } else {
      setSelectedAddictions([...selectedAddictions, addiction]);
    }
  };

  const handleFinish = async () => {
    if (!role || selectedAddictions.length === 0) return;

    const newUser: User = {
      id: Date.now().toString(),
      name: name || 'Usuário',
      role,
      addictions: selectedAddictions,
      language: i18n.language as Language,
      emergencyContacts: [],
      createdAt: new Date().toISOString(),
      completedOnboarding: true,
      shareDataWithLinked: false,
    };

    await saveUser(newUser);
    // Navegação será tratada automaticamente pelo AppNavigator
    navigation.replace('Main');
  };

  const renderStep1 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.title}>{t('onboarding.welcome')}</Text>
      <Text style={styles.subtitle}>{t('onboarding.subtitle')}</Text>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🌸</Text>
      </View>

      <Text style={styles.question}>{t('onboarding.roleQuestion')}</Text>

      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => handleSelectRole('patient')}
      >
        <Text style={styles.roleIcon}>💪</Text>
        <Text style={styles.roleText}>{t('onboarding.patient')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.roleButton}
        onPress={() => handleSelectRole('family')}
      >
        <Text style={styles.roleIcon}>🤝</Text>
        <Text style={styles.roleText}>{t('onboarding.family')}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.title}>{t('onboarding.selectAddictions')}</Text>
      <Text style={styles.subtitle}>{t('onboarding.selectAddictionsDesc')}</Text>

      <ScrollView style={styles.addictionsContainer}>
        {ADDICTIONS.map((addiction) => {
          const isSelected = selectedAddictions.includes(addiction.type);
          return (
            <TouchableOpacity
              key={addiction.type}
              style={[
                styles.addictionButton,
                isSelected && styles.addictionButtonSelected,
              ]}
              onPress={() => handleToggleAddiction(addiction.type)}
            >
              <Text style={styles.addictionIcon}>{addiction.icon}</Text>
              <Text style={styles.addictionName}>
                {addiction.name[i18n.language as Language]}
              </Text>
              {isSelected && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.continueButton,
          selectedAddictions.length === 0 && styles.continueButtonDisabled,
        ]}
        onPress={handleFinish}
        disabled={selectedAddictions.length === 0}
      >
        <Text style={styles.continueButtonText}>{t('onboarding.finish')}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  stepContainer: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
  subtitle: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.xl,
  },
  logo: {
    fontSize: 80,
  },
  question: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  roleButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  roleIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  roleText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    flex: 1,
  },
  addictionsContainer: {
    flex: 1,
    marginVertical: theme.spacing.lg,
  },
  addictionButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  addictionButtonSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primaryLight + '20',
  },
  addictionIcon: {
    fontSize: 24,
    marginRight: theme.spacing.md,
  },
  addictionName: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    flex: 1,
  },
  checkMark: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  continueButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  continueButtonDisabled: {
    backgroundColor: theme.colors.buttonDisabled,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
