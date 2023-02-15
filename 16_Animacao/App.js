import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';  // precisa importar a Animated

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      larguraAnimada: new Animated.Value(150), // state animada com valor inicial 150
      alturaAnimada: new Animated.Value(50), // state animada com valor inicial 50

    };

    Animated.timing(
      this.state.larguraAnimada,  
      {                             // parametros de animação da larguraAnimada
        toValue: 300, // altera de 150 para 300 o valor(leia linha 9)
        duration: 2000  // durantion em milissegundos ou seja altera o valor de 150 pra 300 em 2 segundos
      },
      

    ).start() // funcao para estartar a animação

  }


  render(){
  return (
    <View style={styles.container}>

      <Animated.View style={{  // estamos dizendo que a View será animada
                    width: this.state.larguraAnimada, // o tamanho será uma state que será alterada
                    height: this.state.alturaAnimada, // a altura será uma state que será alterada
                    backgroundColor: '#4169e1', 
                    justifyContent: 'center'
                  }}>
        <Text style={{color: '#fff', fontSize: 22, textAlign: 'center'}}>...Carregando</Text>
      </Animated.View>
    
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});


export default App;