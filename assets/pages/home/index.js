import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'



let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  
  function gerarSenha(){
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return(

    <View style={styles.container}>
      <View>
        <Text style={{color:"#fff", fontWeight:"bold", fontSize: 30}}>Gerador de Senhas</Text>
      </View>
      <Image
        source={require('../../1logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{ height: 50}}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor='#ff0000'
          maximumTrackTintColor='#00f'
          thumbTintColor='#FF5733'
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
          <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) } />
      </Modal>


    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold"
  },
  container:{
    flex:1,
    backgroundColor: "#131076",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8
  },
  button:{
    backgroundColor: "#ff0000",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    borderRadius: 7
  },
  buttonText:{
    color: "#fff",
    fontSize: 20
  }

})