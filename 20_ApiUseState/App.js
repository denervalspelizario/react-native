import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';  



export default function App(){

  /* para alteração de state usando api useState não se usa constructor se usa uma constante
     nome = valor de state inicial   setNome = valor de state final 
     ** o valor dentro de parentes do useState é o valor inicial da state no caso  nome = ''    */       
  const [nome, setNome] = useState('')  // state nome inicia vazia
  const [input, setInput] = useState('') // state input inicia vazia



  // funcao alteraNome é acionado ao clicar(linha 46)
  function alteraNome(){  
    if(input != ''){       // se input for DIFERENTE de vazio ou seja (linha 33) texto foi digitado em input       
      setNome(input)       // nome que esta vazio (linha 11) recebe atravez de setNome o valor de input(que foi digitado linha 33)   
    } else  {              // lembre-se  o setNome é como se fosse o this.setState                
      setNome('')          // é atravez dele que se altera a sate inicial que no caso é a state nome   
    }                      // SENÂO  ou seja input está vazio o nome recebe valor vazio atravéz do setNome  vazio                    
  }
                                      
                                    
  return(
    <View style={styles.container}>
      <Text>Digite seu nome</Text>
      <TextInput 
        value={input}
        style={styles.input}  // estilizacao
        placeholder=' Digite seu nome completo' // adiciona uma string temporaria até digitar algum texto
        underlineColorAndroid="transparent"  // 1 retira o Underline padrao do texto digitado
        onChangeText={(texto) => setInput(texto)} // 1 onChangeText pega o texto digitado no input 
                                                            // 2 com essa funcao ao digitar o state que é "Desenvovledor" 
                                                            // 2 que muda para setState que é o texto recebido pelo parametro texto 
        maxLength={40} //maximo de caracteres      
      
      />
      
                                           {/* Ao clicar chama a funcao alteraNome*/}
      <TouchableOpacity style={styles.btn} onPress={alteraNome} > 
        <Text style={{color:'#FFF',   }}>
          Alterar State
        </Text>
      </TouchableOpacity>
      <Text style={styles.nome}>{nome}</Text>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 100, 
    height : 50, 
    backgroundColor: '#462', 
    borderRadius: 20,
    marginTop: 20,

  },
  input: {
    paddingLeft: 20,
    height: 30,
    width: 250,
    borderWidth: 2,
    borderColor: '#48D1CC',
    borderRadius: 5,
    marginBottom: 15,
    marginHorizontal: '8%',
    marginTop: 20,
  },
  nome: {
    marginTop: 20,
    color: '#465B79',
    fontSize: 25
  }
  
});

