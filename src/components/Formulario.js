import React, {useState} from 'react';
import{ Modal,Text, Button, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';

//import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-date-picker';


const Formulario = ({modalVisible, setModalVisible, setPacientes, pacientes}) => {
 
  //const  {modalVisible} = props;
  const [paciente, setPaciente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState(new Date)
  const [sintomas, setSintomas] = useState('')

  const handleCita = () => {
    console.log('presionaste agregar paciente')
    if([paciente, propietario, email, fecha, sintomas].includes('')){
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
       
      )
      return
    } 
    
    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas
    }

    setPacientes([...pacientes, nuevoPaciente])

  }

  return (
    <Modal
      
      animationType='slide'
      visible={modalVisible}
    >      

    <SafeAreaView
        style={styles.contenido}
    >

    <ScrollView>

        <Text
            style={styles.titulo}
        >Nueva {' '}
            <Text
                style={styles.tituloBold}
            >Cita</Text>

        </Text>

        

        <Pressable style={styles.btnCancelar} onLongPress={() => setModalVisible(!modalVisible) }>
            <Text style={styles.btnCancelarTexto}>XX Cancelar</Text>
        </Pressable>

              <View>
                  <Text
                    style={styles.label}
                  >
                      Nombre del paciente
                  </Text>
                  <TextInput                     
                    style={styles.input}
                    placeholder='Nombre del paciente'
                    placeholderTextColor={'#666'}
                    value={paciente}
                    onChangeText={setPaciente}
                  />
              </View>

              <View>
                  <Text
                    style={styles.label}
                  >
                      Nombre Propietario
                  </Text>
                  <TextInput                     
                    style={styles.input}
                    placeholder='Nombre Propietario'
                    value={propietario}
                    onChangeText={setPropietario}
                  />
              </View>


              <View>
                  <Text
                    style={styles.label}
                  >
                      Email Propietario
                  </Text>
                  <TextInput 
                    style={styles.input}
                    keyboardType='email-address'
                    placeholder='Email Propietario'
                    value={email}
                    onChangeText={setEmail}
                  />
              </View>

              <View>
                  <Text
                    style={styles.label}
                  >
                      Telefono Propietario
                  </Text>
                  <TextInput 
                    style={styles.input}
                    keyboardType='email-address'
                    placeholder='Telefono Propietario'
                    value={telefono}
                    onChangeText={setTelefono}
                    maxLength={10}
                  />
              </View>

              <View>
                  <Text style={styles.label}>Fecha Alta</Text>
                    <View style={styles.fechaContenedor}>
                      <DatePicker
                        date={fecha}
                        locale='es'
                        onDateChange={ (date)=> setFecha(date) }
                      />
                    </View>
                  
              </View>

              <View>
                  <Text
                    style={styles.label}
                  >
                      Sintomas
                  </Text>
                  <TextInput 
                    style={[styles.input,styles.sintomasInput]} 
                    placeholder='Sintomas' 
                    value={sintomas}
                    onChangeText={setSintomas}  
                    multiline={true}
                    numberOfLines={4}                
                  />
              </View>  


            <Pressable style={styles.bntNuevaCita}
              onPress={handleCita}
            >
              <Text style={styles.bntNuevaCitaTexto}>Agregar Paciente</Text>
            </Pressable>  

              </ScrollView>
    </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
    contenido:{
        backgroundColor:'#6D28D9',
        flex:1
    },
    titulo:{
        fontSize:30,
        fontWeight:'600',
        textAlign:'center',
        marginTop:30,
        color: '#FFF'
    },
    tituloBold:{
        fontWeight: '900'
    },
    campo:{
        marginTop: 40,
        marginHorizontal: 30        
    },
    label:{
        color:'#FFF',
        marginBottom: 10,
        marginTop:40,
        fontSize:20,
        fontWeight:'600',
        marginHorizontal:30
    },
    input:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,        
        marginHorizontal:30
    },
    sintomasInput:{
        height:100
    },
    fechaContenedor:{
      backgroundColor:'white',
      borderRadius:10,
      marginHorizontal:30
    },
    btnCancelar:{
      backgroundColor:'#5827A4',
      marginVertical:30,      
      marginHorizontal:30,
      padding:20,
      borderRadius:10,
      borderWidth:1,
      borderColor:'#FFF'
    },
    btnCancelarTexto:{
      color:'#FFF',
      textAlign:'center',
      fontWeight:'900',
      fontSize:16,
      textTransform:'uppercase'
    },
    bntNuevaCita:{      
      backgroundColor:'#F59E0B',
      marginVertical:30,      
      marginHorizontal:30,
      padding:20,
      borderRadius:10,
      borderWidth:1,
      borderColor:'#FFF'

    },
    bntNuevaCitaTexto:{
      textAlign:'center',
      color:'#5827A4',
      textTransform:'uppercase',
      fontWeight:'700'

    }
})

export default Formulario