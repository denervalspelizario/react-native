import React, {Component} from "react";  // o component é para poder ter classes
import {View, Text, Button} from 'react-native';  // a View é igual a div - Text é tipo o h1 ou o p - Button para alterar os estado
 
class App extends Component {  // maneira diferente de criar component diferente do comum - export default function App()
  //contructor recebe todas a propriedades
  constructor(props){
    super(props); // deixando e ele acessar tudo
    
    // dentro deste objetos colocando todas as states que queremos criar
    // estado inicial vazia
    this.state = {
      nome: '',
    }; 

    this.entrar = this.entrar.bind(this); // fazendo assim o entrar pode acessar todas as  linkado a funcao entrar

  }

  // criando a função entrar do botão que ao clicar ela troca de estado inicial vazia( nome : '') para setState (nome: 'D S Pelizario')
  entrar(nome){ // parametro esperado la no this.entrar
    // estado apos o clicque muda de state para setState
    this.setState({
      nome: nome
    })

  }

  render(){
    return(
      <View style={{marginTop: 20}}> 
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center'}} >{this.state.nome}</Text> 
        {/* Importando e Criando um botão  e chamando a funcão entrar atravez do onPress  */}
        <Button title="Entrar" onPress={() => this.entrar('Denerval')}/> 
      </View>
    )
  }
}

export default App;