import { StatusBar } from 'expo-status-bar'; // importacaod e biblioteca
import { StyleSheet, Text, View } from 'react-native'; // inserindo as tags que serao usadas

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container__title}>Hello World!!</Text>
      <Text>Criado por DS Pelizario</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container__title: {
    color: 'red',
    fontSize: 25
  }
});
