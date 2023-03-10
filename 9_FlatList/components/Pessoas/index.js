import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';   // Flatlist componente preformatico para grande listas

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


  const styles = StyleSheet.create({
    
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


export default Pessoa;