import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-vector-icons"



import Duos from './duos'
import Perfil from './perfil'
import Encontrar from './encontrar'
import Jogos from './jogo';

const Tab = createBottomTabNavigator()


export default function App() {
    return (

        <NavigationContainer
            independent={true}>
            <Tab.Navigator>

                <Tab.Screen
                    options={{
                        title: '', headerTransparent: true,
                        headerShown: false
                    }}
                    name="Perfil" component={Perfil}
                />
                <Tab.Screen
                    options={{
                        title: '', headerTransparent: true,
                        headerShown: false
                    }}
                    name="Encontrar" component={Encontrar}
                />
                <Tab.Screen name="Duos" component={Duos}
                />

            </Tab.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',

        justifyContent: 'center',
    },
});