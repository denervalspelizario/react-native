import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';  // 1 input 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {  // 1 state usado no texto que neste caso começa com Desenvovledor mas pode ser vazio ou qualquer nome
                    //1  para depois mudar de estado com o pegaNome
      nome: 'Desenvolvedor'
    };

    this.pegaNome = this.pegaNome.bind(this);  // 1 atravez deste bind ele linka a funcao pega nome ao state nome la no text
  }

  pegaNome(texto){  // 1  funcao  que usa parametro texto e SE texto digitado > que 0 ele altera o state por setState que no caso aqui recebe o parametro texto
                    // 1  que é o texto digitado... se nada digitado ele continua como vazio   
    if(texto.length > 0){
      this.setState({nome: texto});
    }else{
      this.setState({nome: 'Desenvolvedor'})
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <TextInput
        style={styles.input}
        placeholder="Digite seu nome?" 
        underlineColorAndroid="transparent"  // 1 retira o inderline padrao do texto digitado
        onChangeText={this.pegaNome}  // 1 onChange  pega o item no caso o pegaNome ao digitar ou sej a  a acao e feita ao DIGITAR
        />
        {/* 1 O text que é inserido é o state Nome que é dinamico */}
        <Text style={styles.texto}>Bem vindo {this.state.nome}</Text> 

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


