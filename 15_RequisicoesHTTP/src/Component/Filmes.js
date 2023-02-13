import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';   // Flatlist componente preformatico para grande listas

class Filmes extends Component {

    render(){

        const {nome, foto} = this.props.data // 2 adiciona os props aos elementos
                                             // nome recebe this.props.data.nome   e   foto recebe this.props.data.foto
                                             // pode ser usado em qualquer tipo elemento que tiver na api            

      return(
        <View style={styles.areaFilme}>

            <View style={styles.card}>
                {/* data.nome(baseDeDados.nome)  será igual filmes.nome e vai exibir somente os nomes (leia linha 30 e 49 app.js  )*/}    
                <Text style={styles.titulo}>{nome}</Text> 

                <Image 
                    source={{uri: foto}} // como lá na api a imagem do filme é uma url então tem que vir precedido de uri
                    style={styles.capa}
                
                />
                <View style={styles.areaBotao}>                                
                    <TouchableOpacity style={styles.botao}  onPress={()=> alert(nome)}> 
                                                            {/* ao clicar chama o nome do filme clicado*/} 
                        <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View> 

          
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    
    card: {
      shadowColor: '#000',
      backgroundColor: '#FFF',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      margin: 15,
      shadowRadius: 5,
      borderRadius: 5,
      elevation: 3,
    },
    titulo: {
        fontSize: 18,
        padding: 15,
    },
    capa: {
        width: '100%',
        height: 200,
        zIndex: 2,
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },
    botao: {
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    botaoTexto: {
        textAlign: 'center',
        color: '#FFF',

    }
    
});


export default Filmes;