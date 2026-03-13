import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native-web";

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Image
          source={require('./img/img2.png')}
          style={styles.character}
          resizeMode="cover"
        />
        <Image
          source={require('./img/img.png')}
          style={styles.phone}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textSection}>
        <Text style={styles.title}>Encontre sua paz interior com o app Serenamente!</Text>
        <Text style={styles.description}>
          Desenvolvemos este espaço pensando em você que busca clareza mental, redução do estresse e uma vida mais equilibrada. Oferecemos meditações guiadas, sons relaxantes e ferramentas de mindfulness para ajudá-lo a viver o presente. É o seu momento de respirar fundo e relaxar.
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.btnSkip}>
          <Text style={styles.textSkip}>Pular</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnNext}>
          <Text style={styles.textNext}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ac6edf',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  imageSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 250,
    marginBottom: 30,
  },
  character: {
    width: 110,
    height: 160,
    marginRight: -35,
    zIndex: 1,
    borderRadius: 10,
  },
  phone: {
    width: 180,
    height: 220,
    borderRadius: 15,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
    lineHeight: 28,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  btnSkip: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 100,
    marginRight: 10,
    minWidth: 110,
    alignItems: 'center',
  },
  textSkip: {
    color: '#2A9D8F',
    fontSize: 16,
    fontWeight: '500',
  },
  btnNext: {
    backgroundColor: '#2A9D8F',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 100,
    minWidth: 110,
    alignItems: 'center',
  },
  textNext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
