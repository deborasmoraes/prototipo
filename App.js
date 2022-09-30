import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Init from './src/components/inicial';
import PageLogin from './src/components/login';
import PageRegistrar from './src/components/pageRegistrar';
import Redefinir from './src/components/redefinirsenha'
import Duos from './src/components/duos';
import Principal from './src/components/principal';
import Perfil from './src/components/perfil';
import Encontrar from './src/components/encontrar';

import Jogos from './src/components/jogo';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: '', headerTransparent: true,
            headerShown: false
          }}
          name="Inicial" component={Init} />
        <Stack.Screen
          options={{
            title: '', headerTransparent: true,
            headerShown: false
          }}
          name="Login" component={PageLogin} />
        <Stack.Screen
          options={{
            title: '', headerTransparent: true,
            headerShown: false
          }}
          name="Registrar" component={PageRegistrar} />
        <Stack.Screen name="Redefinir" component={Redefinir} />
        <Stack.Screen name="Duos" component={Duos} />
        <Stack.Screen
          options={{
            title: '', headerTransparent: true,
            headerShown: false
          }}
          name="Principal" component={Principal} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Encontrar" component={Encontrar} />
        <Stack.Screen name="Jogos" component={Jogos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}