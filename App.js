import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/modules/auth/screens/Login';

export default function App() {
  return (

      <Login />
    
    /* Uncomment the following lines to see the layout with colored boxes
    <View style={{flex:1, backgroundColor: 'red', flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}/>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={{flex: 1, backgroundColor: 'red'}}/>
    </View>*/
   /* <View style={{flex:1, backgroundColor: 'red', flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}/>
      <View style={{flex: 1, backgroundColor: 'white'}}/>
      <View style={{flex: 1, backgroundColor: 'red'}}/>
    </View>*/
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
