import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, Switch, ScrollView} from 'react-native'; // importando  1 - input, 2 - TouchableOpacity que é um Botão transparent,  5 Switch
import { Picker } from '@react-native-picker/picker'; // 3 importanção do picker depois de instalado
import Slider from '@react-native-community/slider';   // 4 importando o slider
import BankImage from './assets/bank.png';


// 3 para usar o picker tem que se instalar a bibioteca comando no porjeto EXPO  npx expo install @react-native-picker/picker
// 3  para projetos  npx react-native init o comando será npm install @react-native-community/picker --save


// 4 para usar o slider tem que se instalar a bibioteca comando no projeto EXPO  npx expo install @react-native-community/slider
// 4  para projetos  npx react-native init o comando será npm install @react-native-community/slider --save
// 4 acesse https://www.npmjs.com/package/@react-native-community/slider  para ver a documentação e dicas de estilos do slider


// 5  acesse  https://reactnative.dev/docs/switch  para ver documentação do switch   



class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      nome: '', // state nome inicia valor vazio e ao clicar(onPress) altera atravez do seState(linha 21) para valor do input
      idade: '', // state nome inicia valor 0 e ao clicar(onPress) altera atravez do seState(linha 22) para valor do input
      input: '',  // input inica com valor vazio
      input2: '', // input2 inica com valor vazio
      valor: 1204,
      status: false,
      tipoConta: '',
      sexo: 0,
      sexoOpcoes : [
        {key: 1, genero: 'Selecione genero'},
        {key: 2, genero: 'Masculino'},
        {key: 3, genero: 'Feminino'},
        {key: 4, genero: 'Prefiro não dizer'},

      ]
    };
    this.btn = this.btn.bind(this);  // 2 atravez deste bind ele linka a funcao entrar é acionada ao clicar
  };

  btn(){
    if(this.state.input === '' || this.state.input2 === ''){
      alert('Algum campo está vazio')
    } else if( this.state.sexo == 0) {
      alert('selecione o genero')
    } else {
      alert(
        'Dados da Conta\n' + 'nome: ' + this.state.input + '\nIdade: ' + this.state.input2 + 
        '\nGenero: ' + this.state.sexoOpcoes[this.state.sexo].genero + 
        '\nFaixa Salarial: ' + this.state.valor.toFixed(0) +
        '\nTipo de Conta: ' + this.state.tipoConta
      )
      this.setState({nome : this.state.input}),
      this.setState({idade : this.state.input2})

      
    }
  };

  render(){

    // 4 criando uma variável que recebe o state sexoOpcoes(array de objetos) comd dados das sexoOpcoes 
    // 4  com a funçao map vai percorrer em todas os objetos e retorna com itens abaixo                      
      let genero = this.state.sexoOpcoes.map((value, key) => {
        return <Picker.Item  style={styles.textPicker} key={key}  value={key}   label={value.genero}/> // key e value valores de referencia e label oque vai aparecer para o user
              
      })
      
      if(this.state.status == true){
        this.state.tipoConta = 'Conta Estudante'
      } else {
        this.state.tipoConta = 'Conta Comum'
      }

  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
    <View style={styles.container}>
      
      <Image source={BankImage} style={styles.imgBank} />
      <Text style={styles.textBank}>Banco Pelizario</Text>
      <View style={styles.containerForm}>
        <Text style={styles.textForm}>Nome completo</Text>

        {/* entradas de dados pelo Input */}
        <TextInput   //  1 - input ( entrada de dados ) 
          style={styles.input}  // estilizacao
          placeholder=' Digite seu nome completo' // adiciona uma string temporaria até digitar algum texto
          underlineColorAndroid="transparent"  // 1 retira o Underline padrao do texto digitado
          onChangeText={(texto) => this.setState({input: texto})} // 1 onChangeText pega o texto digitado no input 
                                                                // 2 com essa funcao ao digitar o state que é "Desenvovledor" 
                                                                // 2 que muda para setState que é o texto recebido pelo parametro texto 
          maxLength={40} //maximo de caracteres
                                                                
        />
        <Text style={styles.textForm}>Idade </Text>
        <TextInput   //  1 - input ( entrada de dados ) 
          style={styles.input}  // estilizacao
          placeholder=' Digite sua Idade' // adiciona uma string temporaria até digitar algum texto
          underlineColorAndroid="transparent"  // 1 retira o Underline padrao do texto digitado
          onChangeText={(texto2) => this.setState({input2: texto2})} // 1 onChangeText pega o texto digitado no input 
                                                                // 2 com essa funcao ao digitar o state que é "Desenvovledor" 
                                                                // 2 que muda para setState que é o texto recebido pelo parametro texto 
          keyboardType='numeric' // na hora de digitar aparece somente o teclado numerico                                                      
        />

        {/* uso do Picker */}
        <Text style={styles.textForm}>Com qual genero se indentifica?</Text>
        <Picker
        style={styles.stylePicker}
        selectedValue={this.state.sexo}
        onValueChange={(intemValue, itemIndex) => this.setState({sexo: intemValue})}
        // 3 recebe função com 2 parametros (valor, posição) esse itemValue seria o value do piker.item
        // 3 ao CLICAR  no item vai  trocar o valor do state sexo por itemValue(value do picker)    
        >
         {genero} 
        </Picker>  


        {/* uso do Slider */}
        <Text style={styles.textForm}>Escolha sua faixa salarial</Text>
        <Slider 
        style={styles.styleSlider}
        // 2 minimunValue é o valor minimo que neste caso é 0
        minimunValue={1400}
        // 2 maximumValue é o valor máximo que neste caso é 
        maximumValue={10000}
        
        // 2 onValueChange é usada para achar o valor quando se arrasta o item do slider  no caso a bolinha
        // OBS o slider é um traço que cada parte representa por um valor o onValueChange faz o papel de 
        // verificar qual o valor referente ao ponto selecionado do traço, neste caso uma extremidade é 0 e a outra é  100
        onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})} 
        
        // o value que vai receber o state de parametro que no caso é o valor
        value={this.state.valor}
        
        // 4 - controla a cor da linha contada atraz da bolinha
        minimumTrackTintColor='#00ced1'

        // 4 - controla a cor da linha contada a frente  da bolinha
        maximumTrackTintColor='#008b8b'

        // 5 controla a cor da bolinha
        thumbTintColor='#00ced1'	
      />
      <Text style={styles.textForm}>
        Rendimento mensal R$ {this.state.valor.toFixed(0)} 
      </Text>

      {/* uso do Switch */}
      <Text style={styles.textForm}>Abrir conta Estudante?</Text>
      <Switch
        style={styles.switch}
        value={this.state.status}
        onValueChange={(valorSwicth) => this.setState({status: valorSwicth})}
        thumbColor='#00FFFF' // 5 controla a cor da bolinha do switch
      
      />

                                                {/*Obs this.btn NAO USAR this.state.btn pq não é uma stae é uma função */} 
        <TouchableOpacity style={styles.btnForm} onPress={this.btn}>
          <Text style={styles.btnText}>Abrir Conta</Text>
        </TouchableOpacity>
      </View>
        
    </View>
    </ScrollView> 
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  textBank: {
    fontSize: 20,
    color: '#008B8B',
    fontWeight: 'bold',
    marginTop: 15,
  },
  containerForm: {
    borderWidth: 4,
    borderColor: '#00CED1',
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 15,
    width: '80%',
    height: '80%',
  },
  input: {
    paddingLeft: 20,
    height: 30,
    width: 250,
    borderWidth: 2,
    borderColor: '#48D1CC',
    borderRadius: 5,
    marginBottom: 15,
    marginHorizontal: '8%'
  },
  textForm:{
    padding: 5,
    textAlign: 'center',
    color:'#008B8B',	
  },
  btnForm: {
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00CED1',
    backgroundColor: '#00ced1',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 45,
    marginTop: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',

  },
  imgBank: {
    width: 50,
    height: 50
  },
  stylePicker: {
    color: '#008B8B',
    fontWeight: 800,
    width: 200,
    marginLeft: 30,
    
  },
  textPicker: {
    padding: 5,
    textAlign: 'center',
    color:'#008B8B',
  },
  styleSlider: {
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  switch: {
    width: 150,
    height: 40,

  },

 
  
});


export default App;