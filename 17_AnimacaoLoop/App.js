import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated,LogBox } from 'react-native';  // precisa importar a Animated .. LogBox para desativar erro(leia linha 68)

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      larguraAnimada: new Animated.Value(150), // state animada com valor inicial 150 (leia linha 65)
      alturaAnimada: new Animated.Value(35), // state animada com valor inicial 50  (leia linha 66)
    };

    Animated.loop(  // funcao animated que cria um looping
      Animated.sequence([ // criando a animação em sequencia(cascata) 

        Animated.parallel([ // neste momento terá 2 animações que serão em conjunto ou paralelas(parallel)
          Animated.timing( // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
            this.state.larguraAnimada,
            {
              toValue: 200,
              duration: 700,
              
            }
          ),
          Animated.timing( // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
            this.state.alturaAnimada,
            {
              toValue: 100,
              duration: 700,
              
            }
          ),
        ]),

        Animated.parallel([  // depois de fazer a animação em conjunto desce pra esta linha  faz mais  2 animações em conjunto
          Animated.timing( // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
            this.state.larguraAnimada,
            {
              toValue: 150,
              duration: 700,
              
            }
          ),
          Animated.timing( // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
            this.state.alturaAnimada,
            {
              toValue: 35,
              duration: 700,
              
            }
          ),
        ]),
  
      ])  
    ).start(); // funcao para estartar a animação */
  }


componentDidMount() {  
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']); // Importante funcao para desativar erro de useNativeDriver
}

  render(){
  return (
    <View style={styles.container}>

      <Animated.View style={{  // estamos dizendo que a View será animada
                    width: this.state.larguraAnimada, // o tamanho será uma state que será alterada
                    height: this.state.alturaAnimada, // a altura será uma state que será alterada
                    backgroundColor: '#4169e1', 
                    justifyContent: 'center',
                    borderRadius: 25,
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