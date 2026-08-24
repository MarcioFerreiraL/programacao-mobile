import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Componente Image */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      {/* Componente Text */}
      <Text style={styles.title}>Minha Atividade 02</Text>

      {/* Componente View (como container) */}
      <View style={styles.inputContainer}>
        <Text>Digite seu nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: João"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/* Componente TouchableOpacity (Botão customizado) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Olá', `Bem-vindo, ${nome || 'visitante'}!`)}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: { width: '100%', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
