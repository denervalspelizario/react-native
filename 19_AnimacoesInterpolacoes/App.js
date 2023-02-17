import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated ,LogBox } from 'react-native';  // precisa importar a Animated .. LogBox para desativar erro(leia linha 68)

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      larguraAnimada: new Animated.Value(0),  // state animada com valor inicial 0
    };

    Animated.timing(   // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
      this.state.larguraAnimada,
      {
        toValue: 100,
        duration: 3000
      }
    
    ).start()  // funcao para estartar a animação */

  } 


componentDidMount() {  
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']); // Importante funcao para desativar erro de useNativeDriver
}

  render(){

    let porcentagemAnimate = this.state.larguraAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })
    /*
      Para uso de porcentagem é necessário adaptação repassando a uma variável(porcentagemAnimate) 
      a state larguraAnimada com inputRange - (entrada de dado) que vai de 0 a 100
      e tem saida de dado(outpuRange) 0% a 100% Ou seja tranforma o 0 em 0% e o 100 em 100%  
      o dado 0 vem do valor incial da state larguraAnimada(linha 9) e o 100 vem Animated toValue (linha 16)
      e esta variável sera usada como valor para tamanho de uma view (leia linha 51)

      Ou seja vc cria-se a state => cria a animacao com valores desejados => 
      cria a variacao que transforma os valores em porcentagem => usa a variavel como valor ao item que deseja animar(leia linha 51)
      
    */


  return (
    <View style={styles.container}>

      <Animated.View style={{backgroundColor: '#4169',
                    width: porcentagemAnimate,  // width recebe valor de  variavel porecentagemAnimate(leia linha 30)
                    height: 25
                  }}>

      </Animated.View>

      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  
});


export default App;