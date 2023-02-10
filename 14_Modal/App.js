import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Modal  } from 'react-native';  // importando botao e modal 
import Entrar from './component/Entrar';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      modalVisible: false // state para uso do modal 
    }
    this.entrar = this.entrar.bind(this); // bind para linkar conteudo da state(usar conteudo da state) a funcao entrar 
    this.sair = this.sair.bind(this); // bind para linkar conteudo da state(usar conteudo da state) a funcao sair 
  }

  entrar(){ // funcao entrar chamada ao clicar no botao(linha 22)
    if(this.state.modalVisible == false){  
      this.setState({modalVisible: true}) //  altera o state modalVisible para true e assim mostra o modal(olhar linha 29)
    }
  }

  sair(){ // funcao sair chamada ao clicar no botao(linha 13 Entrar.js)
    if(this.state.modalVisible == true){  
      this.setState({modalVisible: false}) //  altera o state modalVisible para false e assim mostra o modal(olhar linha 29)
    }
  }

  render(){
  return (
    <View style={styles.container}>
       {/* Botão  com nome Entrar ao clicar(onPress) chama funcao entrar */}   
      <Button title='Entrar' onPress={ this.entrar}/>


      <Modal 
        transparent={true} // deixa o fundo fora do modal transparent
        animationType='slide' // modal inicia tela de baixo pra cima existe a opçao 'fade' também ela aparece na tela sem animacao (olhar documentacao)
                              // https://reactnative.dev/docs/modal                                
        visible={this.state.modalVisible} // mostra quando sera MOSTRADA o modal, neste caso quando o state modalVisible estiver true 
      >
        <View style={styles.containerModal}>
          {/* Recebe o componente entrar   que recebe o props(parametro) sair que é uma funcao (linha 22)*/}
          <Entrar sair={this.sair}/>  
        </View>
      </Modal>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
  
  containerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  }
  
  
});


export default App;