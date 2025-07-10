import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, FlatList } from 'react-native';
import { Input, Button } from '@rneui/themed';

const CreateAccountScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [users, setUsers] = useState([]);

  const handleInputChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleRegister = () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor llena todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    const newUser = { name, email };
    setUsers(prev => [...prev, newUser]);
    Alert.alert('Éxito', 'Cuenta creada exitosamente');

    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.blogs.es/fc31e6/github-copilot-1/450_1000.jpeg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Crear Cuenta</Text>

      <Input
        placeholder="Nombre completo"
        value={formData.name}
        onChangeText={(text) => handleInputChange('name', text)}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleInputChange('confirmPassword', text)}
        containerStyle={styles.inputContainer}
      />

      <Button
        title="Crear Cuenta"
        onPress={handleRegister}
        containerStyle={styles.buttonContainer}
      />

      <Text style={styles.subtitle}>Usuarios Registrados:</Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => `${item.email}-${index}`}
        renderItem={({ item }) => (
          <Text style={styles.userItem}>• {item.name} - {item.email}</Text>
        )}
        ListEmptyComponent={<Text style={styles.noUsers}>No hay usuarios registrados</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 8
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12
  },
  subtitle: {
    fontSize: 18,
    marginTop: 32,
    marginBottom: 8,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  inputContainer: {
    width: '80%',
    height: 42,
    marginVertical: 8
  },
  buttonContainer: {
    width: '80%',
    height: 42,
    marginTop: 24
  },
  userItem: {
    fontSize: 14,
    color: '#444',
    marginVertical: 4
  },
  noUsers: {
    fontSize: 14,
    color: '#888',
    marginTop: 8
  }
});

export default CreateAccountScreen;
