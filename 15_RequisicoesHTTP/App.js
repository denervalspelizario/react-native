import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, ActivityIndicator  } from 'react-native';   // importando o flatlist para lista itens da api(response) 3 importando circulo de carregando
import api from './src/services/api'; // 1 importando api
import Filmes from './src/Component/Filmes'; // importando componente


// * 1 para usar a requisicao de http no expo tem que se instalar a bibioteca comando npm install axios 
// * 1 depois olhar /service/api.js(sempre minusculo) onde sera inportado a biblioteca axios(para requisição da api)
// * se for numa criacao normal será npm i react-native-axios
// documentacao  https://www.npmjs.com/package/react-native-axios

// 3 criando state de loading, que se usa enquanto não se esta carregando os dados (leia liha 27)


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      filmes: [], // ** 1 state filmes que é um array vazio
      loading: true  // inicial ligado e desliga quando a funcao (linha 27) terminar de carregar os dados
    }
  } 
  
  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes')  // ** 1  o response recebe todos os dados da url api base + 'r-api/?api=filmes' que é o dado específico (base + especifico)
                                                         //    1 que sera todo o conteudo de //https://sujeitoprogramador.com/r-api/?api=filmes
                                                         // 1 metodo get que retorna um elemento específico

    this.setState({ //** 1 altera o state array filmes de vazio para dados do response(linha 23) .data 
      filmes: response.data,  // ** 1 as informações vem do axios vem sempre no api.data(no caso response.data) 
      
      loading: false  // 3 - desliga o loading assim que é carregado os dados 
     
    }) 
                                                            
  }
  // 1  async(linha 22) e o await (linha 23) faz com que espere a requisição ser feita  para dar o resultado

  render(){
    // 3 para fazer o carregamento é como se fosse 2 paginas 1 que funciona quando loading esta true que neste caso usa-se uma animacao de carregamento(ActivityIndicator)
    //  e outra quando o loading esta desligado que mostra todos os dados que precisava carregar

    if(this.state.loading){ // 3 se loading estiver true ou seja os dados ainda não carregaram
      return(
        <View style={styles.container}> 
          <ActivityIndicator  color='#09a6ff' size='large' />
        </View>
      )
    } else { // senao ou seja ja carregou os dados e desligou o loading  

      return (
        <View >
          <FlatList 
          data={this.state.filmes} // 2 recebendo os dados da state filmes(linha 15  e 25)
          keyExtractor={item => item.id.toString()} // 2 transformando o id em string , 
                                                    //   a id tem que estar em string no caso a api original esta em number por isso precisou ser alterada 
          
          renderItem={({item}) => <Filmes data={item}/>} // render(oque vai ser mostrado) o component Filme 
          /*
            Explicando codigo 
              * linha 43 o data recebe a state filmes que contem os dados 
              
              * o ITEM CONTEM OS DADOS
    
              * como o ITEM contem os dados, então é adiconado os dados no component Filmes atravez do data={item}
                lembrando que lá no component Filmes (linha 9 Filmes.js) ele somente requisita os NOMEs atravez do props data.nome 
    
           */
    
          />
        </View>
      );



    }



  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%'
  },
  
  
  
});


export default App;