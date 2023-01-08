import React, {Component} from "react";  // o component é para poder ter classes
import {View, Text, StyleSheet} from 'react-native';  // a View é igual a div - Text é tipo o h1 ou o p - Button para alterar os estado
 
class App extends Component {  // maneira diferente de criar component diferente do comum - export default function App()
  
  render(){
    return(
      // estilizacao
      <View style={{flex: 1, backgroundColor: '#ccc'}}>
        <View style={styles.area}>   
          {/* Aplicando duas classes juntas ao elemento */} 
          <Text style={[styles.textoPrincipal, styles.textoComBorda]}>Eu sou texto 1</Text> 
          <Text style={styles.textoSecundario}>Eu sou texto 2</Text>
          <Text style={styles.textoTerciario}>Eu sou texto 3</Text>
          <Text style={styles.textoQuartenario}>Eu sou texto 4</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#222', paddingTop: 100, paddingBottom: 100}}>
          <View style={{flex: 1, backgroundColor: '#FF0000'}}></View>
          <View style={{flex: 2, backgroundColor: 'green'}}></View>
          <View style={{flex: 3, backgroundColor: 'yellow'}}></View>
        </View>
      </View>
      
    )
  }
}


// estilizacao 
const styles = StyleSheet.create({
  area: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
    
  }, 
  textoComBorda: {
    borderBottomColor: '#000',
    borderWidth: 2,
    width: 200,
    
  },

  textoPrincipal: {
    fontSize: 25,
    color: '#6a5acd',
    textAlign: 'center'
  },
  textoSecundario: {
    fontSize: 25,
    color: '#CC1648',
    
  },
  textoTerciario: {
    fontSize: 25,
    color: '#00BFFF',
    
  },
  textoQuartenario: {
    fontSize: 25,
    color: '#00FF00',
    
  }

  
});

export default App;