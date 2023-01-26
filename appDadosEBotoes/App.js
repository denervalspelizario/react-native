import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';  // 1 input  2 inportando o botao 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {  // 1 state usado no texto que neste caso começa com Desenvovledor mas pode ser vazio ou qualquer nome
                    //1  para depois mudar de estado com o pegaNome
      nome: 'Desenvolvedor',
      input: ''
    };
    this.entrar = this.entrar.bind(this);  // 2 atravez deste bind ele linka a funcao entrar é acionada ao clicar
  }

  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome')
    }else {
      this.setState({nome: this.state.input}) // 2 o setState recebe o state do input
    }
   

  }


  render(){
    return(
      <View style={styles.container}>

        <TextInput
        style={styles.input}
        placeholder="Digite seu nome?" 
        underlineColorAndroid="transparent"  // 1 retira o inderline padrao do texto digitado
        onChangeText={(texto) => this.setState({input: texto})} // 1 onChangeText pega o texto digitado no input 
                                                                // 2 com essa funcao ao digitar o state que é "Desenvovledor" 
                                                                // 2 que muda para setState que é o texto recebido pelo parametro texto 
        />
        {/* 1 O text que é inserido é o state Nome que é dinamico */}
        <Text style={styles.texto}>Bem vindo {this.state.nome}</Text> 
        {/* 2 - criando um botão  com nome de entrar e o onPress tem a mesma funcao do onClick no react */}
        {/* 2 - entrar funcao que é chamada ao pressionar */}
        <Button title='Entrar' onPress={this.entrar}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{  // 1 tem que estilizar o input pois diferente do html web ele nao vem padrao entao ele vem sem padrao
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }
});



export default App;


