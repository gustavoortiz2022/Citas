/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {  
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Pressable,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';


const App = () => {

//HOOKS
const [modalVisible, setModalVisible]  = useState(false)
const [pacientes, setPacientes]  = useState([])



console.log(modalVisible)


/*const nuevaCitaHandler = () => {
  console.log('diste un click.......');
}*/

  return (
<SafeAreaView style = {styles.container}>
    <Text style={styles.titulo}>Administrador de citas3 {' '}
      <Text style={styles.tituloBold}>Veterinaria</Text>
    </Text>

    <Pressable
      onPress={() => setModalVisible(true)}
      style={styles.btnNuevaCita}
    >
      <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
    </Pressable>

    <Formulario
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      pacientes={pacientes}
      setPacientes={setPacientes}
    />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {      
      backgroundColor: '#F3F4F6',
      flex:1
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#374151',
    fontWeight:'600'
  },
  tituloBold: {
    fontWeight:'bold',
    color:'#6D28D9'
  },
  btnNuevaCita:{
    backgroundColor:'#6d28d9',
    padding: 15,
    marginTop: 20,
    marginHorizontal:20,
    borderRadius:10
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#FFF',
    fontSize: 20,
    fontWeight:'bold',
    textTransform:'uppercase'
  }
})

export default App;
