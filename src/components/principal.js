import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-vector-icons"



import Duos from './duos'
import Perfil from './perfil'
import Encontrar from './encontrar'
import Jogos from './jogo';
import Settings from './settings';

const Tab = createBottomTabNavigator()

export default function Principal() {
    return (

        <NavigationContainer
            independent={true}>
            <Tab.Navigator
            >

                <Tab.Screen
                    options={{
                        title: '', headerTransparent: true,
                        headerShown: false, tabBarStyle: {backgroundColor: '#171930'}
                    }}
                    name="Perfil" component={Perfil}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: () => (<Image source={require("../../assets/myduo.png")} style={{width: 23.6, height: 24.5}}/>),
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