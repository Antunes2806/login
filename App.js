import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <Text style={[styles.login]}>Faça seu login!</Text>
    <TextInput style={styles.input} placeholder="Digite seu email:"/>
    <TextInput style={styles.input} placeholder="Digite sua senha:" secureTextEntry={true}/>
   </View>
  );
}



//css
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'pink',
  alignItems: 'center',
  justifyContent: 'center',
 },
  
  input: {
    height:40,
    margin: 12,
    borderWidth: 1,
    padding: 30,
  },

  login: {
     color: 'purple',
     fontSize: 50,
     bottom: 150,
  }

  })
   {/* <TextInput style={styles.inputName}
       placeholder='TESTING'
       inputMode='numeric'
       secureTextEntry={true}
       placeholderTextColor='red'
       onChangeText={changeText}
       />
   </View> */}