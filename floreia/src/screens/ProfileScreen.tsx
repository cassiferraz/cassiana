import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { getUser, updateUser, clearAllData } from '../services/storage';
import { User, Language, AddictionType } from '../types';
import { getAddictionInfo } from '../constants/addictions';
import { theme } from '../theme';

const ProfileScreen = ({ navigation }: any) => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const userData = await getUser();
    setUser(userData);
    if (userData) {
      setEditedName(userData.name);
    }
  };

  const handleSaveProfile = async () => {
    if (editedName.trim()) {
      await updateUser({ name: editedName.trim() });
      setIsEditing(false);
      loadUser();
      Alert.alert('Sucesso', 'Perfil atualizado!');
    }
  };

  const handleChangeLanguage = async (lang: Language) => {
    await i18n.changeLanguage(lang);
    await updateUser({ language: lang });
    loadUser();
  };

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair? Seus dados permanecerão salvos.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            await clearAllData();
            // Recarregar app
            navigation.replace('Onboarding');
          },
        },
      ]
    );
  };

  if (!user) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('profile.title')}</Text>
        </View>

        {/* Foto e nome */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>👤</Text>
          </View>

          {isEditing ? (
            <View style={styles.editNameContainer}>
              <TextInput
                style={styles.nameInput}
                value={editedName}
                onChangeText={setEditedName}
                placeholder="Seu nome"
                placeholderTextColor={theme.colors.textLight}
              />
              <View style={styles.editButtons}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => {
                    setEditedName(user.name);
                    setIsEditing(false);
                  }}
                >
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSaveProfile}
                >
                  <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{user.name}</Text>
              <TouchableOpacity onPress={() => setIsEditing(true)}>
                <Text style={styles.editButton}>{t('common.edit')}</Text>
              </TouchableOpacity>
            </View>
          )}

          <Text style={styles.role}>
            {user.role === 'patient' ? '💪 Em recuperação' : '🤝 Familiar/Amigo'}
          </Text>
        </View>

        {/* Compulsões */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('profile.addictions')}</Text>
          <View style={styles.addictionsContainer}>
            {user.addictions.map((addiction: AddictionType) => {
              const info = getAddictionInfo(addiction);
              return (
                <View key={addiction} style={styles.addictionTag}>
                  <Text style={styles.addictionTagIcon}>{info.icon}</Text>
                  <Text style={styles.addictionTagText}>
                    {info.name[i18n.language as Language]}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Idioma */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('profile.language')}</Text>
          <View style={styles.languageContainer}>
            {(['pt-BR', 'es', 'en'] as Language[]).map((lang) => (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.languageButton,
                  user.language === lang && styles.languageButtonActive,
                ]}
                onPress={() => handleChangeLanguage(lang)}
              >
                <Text
                  style={[
                    styles.languageButtonText,
                    user.language === lang && styles.languageButtonTextActive,
                  ]}
                >
                  {lang === 'pt-BR' && '🇧🇷 Português'}
                  {lang === 'es' && '🇪🇸 Español'}
                  {lang === 'en' && '🇺🇸 English'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Contatos de emergência */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {t('profile.emergencyContacts')}
            </Text>
            <TouchableOpacity>
              <Text style={styles.addContactButton}>+ Adicionar</Text>
            </TouchableOpacity>
          </View>

          {user.emergencyContacts.length === 0 ? (
            <Text style={styles.emptyText}>
              Nenhum contato de emergência cadastrado
            </Text>
          ) : (
            user.emergencyContacts.map((contact) => (
              <View key={contact.id} style={styles.contactCard}>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{contact.name}</Text>
                  <Text style={styles.contactDetails}>
                    {contact.relationship} • {contact.phone}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>

        {/* Botão de logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>{t('profile.logout')}</Text>
        </TouchableOpacity>

        <Text style={styles.version}>FloreIA v1.0.0</Text>
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
  profileSection: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  avatar: {
    fontSize: 48,
  },
  nameContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  editButton: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.primary,
  },
  role: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
  editNameContainer: {
    width: '100%',
    alignItems: 'center',
  },
  nameInput: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    borderWidth: 1,
    borderColor: theme.colors.border,
    width: '100%',
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  editButtons: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  cancelButton: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  cancelButtonText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.sm,
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: theme.fontSizes.sm,
    fontWeight: '600',
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  addContactButton: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  addictionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  addictionTag: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.round,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  addictionTagIcon: {
    fontSize: 16,
    marginRight: theme.spacing.xs,
  },
  addictionTagText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.text,
  },
  languageContainer: {
    gap: theme.spacing.sm,
  },
  languageButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  languageButtonActive: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primaryLight + '20',
  },
  languageButtonText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
  },
  languageButtonTextActive: {
    fontWeight: '600',
  },
  emptyText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    fontStyle: 'italic',
  },
  contactCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
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
  contactDetails: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  logoutButton: {
    backgroundColor: theme.colors.error + '20',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.error,
    marginTop: theme.spacing.lg,
  },
  logoutButtonText: {
    color: theme.colors.error,
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
  },
  version: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.textLight,
    textAlign: 'center',
    marginTop: theme.spacing.lg,
  },
});

export default ProfileScreen;
