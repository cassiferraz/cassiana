import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { MoodLevel, MoodEntry } from '../types';
import { saveMoodEntry, getUser } from '../services/storage';
import { theme } from '../theme';

const MoodCheckScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const [selectedMood, setSelectedMood] = useState<MoodLevel | null>(null);
  const [feeling, setFeeling] = useState('');
  const [notes, setNotes] = useState('');

  const moods: { level: MoodLevel; emoji: string; label: string; color: string }[] = [
    { level: 1, emoji: '😢', label: t('mood.veryBad'), color: theme.colors.mood.veryBad },
    { level: 2, emoji: '😟', label: t('mood.bad'), color: theme.colors.mood.bad },
    { level: 3, emoji: '😐', label: t('mood.neutral'), color: theme.colors.mood.neutral },
    { level: 4, emoji: '😊', label: t('mood.good'), color: theme.colors.mood.good },
    { level: 5, emoji: '😄', label: t('mood.veryGood'), color: theme.colors.mood.veryGood },
  ];

  const handleSave = async () => {
    if (!selectedMood || !feeling.trim()) {
      Alert.alert('Atenção', 'Por favor, selecione como está se sentindo e descreva sua emoção.');
      return;
    }

    const user = await getUser();
    if (!user) return;

    const entry: MoodEntry = {
      id: Date.now().toString(),
      userId: user.id,
      date: new Date().toISOString(),
      mood: selectedMood,
      feeling: feeling.trim(),
      notes: notes.trim() || undefined,
    };

    await saveMoodEntry(entry);

    // Se o humor estiver muito baixo, sugerir ajuda
    if (selectedMood <= 2) {
      Alert.alert(
        'Está difícil?',
        'Percebemos que você não está bem. Que tal tentar uma técnica de respiração ou conversar com alguém?',
        [
          { text: 'Ver técnicas', onPress: () => navigation.navigate('Techniques') },
          { text: 'Pedir ajuda', onPress: () => navigation.navigate('SOS') },
          { text: 'Agora não', style: 'cancel', onPress: () => navigation.goBack() },
        ]
      );
    } else {
      Alert.alert('Registrado!', 'Seu humor foi registrado com sucesso.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{t('mood.title')}</Text>
        </View>

        {/* Seleção de humor */}
        <View style={styles.moodsContainer}>
          {moods.map((mood) => (
            <TouchableOpacity
              key={mood.level}
              style={[
                styles.moodButton,
                selectedMood === mood.level && {
                  backgroundColor: mood.color,
                  transform: [{ scale: 1.1 }],
                },
              ]}
              onPress={() => setSelectedMood(mood.level)}
            >
              <Text style={styles.moodEmoji}>{mood.emoji}</Text>
              <Text style={styles.moodLabel}>{mood.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Input de sentimento */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{t('mood.feeling')}</Text>
          <TextInput
            style={styles.input}
            value={feeling}
            onChangeText={setFeeling}
            placeholder="Ex: Ansioso, triste, com vontade de..."
            placeholderTextColor={theme.colors.textLight}
            multiline
          />
        </View>

        {/* Notas opcionais */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{t('mood.notes')}</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={notes}
            onChangeText={setNotes}
            placeholder="Adicione mais detalhes se quiser..."
            placeholderTextColor={theme.colors.textLight}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Botão salvar */}
        <TouchableOpacity
          style={[
            styles.saveButton,
            (!selectedMood || !feeling.trim()) && styles.saveButtonDisabled,
          ]}
          onPress={handleSave}
          disabled={!selectedMood || !feeling.trim()}
        >
          <Text style={styles.saveButtonText}>{t('mood.saveEntry')}</Text>
        </TouchableOpacity>

        {/* Info de privacidade */}
        <Text style={styles.privacyNote}>
          🔒 Seus registros são privados e armazenados apenas no seu dispositivo.
        </Text>
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
    marginBottom: theme.spacing.xl,
  },
  backButton: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  moodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
    gap: theme.spacing.xs,
  },
  moodButton: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  moodEmoji: {
    fontSize: 32,
    marginBottom: theme.spacing.xs,
  },
  moodLabel: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.text,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: theme.spacing.lg,
  },
  inputLabel: {
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  saveButtonDisabled: {
    backgroundColor: theme.colors.buttonDisabled,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
  privacyNote: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: theme.spacing.lg,
  },
});

export default MoodCheckScreen;
