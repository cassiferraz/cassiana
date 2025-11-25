import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { getUser } from '../services/storage';
import { EmergencyContact } from '../types';
import { theme } from '../theme';

const SOSScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const user = await getUser();
    if (user) {
      setEmergencyContacts(user.emergencyContacts);
    }
  };

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmergencyCall = () => {
    Alert.alert(
      'Ligar para emergência',
      'Você será redirecionado para ligar para 188 (CVV - Centro de Valorização da Vida)',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Ligar', onPress: () => handleCall('188') },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🆘</Text>
        </View>

        <Text style={styles.title}>{t('sos.title')}</Text>
        <Text style={styles.message}>{t('sos.message')}</Text>

        {/* Botão de emergência principal */}
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={handleEmergencyCall}
        >
          <Text style={styles.emergencyIcon}>📞</Text>
          <View style={styles.emergencyTextContainer}>
            <Text style={styles.emergencyText}>{t('sos.callEmergency')}</Text>
            <Text style={styles.emergencySubtext}>{t('sos.cvv')}</Text>
          </View>
        </TouchableOpacity>

        {/* Lista de contatos de emergência */}
        {emergencyContacts.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Seus contatos de emergência</Text>
            {emergencyContacts.map((contact) => (
              <TouchableOpacity
                key={contact.id}
                style={styles.contactCard}
                onPress={() => handleCall(contact.phone)}
              >
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{contact.name}</Text>
                  <Text style={styles.contactRelation}>{contact.relationship}</Text>
                </View>
                <Text style={styles.contactPhone}>📞</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Ações alternativas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que posso fazer agora?</Text>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Techniques')}
          >
            <Text style={styles.actionIcon}>🌬️</Text>
            <View style={styles.actionTextContainer}>
              <Text style={styles.actionTitle}>{t('sos.useTechnique')}</Text>
              <Text style={styles.actionSubtitle}>
                Técnicas rápidas para acalmar
              </Text>
            </View>
            <Text style={styles.actionArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Bot')}
          >
            <Text style={styles.actionIcon}>💬</Text>
            <View style={styles.actionTextContainer}>
              <Text style={styles.actionTitle}>{t('sos.talkToBot')}</Text>
              <Text style={styles.actionSubtitle}>
                Receba sugestões personalizadas
              </Text>
            </View>
            <Text style={styles.actionArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('MoodCheck')}
          >
            <Text style={styles.actionIcon}>📝</Text>
            <View style={styles.actionTextContainer}>
              <Text style={styles.actionTitle}>Registrar como me sinto</Text>
              <Text style={styles.actionSubtitle}>
                Colocar no papel pode ajudar
              </Text>
            </View>
            <Text style={styles.actionArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Info importante */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💚 Lembre-se: pedir ajuda é sinal de coragem, não de fraqueza.
            Você não está sozinho nessa jornada.
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
    marginBottom: theme.spacing.sm,
  },
  message: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  emergencyButton: {
    backgroundColor: theme.colors.error,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    ...theme.shadows.lg,
  },
  emergencyIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  emergencyTextContainer: {
    flex: 1,
  },
  emergencyText: {
    color: '#FFFFFF',
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  emergencySubtext: {
    color: '#FFFFFF',
    fontSize: theme.fontSizes.sm,
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
  contactCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    ...theme.shadows.sm,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.text,
  },
  contactRelation: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  contactPhone: {
    fontSize: 24,
  },
  actionCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    ...theme.shadows.sm,
  },
  actionIcon: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.text,
  },
  actionSubtitle: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  actionArrow: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.primary,
  },
  infoBox: {
    backgroundColor: theme.colors.primaryLight + '30',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  infoText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    lineHeight: 24,
  },
});

export default SOSScreen;
