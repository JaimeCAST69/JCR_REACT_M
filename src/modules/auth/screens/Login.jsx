import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Image, Button } from '@rneui/base';


export default function Login(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.blogs.es/fc31e6/github-copilot-1/450_1000.jpeg' }}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Text>Login Screen</Text>
      <Input
        keyboardType='email-address'
        placeholder="Correo electrónico"
        containerStyle={{ width: '80%', height: 42, marginVertical: 16 }} />
      <Input
        containerStyle={{ width: '80%', height: 42, marginVertical: 16 }}
        placeholder="Contraseña" secureTextEntry />
      <Button title="Iniciar Sesion" containerStyle={{ width: '80%', height: 42, marginTop: 64 }} onPress={() => alert('Lets put that pain to use')} />
      <Text style={{ marginTop: 16, color: '#888' }}>
        ¿Olvidaste tu contraseña?{' '}
        <Text
          style={{ color: '#3a8570' }}
          onPress={() => { navigation.navigate('RecoverPasswordStack')}}>
          Recuperar contraseña
        </Text>
      </Text>
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
});