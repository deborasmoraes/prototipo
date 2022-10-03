import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import  LinearGradient  from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Init({ navigation }) {
  return (
    <LinearGradient
        colors={['#EAAFC8', '#656565']} style={{height:'100%'}}>
   <SafeAreaView>
      <View  style={styles.myduo}>
        <Animatable.View
        animation="fadeInDown" 
        delay={600}>
        <Image 
          source={require('../../assets/myduo.png')}
          style={styles.img}
        ></Image>
        <Text style={styles.corTextoMD}>Myduo</Text>
        </Animatable.View>
      </View>
      
      <Animatable.View
      animation="fadeInUp"
      delay={800}>
        <TouchableOpacity
        style={styles.botaoLogin}
        onPress={() => {
            navigation.navigate('Login')
        }}
        ><Text style={styles.corTexto}>Acesse sua conta</Text></TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoRegistrar}
          onPress={() => {
            navigation.navigate('Registrar', { nome: 'Registrar' })
          }}
        ><Text>Registre-se!</Text></TouchableOpacity>
      </Animatable.View>
    
      </SafeAreaView>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: '#E7F8FE'
   
  },
  myduo: {
    backgroundColor: '#00182F',
    height: '68%',
    width: '100%',
    border: '#1976D2',
    borderWidth: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center'
  },
  botaoLogin:{
    backgroundColor: '#00182F',
    borderRadius: 30,
    color: '#FFFF',
    width: '50%',
    height: '20%',
    padding: '2%',
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: '15%'
  },
  botaoRegistrar:{
    color: '00182F',
    alignSelf: 'center',
    marginTop: '5%'
  },
  corTexto:{
    color: "#FFFF"
  },
  corTextoMD:{
    color: "#FFF",
    textAlign: 'center',
    alignItems: 'center',

  },
  gradient:{
    width: '100%',
    height: '100%'
  },
  img:{
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: '35%'
  }
})