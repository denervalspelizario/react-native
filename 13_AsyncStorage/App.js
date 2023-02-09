import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Keyboard } from 'react-native';  // importando ToucableOpcacity  - Textinput receber dados - keyboard
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
        nome: '',
      }
      this.gravarNome = this.gravarNome.bind(this) // nunca esquecer de bindar ela linka ao constructor a funcao gravaNome para funcao poder usar a state
    }  

    // nas duas funcoes usasse funcoes assincronas ou seja funcoes que tem tempo determinado para ser usada

    // 2 - ComponentDidMount - Quando o componente é montado em tela - aqui é onde pega o dado salvo e mostra assim que inicia o app igual um memory card
    async componentDidMount(){
      await AsyncStorage.getItem('nome').then((value) => {   // 2 - pega o item no banco assim que é chamada o dado da key 'nome'(olhar linha 34)
                                                             // 2 - then(se estiver correta) joga o valor 'nome' no parametro value 
        this.setState({nome: value})  // 2 - e altera a state nome com valor de value(recebeu valor de 'nome') - leia linha apatir 34 para saber o valor de 'nome' 
        
      })
    }

    // 1 - ComponentDidUpdate - toda vez que um state é atualizado fazer algo - aqui é onde se salva o dado após a interacao
    async componentDidUpdate(_,prevState){  // 1 - o prevState é o statdo anterior
      const nome = this.state.nome  // 1- passando o valor state nome para a constante nome
      
      if(prevState !== nome){   // 1 - se o estado anterior é diferente do estado de agora? 
        await  AsyncStorage.setItem('nome', nome) // 1 - AsyncStorage salva o item na chave 'nome'(parametro 1)  o conteudo nome(parametro 2)
                                           // 1 - ou seja parametro 1 é o nome da chave para acessar o dado salvo
                                           // 1 - e o parametro 2 da onde vem o dado no caso da constante nome(linha 31) que recebeu o state nome 

      }

    }


    gravarNome(){
      if(this.state.input != ''){  // se state input estiver diferente de vazia
        this.setState({nome: this.state.input}) // altera o valor de state nome(estava vazio linha 19) por pelo valor que foi colocado no state input(oque foi digitado) 
        alert('Nomes alvo com sucesso')
        Keyboard.dismiss // após importalo(linha 2)  ao chamar o keyboard.dismiss eu to garatindo que o teclado vai sumir após chamar a funcao(clicar o botão)
      } else  { 
        Alert.alert('Digite algo') // alerta para digitar algo, este alerfta precisa ser importado pois ele dá pra estilizar diferente do primeiro
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