import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';  
import { Picker } from '@react-native-picker/picker'; // 2 importanção do picker depois de instalado



// 1 para usar o picker tem que se instalar a bibioteca comando no porjeto EXPO  npx expo install @react-native-picker/picker
// 1  para projetos  npx react-native init o comando será npm install @react-native-community/picker --save



class App extends Component {
  constructor (props){
    super(props);
    this.state = {  // 3 criando os states
      pizza: 0,
      pizzas: [  // 4 trabalhando com picker de forma dinâmica 
        {key: 1, nome: 'completa', preco: 35.90},
        {key: 2, nome: 'atum', preco: 38.90},
        {key: 3, nome: 'caipira', preco: 36.90},
        {key: 4, nome: 'baiana', preco: 39.90},
        {key: 5, nome: '4 queijos', preco: 42.90},
      ], 
    };
    
  };



  render(){
    // 4 criando uma variável que recebe o state pizza(array de objetos) comd dados das pizzas  
                  // 4  com a funçao map vai percorrer em todas os objetos e retorna com itens abaixo                      
    let pizzasItem = this.state.pizzas.map((value, key) => {
      return <Picker.Item  key={key}  value={key}   label={value.nome}/> // key e value valores de referencia e label oque vai aparecer para o user

    })  

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu de Pizza</Text>

      {/* 2 importando o picker */}
      <Picker
        // 3 Propriedades do Picker
        selectedValue={this.state.pizza} // 3 adicionando state pizza no selectdValue                                    
        onValueChange={(intemValue, itemIndex) => this.setState({pizza: intemValue})} // 3 recebe função com 2 parametros (valor, posição) esse itemValue seria o value do piker.item
                                                                                      // 3 ao CLICAR  no item vai  trocar o valor do state pizza por itemValue(value do picker)       
      >
      {/* comentando cod de picker statico para funcionar picker dinamico
        <Picker.Item  key={1} value={1} label='Calabresa' />
        <Picker.Item  key={2} value={2} label='Portuguesa' />
        <Picker.Item  key={3} value={3} label='Especial' />
        <Picker.Item  key={4} value={4} label='2 Queijos' />
        <Picker.Item  key={5} value={5} label='Calabresa' />
       */} 
       {/* 4 abaixo é adicionado a variável pizzasItem que como dito acima retorna o map de todos os objetos da array pizzas
            e ja esta formatado na forma Picker.Item , olhar linha 33 e 34*/}
       {pizzasItem}
      </Picker>
                            {/*  4 - atravez de state pizza que fica dentro do state pizzas se acessa o nome e preço de forma dinamica */}              
      <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>  
      <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.pizza].preco.toFixed(2)}</Text>
      {/*  4 -  apenas reforçando  o this.state.pizzas é a array de objetos que é linkada com a funçao pizzaItem(linha 33)  
                se orienta exatamente pq na linha 33 se diz claramente que value e key recebem como parametro o key
                que é no caso o key do objeto dentro da array pizzas (linha 18,19,20,21 e 22)
                Obs- toFixed(2) fucnao javascript para aumentar duas casas decimais 
      */}              

       
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // pegando o tamanho inteiro da tela
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 28,
    textAlign: 'center',
  },
  pizzaText: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
  },

  
});


export default App;