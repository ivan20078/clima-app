import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  View,
  ImageBackground
 } from 'react-native';
import Info from './components/Info';
export default function App() {
  
  const fondo = {uri:"https://images.unsplash.com/photo-1546863340-7e4e97e46f42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

  return (
    
    <ImageBackground source={fondo} resizeMode="cover" style={st.image}  opacity={0.6}>
    <View style={st.container}> 
      <Info/>


      <StatusBar style="light" />
    </View>
    </ImageBackground>
  );
}
const st = StyleSheet.create({
  container:{
    flex:1,
  },
  image:{
    flex:1,
  }
})


