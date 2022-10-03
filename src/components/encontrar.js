import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
export default function Encontrar(){
    return(
        <LinearGradient
        colors={['#656565', '#EAAFC8']} style={{height:'100%'}}>
        <View>
        <Text>Para achar amigos</Text>
        </View>
        </LinearGradient>
    )
}
