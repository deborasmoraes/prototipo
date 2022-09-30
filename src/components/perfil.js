import { Text, TextInput, TouchableOpacity, View, StyleSheet, Modal, SafeAreaView, Image } from 'react-native';
import { useEffect, useState, useRef, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Jogos } from './jogo'
import GamesContext from '../contexts/gamesContexts'


export default function Perfil({ navigation }) {
    const [trueFalse, setTrueFalse] = useState(true)
    const [descricao, setDescricao] = useState("lorem ipsum")


    const games = useContext(GamesContext)
    return (
        <SafeAreaView style={styles.geral}>

            <View style={styles.container}>

                <Text>Foto</Text>
                <Image source={{
                    uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                }}
                    style={styles.avatar} />
                <TouchableOpacity></TouchableOpacity>

                <Text style={styles.nome}>Username</Text>

                {(trueFalse === true) ? <Text>{descricao}</Text> : <TextInput
                    onChangeText={setDescricao}
                    defaultValue={descricao}></TextInput>}
                <View style={styles.descricao}>
                    <Text>Descrição</Text>
                </View>
                <Text style={styles.nome}>Eu jogo em:</Text>

                {/* adicionar flatlist */}

                <Text>Jogos favoritos</Text>

                {(trueFalse === true) ? <Text>flatlist aqui</Text> : <TouchableOpacity
                    onPress={() => { navigation.navigate("Jogos") }}><Text>Editar Jogos</Text></TouchableOpacity>}
                <Text>Horarios disponiveis</Text>

                <View>
                    <Text>inicio</Text>
                    <Text>HoraInicio</Text>
                </View>

                <View>
                    <Text>Fim</Text>
                    <Text>HoraFim</Text>
                </View>
                {(trueFalse === true) ? <TouchableOpacity
                    onPress={() => { setTrueFalse(false) }}
                ><Text>Editar</Text></TouchableOpacity> : <TouchableOpacity
                    onPress={() => { setTrueFalse(true) }}
                ><Text>Salvar</Text></TouchableOpacity>}

                <Text>{games}</Text>

            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '90%',
        backgroundColor: '#0C2844',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: '8%',
        borderWidth: 4,
        shadowOffset: { width: '10', height: '20' },
        shadowColor: 'red',
        borderRadius: 10,
        padding: '8%'
    },
    geral: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#E7F8FE'
    },
    botaofoto: {
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#7159C1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: '35%',
        height: '15%',
        backgroundColor: 'grey',
        padding: '7%',
        borderRadius: 100
    },
    nome:{
        fontWeight: 'bold',
        color: '#FFFF',
        marginTop: '5%'
    },
    descricao:{
        width: '85%',
        height: '15%',
        backgroundColor: '#DBF6FF',
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center'
    }
})