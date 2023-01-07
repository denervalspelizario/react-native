import React, {Component} from "react";  // o component é para poder ter classes
import {View, Text, Image} from 'react-native';  // a View é igual a div - Text é tipo o h1 ou o p - Image é para importar imagens
 
class App extends Component {  // maneira diferente de criar component diferente do comum - export default function App()
  render(){
    return(
      <View> 
        <Text>Desenvolvimento Mobile</Text> 
        <Text>React-Native</Text>
        {/* estilizando in line nao recomendado */}
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          Por D S Pelizario 
        </Text>

        <Image 
          source={{uri: 'https://sujeitoprogramador.com/steve.png'}}
          style={{width: 300, height: 300, marginLeft: 50}}
        />

      </View>
    )
  }
}

export default App
