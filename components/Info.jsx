import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import Extras from "./extras";


export default function Info() {
  const [weatherData, setWeatherData] = useState(null);
  const [provincia, setProvincia] = useState("");

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=014d4738a5f04011840150100241805&q=${provincia ? encodeURIComponent(provincia) : ""}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [provincia]);
  let cur = weatherData.current;
  console.log(cur)
  return (

    <ScrollView style={{flex:1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setProvincia(text)}
          value={provincia}
          placeholder='Ingrese Provincia'
        />
      </View>
      <Text style={styles.country}>{weatherData && weatherData.location ? weatherData.location.country : 'Cargando'}</Text>
      <Text style={styles.location}>{weatherData && weatherData.location ? weatherData.location.name : 'Cargando'}</Text>
      
      <View style={styles.weatherContainer}>
        <Image
          source={{ uri: weatherData && weatherData.current ? 'https:' + weatherData.current.condition.icon : null }}
          style={styles.weatherIcon}
        />
        <Text style={styles.temperature}>{weatherData && weatherData.current ? weatherData.current.temp_c + "°C" : 'Cargando'}</Text>
        <Text>{weatherData && weatherData.current ? weatherData.current.condition.text : "Cargando"  }</Text>
      </View>
      <Text style={styles.extras}>Extras</Text>

      <View style={styles.ext}>
        
        <ScrollView horizontal={true}>

        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  input: {
    width: "85%",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
  },
  country: {
    color: "#17202A",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  location: {
    color: "#17202A",
    fontSize: 32,
    textAlign: "center",
    marginTop: 8,
    fontWeight:"500"
  },
  weatherContainer: {
    alignItems: "center",
    margin:"auto",
    marginTop: 50,
    backgroundColor:"#fff",
    height:250,
    width: 250,
    borderRadius:18,
    opacity:0.9

  },  
  weatherIcon: {
    width: 130,
    height: 130,
    margin: "0 auto",

  },
  temperature: {
    color: "black",
    fontSize: 34,
    marginTop:30,
    fontWeight:"900",
  },
  extras:{
    textAlign:"center",
    fontSize:35,
    fontWeight:"500",
    color:"#000",
    marginBottom:290
  },
  ext:{
    alignItems: "center",
    height:250,
    width: 250,
    borderRadius:18,
    opacity:0.9,
    margin:"auto",
    marginTop:-250
  },
  div:{
    backgroundColor:"#fff",
    height:250,
    width: 250,
    borderRadius:18,
    opacity:0.9
  }
});
