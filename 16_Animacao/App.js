import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';  // precisa importar a Animated

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      larguraAnimada: new Animated.Value(150), // state animada com valor inicial 150 (leia linha 65)
      alturaAnimada: new Animated.Value(50), // state animada com valor inicial 50  (leia linha 66)
      opacidadeAnimada: new Animated.Value(0)

    };

    Animated.sequence([ /* quando precisa de uma sequancia de varia animações  o animated.timing fica dentro de um animated.sequence
                           ** o sequence indica animacao em sequencia se quisermos que todas as animações se façam juntas 
                           alterasse sequence para parallel  olhar documentacao https://reactnative.dev/docs/animated */

      Animated.timing(  // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
        this.state.opacidadeAnimada,
        {
          toValue: 1,
          duration: 3000
        }           
      ),   
      
      Animated.parallel([   // animação começa com sequence(em cascata ou sequnciada) e agora animação são feitas em paralelo(tudo junto)

        Animated.timing( // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
          this.state.larguraAnimada,
          {
            toValue: 300,
            duration: 2000
          }
        ),
        Animated.timing(  // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
          this.state.alturaAnimada,
          {
            toValue: 300,
            duration: 2000
          }
        ),
      ]),
      // apartir daqui volta a ser em sequence(cascata ou sequencia)
      Animated.timing(  // a cada animação pedida a estrutura é a mesma => Animated.timing => state que deseja alterar => alteração 
        this.state.opacidadeAnimada,
        {
          toValue: 0,
          duration: 3000
        }           
      ),  

    ]).start()  // funcao para estartar a  animação lembrando que a animacao neste caso esta fazendo em cascata faz a do state alrguraAnimada e depois alturaAnimada



   /* Animated.timing( 
      this.state.larguraAnimada,  // parametros de animação da state larguraAnimada
      {                             
        toValue: 300, // altera de 150 para 300 o valor(leia linha 9)
        duration: 2000  // durantion em milissegundos ou seja altera o valor de 150 pra 300 em 2 segundos
      },
      

    ).start() // funcao para estartar a animação */

  }

  render(){
  return (
    <View style={styles.container}>

      <Animated.View style={{  // estamos dizendo que a View será animada
                    width: this.state.larguraAnimada, // o tamanho será uma state que será alterada
                    height: this.state.alturaAnimada, // a altura será uma state que será alterada
                    opacity: this.state.opacidadeAnimada, // a opacidade será uma state que será alterada
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