import React, {useState, useEffect} from 'react'; // importando o useEffect
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';  
import AsyncStorage  from '@react-native-async-storage/async-storage';  // importando o asyncStorage

// o UseEffect é um componente que será chamado toda vez que for inicializado o app ou atualizado 
// leia linhas 20 e 38 o useEffect ele basicamente entra no lugar de Component didMount e Component didUpdate

//  para usar o async storage tem que se instalar a bibioteca comando no projeto EXPO  npx expo install @react-native-async-storage/async-storage
//   para projetos  npx react-native init o comando será npm i @react-native-async-storage/async-storage
//  acesse https://react-native-async-storage.github.io/async-storage/docs/usage/  para ver a documentação e dicas de uso do assync-storage

export default function App(){

  /* para alteração de state usando api useState não se usa constructor se usa uma constante
     nome = valor de state inicial   setNome = valor de state final 
     ** o valor dentro de parentes do useState é o valor inicial da state no caso  nome = ''    */       
  const [nome, setNome] = useState('')  // state nome inicia vazia
  const [input, setInput] = useState('') // state input inicia vazia

  /*ComponentDidMount - Este método é executado uma vez em um ciclo de vida de um componente e será após a primeira renderização. 
    o useEffect inicia  com uma funcao(()={}) e depois um [] dentro desse [] fica o dado que vai ser alterado ou seja a funcao só sera chamada usada
    quando alterar este dado dentro da [](chama-se component didUpdate)  porém quando estiver vazio ele é chamado na inicializacao do componente(nome disso é component didMount )*/
  useEffect(()=> {
    
    async function pegarStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes'); // funcao é chamda quando se incia e pega oque tiver em nomes(leia linha 44) e adiciona em setNome ou seja
                                                               // nome se inicia vazio ou '' mas essa funcao joga o 'nomes' no setNome(altera state) tranformando
      if(nomeStorage !== null){                                // nome vazio em conteudo que estiver em 'nomes'  no caso o ultimo nome digitado funciona como um save  
        setNome(nomeStorage)                                   // leia linha 41 e entanda o a funcao salvarStorage 
      }

    }

    pegarStorage();
  }, []) // como colchetes esta vazio ele ja chama automatico quando iniciar a aplicação

  
  /*Component didUpdate - é invocado imediatamente após alguma atualização ocorrer neste caso após o user digitar o nome no input(linha 53)
    o useEffect inicia  com uma funcao(()={}) e depois um [] dentro desse [] fica o dado que vai ser alterado ou seja a funcao só sera chamada usada
    quando alterar este dado dentro da [](chama-se component didUpdate)  porém quando estiver vazio ele é chamado na inicializacao do componente(nome disso é component didMount )*/
  useEffect(()=>{   // toda vez que nome(linha 11) for alterado ele executa a funcao saveStorage, que guarda o nome

    async function salvarStorage(){
      await AsyncStorage.setItem('nomes', nome);  // funcao pega oque tiver em nome(linha 17) e salva lembre-se ela só é chamada quando nome for alterado
    }                                             // no caso quando for digitado algo no input   
                                                  // ou seja vai SALVAR o conteudo de nome em 'nomes' depois que nome queceber dado da input
    salvarStorage();                              // que posteriormente será usado leia linha 23

  }, [nome])  // quando meu NOME for alterado

  // funcao alteraNome é acionado ao clicar(linha 46)
  function alteraNome(){  
    setNome(input);
    setInput('');                
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

