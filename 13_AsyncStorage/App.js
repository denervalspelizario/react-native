import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';  // importando ToucableOpcacity  - Textinput receber dados
import AsyncStorage  from '@react-native-async-storage/async-storage';  // importando o asyncStorage


//  para usar o async storage tem que se instalar a bibioteca comando no projeto EXPO  npx expo install @react-native-async-storage/async-storage
//   para projetos  npx react-native init o comando será npm i @react-native-async-storage/async-storage
//  acesse https://react-native-async-storage.github.io/async-storage/docs/usage/  para ver a documentação e dicas de uso do assync-storage


// SEU USO
// AsyncStorage é uma API nativa do React Native, utilizada para armazenar dados persistentes no dispositivo. É uma forma de salvar dados no formato chave e valor.

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        input: '',
        nome: 'Denerval',
      }
      this.gravarNome = this.gravarNome.bind(this) // nunca esquecer de bindar ela linka ao constructor a funcao gravaNome para funcao poder usar a state
    }  

    gravarNome(){
      if(this.state.input != ''){
        this.setState({nome: this.state.input})
      } else  {
        Alert.alert('Digite algo')
      }
      
    }
  
  
  
  
  render(){

  return (
    <View style={styles.container}>
     
      <View style={styles.viewInput}>
        <TextInput  // recebe dados
          style={styles.input} // estilizacao do input
          value={this.state.input}  // valor recebido pelo usuario, na state input se inicia vazia(linha 8)
          
          onChangeText={(text) => this.setState({input: text})} // onChangeText funcao que funciona AO DIGITAR no input 
                                                                // ao receber o parametro(text) altera a state(setState) de input : ''(linha 8) para input: text(texto digitado)
          
          underlineColorAndroid='transparent'  // linha abaixo da digitacao recebe cor transparente
        />
                                  {/* funcao gravarNome é chamada ao clicar(onPress)*/}          
        <TouchableOpacity onPress={this.gravarNome}>
          <Text style={styles.btn}> + </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{this.state.nome}</Text>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center', // centralizando
  },
  viewInput: {
    flexDirection:'row', // direcao em linha 
    alignItems: 'center', // centralizando
    marginTop: 10,
  },
  input: {
    flex: 1, // ocupando o maximo de espaco permitido
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    
  },
  btn: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    margin: 3,
  },
  nome: {
    fontSize: 30,
    textAlign: 'center',
  }
  
});


export default App;