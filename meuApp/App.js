import React, {Component} from "react";  // o component é para poder ter classes
import {View, Text} from 'react-native';  // a View é igual a div - Text é tipo o h1 ou o p
 
class App extends Component {  // maneira diferente de criar component diferente do comum - export default function App()
  render(){
    return(
      <View>
        <Text>Desenvolvimento Mobile</Text>
        <Text>React-Native</Text>
      </View>
    )
  }
}

export default App
