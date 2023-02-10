import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native'; 

class Entrar extends Component {

  render(){
  return (
    
        <View style={styles.containerModal}>
          <Text style={styles.textModal}>Seja bem vindo!!</Text>
          
                                        {/* Ao clicar(onPress) chama o props no caso a funcao sair (linha 22 app.js)*/}
          <TouchableOpacity style={styles.btn}  onPress={this.props.sair}>
            <Text style={styles.textBtn}>Sair</Text>
          </TouchableOpacity>
        </View>
     
    );
  }
}


const styles = StyleSheet.create({
    containerModal: {
      width: 350,
      height: 300,
      alignItems: 'center',
      backgroundColor: '#292929',
      borderRadius: 20
      
    },
    textModal: {
      marginTop: '20%',  
      color: '#fff',
      fontSize: 28,
    },
    btn: {
      width: 70,
      height: 50,
      borderRadius: 20,  
      marginTop: 80,   
      backgroundColor: '#6A5ACD',  
      justifyContent: 'center',
      alignItems: 'center',  
    },
    textBtn:{
      fontSize: 20,
      color: '#FFF'          
    }
    
    
  });


export default Entrar;