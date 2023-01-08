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
        {/* Estilizando via props  e passando info,  o name é info do Text*/}  
        <Jobs  largura={500} altura={200} name={'Steve Jobs'} />      
      </View>
    )
  }
}

export default App;


// Criando um segundo component 'Jobs'
class Jobs extends Component {
  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';
    

    return(
      <View> 
        <Image  
          source={{uri: img }}
          style={{width: this.props.largura, height: this.props.altura}} // estilizando via props
        /> 
        
        <Text style={{textAlign: 'center', fontSize: 30}}>
          {this.props.name} 
        </Text> 
      </View>
    )
  }
}

