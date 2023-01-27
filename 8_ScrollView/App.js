import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';  // ScrollView é o componente que permite scrollar a tela do celular 

class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      {/* tudo que estiver dentro do componente Scrollview vai permitir escrollar */}
      {/* showsVerticalScrollIndicator  ou showsHorizontalScrollIndicator no false desabilita barra de rolagem */}
      {/* horizontal no true scrolla pro pra horizontal */}
      <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1:{
    backgroundColor: '#6A5ACD',
    height: 250,
    width: 500,
  },
  box2:{
    backgroundColor: '#00BFFF',
    height: 250,
    width: 500,
  },
  box3:{
    backgroundColor: '#00FF7F',
    height: 250,
    width: 500,
  },
  box4:{
    backgroundColor: '#FF1493',
    height: 250,
    width: 500,
  }
});


export default App;