import React from "react";
import { View, Text, StyleSheet } from "react-native-web"; // Asegúrate de usar react-native si es multiplataforma

export default function RecoverPassword(props) {
  console.log(props); // Imprime las props recibidas
    const {route :{params: {name}}} = props;
  return (
    <View style={styles.container}>
      <Text>Recuperar contraseña</Text>
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
