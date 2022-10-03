import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { useEffect, useState, useRef, useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GamesContext from '../contexts/gamesContexts'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Perfil({ navigation }) {
    const [trueFalse, setTrueFalse] = useState(true)
    const [descricao, setDescricao] = useState("lorem ipsum")


    const games = useContext(GamesContext)
    return (
        <ScrollView contentContainerStyle={styles.geral}>
            <View style={styles.header}>
                <Text style={styles.nome}>Perfil</Text>

                {(trueFalse === true) ? <TouchableOpacity
                    onPress={() => { setTrueFalse(false) }}
                ><Icon name="plus" size={20} color='#FFFF' /></TouchableOpacity> : <TouchableOpacity
                    onPress={() => { setTrueFalse(true) }}
                ><Text>Salvar</Text></TouchableOpacity>}
            </View>

            <View style={styles.container}>
                <LinearGradient
                    colors={['#838993', '#042960']} style={styles.gradiente}>

                    <Image source={{
                        uri: 'https://pngimg.com/uploads/ninja/ninja_PNG26.png'
                    }}
                        style={styles.avatar} />
                    <TouchableOpacity><Text>Foto</Text></TouchableOpacity>

                    <Text style={styles.nome}>Username</Text>

                    {(trueFalse === true) ? <Text>{descricao}</Text> : <TextInput
                        onChangeText={setDescricao}
                        defaultValue={descricao}></TextInput>}
                </LinearGradient>
            </View>
            <Text style={styles.nome}>Sobre mim</Text>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#838993', '#042960']} style={styles.gradiente}>
                    <TextInput />
                </LinearGradient>
            </View>
            <Text style={styles.nome}>Plataformas</Text>
                    <View>
                        <LinearGradient colors={['#838993', '#042960']} style={styles.gradienteMenor}>
                            <Text>PC</Text>
                        </LinearGradient>
                    </View>
            <Text style={styles.nome}>Jogos favoritos</Text>

            {(trueFalse === true) ? <Text>flatlist aqui</Text> : <TouchableOpacity
                onPress={() => { navigation.navigate("Jogos") }}><Text>Editar Jogos</Text></TouchableOpacity>}
            <Text style={styles.nome}>Horarios disponiveis</Text>

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

       
        </ScrollView >
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '20%',
    },
    geral: {

        backgroundColor: '#00182F',
        width: '100%',
        height: '100%',
        padding: '4%'
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
        width: '15%',
        height: '39%',
        margin: '3%',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#FFF'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFF',
        marginTop: '5%'
    },
    descricao: {
        width: '85%',
        height: '15%',
        backgroundColor: '#DBF6FF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    gradiente: {
        height: '100%',
        flexDirection: 'row',
        borderBottomRightRadius: 40,
        borderRadius: 16,
        marginTop: '2%'
    },
    gradienteMenor: {
        borderRadius: 40,
        width: '30%', 
        height: '23%',
        padding:'1%', 
        marginTop: '3%',
        alignSelf: 'center',
        alignItems: 'center'
    },

})