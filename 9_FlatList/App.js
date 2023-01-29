import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';   // Flatlist componente preformatico para grande listas
import Pessoas from './components/Pessoas';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      feed: [ // lista que funciona como array chamada feed
        {id: 1, nome: 'Denerval', idade: 35, email: 'denervalspelizario@gmail.com'},
        {id: 2, nome: 'Francisca', idade: 29, email: 'francisca@gmail.com'},
        {id: 3, nome: 'Gabriela', idade: 11, email: 'gabriela@gmail.com'},
        {id: 4, nome: 'Pedro', idade: 8, email: 'pedro@gmail.com'},
      ]
    };
  }

  render(){
  return (
    <View style={styles.container}>
      {/*
          O componente FlatList exibe uma lista de rolagem de dados que podem ser alterados e que possuem estrutura semelhante.
          FlatList funciona bem para longas listas de dados, onde o número de itens pode mudar ao longo do tempo 
      */}
      <FlatList   
        showsVerticalScrollIndicator={false}
        data={this.state.feed} // 1 data recebe o state feed que tem a array de listas
        keyExtractor={(item) => item.id} // 4 o keyExtractor é usado quando a lotsa não tem id e vc quer especificar qual seria a id
        renderItem={({item}) =>  <Pessoas data={item}/> } // 2 o renderItem é oque mostra a lista   nele contem uma funcao  que o component Pessoa recebe o item   
      
      />
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#483D8B',
    paddingTop: 25,
    paddingBottom: 30,
    
  },
  
});


export default App;


