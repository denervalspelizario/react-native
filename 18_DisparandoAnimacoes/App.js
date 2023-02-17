import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated,TouchableOpacity ,LogBox } from 'react-native';  // precisa importar a Animated .. LogBox para desativar erro(leia linha 68)

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      larguraAnimada: new Animated.Value(150), // state animada com valor inicial 150 (leia linha 65)
      alturaAnimada: new Animated.Value(35), // state animada com valor inicial 50  (leia linha 66)
      opAnimada: new Animated.Value(0),
    };

    this.carregarGrafico = this.carregarGrafico.bind(this) // bind para linkar funcao carregarGrafico com dados da state

  } 

  carregarGrafico(){  // funcao que será chamada ao clicar no botão(leila linha 31)
    Animated.sequence([
      Animated.timing(
        this.state.opAnimada,
        {
          toValue: 1,
          duration: 1000
        }
      ),

      Animated.timing(
        this.state.alturaAnimada,
        {
          toValue: 300,
          duration: 1000
        }
      )


    ]).start();

  }


componentDidMount() {  
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']); // Importante funcao para desativar erro de useNativeDriver
}

  render(){
  return (
    <View style={{flex: 1}}>

      <View style={{ height: 80, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#4169e1'}}>
        <TouchableOpacity onPress={this.carregarGrafico}>
          <Text style={{fontSize: 25, color: '#FFF'}}>Gerar Gráfico</Text>
        </TouchableOpacity>
      </View>  

      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>

        <Animated.Text style={{opacity: this.state.opAnimada}}>Vendas</Animated.Text>
        <Animated.View style={{  // estamos dizendo que a View será animada
                                width: this.state.larguraAnimada, // o tamanho será uma state que será alterada
                                height: this.state.alturaAnimada, // a altura será uma state que será alterada
                                opacity: this.state.opAnimada,
                                backgroundColor: '#FF0000', 
                                justifyContent: 'center',
                              }}>

          <Text style={{color: '#fff', fontSize: 22, textAlign: 'center'}}>R$ 150,00</Text>
        </Animated.View>

      </View>

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