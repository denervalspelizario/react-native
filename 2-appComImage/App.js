import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImageKids from  './assets/kids.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meus Filhos</Text>
      <Image source={ImageKids} style={styles.img} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#aaa',
    fontSize: 25,
    paddingBottom: 20,

  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 10,
  }
});
