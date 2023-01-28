import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';   // Flatlist componente preformatico para grande listas

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
        renderItem={({item}) =>  <Pessoa data={item}/> } // 2 o renderItem é oque mostra a lista   nele contem uma funcao  que o component Pessoa recebe o item   
      
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
  areaPessoa: {
    backgroundColor: '#1E90FF',
    marginTop: 30,
  },
  textPessoa: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#00BFFF',
    margin: 20,
    fontStyle: 'Helvetica',
    color: '#fff',
    padding: 10
  }
  
  
});


export default App;


class Pessoa extends Component {
  render(){
    return(
      <View style={styles.areaPessoa}>
        {/* 3 o texto recebe o props data.nome que esta recebendo o feed que é o state que contem uma array de lista que tem o elemento nome */}
        <Text style={styles.textPessoa}>nome : {this.props.data.nome}</Text>
        {/* 5 os textos recebem o props data.idade e data.email que estao recebendo o feed que é o state que contem uma array de lista que tem o elementos idade e email */}  
        <Text style={styles.textPessoa}>idade : {this.props.data.idade}</Text>  
        <Text style={styles.textPessoa}>email : {this.props.data.email}</Text>  
      </View>
    );
  }
}