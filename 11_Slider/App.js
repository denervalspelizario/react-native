import React, {Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native';  
import Slider from '@react-native-community/slider';   // 1 tem que importar o slider

// 1 para usar o slider tem que se instalar a bibioteca comando no projeto EXPO  npx expo install @react-native-community/slider
// 1  para projetos  npx react-native init o comando será npm install @react-native-community/slider --save
// 1 acesse https://www.npmjs.com/package/@react-native-community/slider  para ver a documentação e dicas de estilos do slider


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor: 0
    }
  }

  render(){
  return (
    <View style={styles.container}>
      

      <Slider 
        // 2 minimunValue é o valor minimo que neste caso é 0
        minimunValue={0}
        // 2 maximumValue é o valor máximo que neste caso é 
        maximumValue={100}
        
        // 2 onValueChange é usada para achar o valor quando se arrasta o item do slider  no caso a bolinha
        // OBS o slider é um traço que cada parte representa por um valor o onValueChange faz o papel de 
        // verificar qual o valor referente ao ponto selecionado do traço, neste caso uma extremidade é 0 e a outra é  100
        onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})} 
        
        // o value que vai receber o state de parametro que no caso é o valor
        value={this.state.valor}
        
        // 4 - controla a cor da linha contada atraz da bolinha
        minimumTrackTintColor='#6495ED'

        // 4 - controla a cor da linha contada a frente  da bolinha
        maximumTrackTintColor='#00FF'


        // 5 controla a cor da bolinha
        thumbTintColor='#00FFFF'	

      
      />
      <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>
      Voce tem  {this.state.valor.toFixed(0)} kg
      </Text>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  
});


export default App;