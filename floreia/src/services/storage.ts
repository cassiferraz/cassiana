import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, MoodEntry, Achievement } from '../types';

// Chaves de armazenamento
const STORAGE_KEYS = {
  USER: '@floreia:user',
  MOOD_ENTRIES: '@floreia:mood_entries',
  ACHIEVEMENTS: '@floreia:achievements',
  LAST_LOGIN: '@floreia:last_login',
  CLEAN_DAYS: '@floreia:clean_days',
};

// Funções para User
export const saveUser = async (user: User): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user:', error);
    throw error;
  }
};

export const getUser = async (): Promise<User | null> => {
  try {
    const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
};

export const updateUser = async (updates: Partial<User>): Promise<void> => {
  try {
    const user = await getUser();
    if (user) {
      const updatedUser = { ...user, ...updates };
      await saveUser(updatedUser);
    }
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Funções para Mood Entries
export const saveMoodEntry = async (entry: MoodEntry): Promise<void> => {
  try {
    const entries = await getMoodEntries();
    entries.unshift(entry); // Adiciona no início
    await AsyncStorage.setItem(STORAGE_KEYS.MOOD_ENTRIES, JSON.stringify(entries));
  } catch (error) {
    console.error('Error saving mood entry:', error);
    throw error;
  }
};

export const getMoodEntries = async (): Promise<MoodEntry[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.MOOD_ENTRIES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting mood entries:', error);
    return [];
  }
};

export const getMoodEntriesByDate = async (startDate: string, endDate: string): Promise<MoodEntry[]> => {
  try {
    const entries = await getMoodEntries();
    return entries.filter((entry) => entry.date >= startDate && entry.date <= endDate);
  } catch (error) {
    console.error('Error getting mood entries by date:', error);
    return [];
  }
};

// Funções para Achievements
export const saveAchievement = async (achievement: Achievement): Promise<void> => {
  try {
    const achievements = await getAchievements();
    achievements.unshift(achievement);
    await AsyncStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
  } catch (error) {
    console.error('Error saving achievement:', error);
    throw error;
  }
};

export const getAchievements = async (): Promise<Achievement[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting achievements:', error);
    return [];
  }
};

// Funções para Last Login
export const saveLastLogin = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.LAST_LOGIN, new Date().toISOString());
  } catch (error) {
    console.error('Error saving last login:', error);
  }
};

export const getLastLogin = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEYS.LAST_LOGIN);
  } catch (error) {
    console.error('Error getting last login:', error);
    return null;
  }
};

// Funções para Clean Days (dias sem compulsão)
export const updateCleanDays = async (addictionType: string, days: number): Promise<void> => {
  try {
    const cleanDaysData = await getCleanDays();
    cleanDaysData[addictionType] = days;
    await AsyncStorage.setItem(STORAGE_KEYS.CLEAN_DAYS, JSON.stringify(cleanDaysData));
  } catch (error) {
    console.error('Error updating clean days:', error);
    throw error;
  }
};

export const getCleanDays = async (): Promise<Record<string, number>> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.CLEAN_DAYS);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error getting clean days:', error);
    return {};
  }
};

// Função para limpar todos os dados (útil para logout ou reset)
export const clearAllData = async (): Promise<void> => {
  try {
    await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
  } catch (error) {
    console.error('Error clearing all data:', error);
    throw error;
  }
};
