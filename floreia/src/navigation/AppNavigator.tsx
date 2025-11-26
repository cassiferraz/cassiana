import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getUser } from '../services/storage';
import { User } from '../types';

// Importar telas (vamos criar depois)
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import MoodCheckScreen from '../screens/MoodCheckScreen';
import TechniquesScreen from '../screens/TechniquesScreen';
import TechniqueDetailScreen from '../screens/TechniqueDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import SOSScreen from '../screens/SOSScreen';
import BotScreen from '../screens/BotScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Navegação por tabs (tela principal)
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6B9E78',
        tabBarInactiveTintColor: '#9EADAC',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E0E8E6',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: () => <TabIcon icon="🏠" />,
        }}
      />
      <Tab.Screen
        name="Techniques"
        component={TechniquesScreen}
        options={{
          tabBarLabel: 'Técnicas',
          tabBarIcon: () => <TabIcon icon="🧘" />,
        }}
      />
      <Tab.Screen
        name="Achievements"
        component={AchievementsScreen}
        options={{
          tabBarLabel: 'Conquistas',
          tabBarIcon: () => <TabIcon icon="🏆" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => <TabIcon icon="👤" />,
        }}
      />
    </Tab.Navigator>
  );
};

// Componente simples de ícone para tabs
const TabIcon = ({ icon }: { icon: string }) => (
  <Text style={{ fontSize: 24 }}>{icon}</Text>
);

// Navegador principal
const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const userData = await getUser();
    setUser(userData);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F9F7' }}>
        <ActivityIndicator size="large" color="#6B9E78" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user || !user.completedOnboarding ? (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : (
          <>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen name="MoodCheck" component={MoodCheckScreen} />
            <Stack.Screen name="TechniqueDetail" component={TechniqueDetailScreen} />
            <Stack.Screen name="SOS" component={SOSScreen} />
            <Stack.Screen name="Bot" component={BotScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
