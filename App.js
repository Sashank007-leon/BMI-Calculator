import React, { useState } from 'react'
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState("");

  const calculateBMI = (weight, height) => {
      const result = ((weight / (height * height)) * 703);
      Alert.alert("Your BMI is: "+Math.round(result));
      return(Math.round(result));
  }

  return(
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your weight in kilogram(kg)"
        onChangeText={weight => setWeight(weight)}
        defaultValue = {weight}
        style={styles.text}
      />
      <TextInput
        placeholder="Enter your height in feet(ft) and inch(in)"
        onChangeText={height => setHeight(height)}
        defaultValue = {height}
        style={styles.text}
      />   
      <Button 
        title="Calculate BMI"
        onPress={() => {
          setBMI("BMI = " + calculateBMI(weight, height));
        }}
        style={styles.button}
      />
      <Button 
        title="Reset"
        onPress={() => {
          setWeight(0);
          setHeight(0);
          setBMI("");
        }}
        color= '#ff00ff'
        textAlign= 'center'
        fontSize= '30'
        border= '30'
      />
      <Text style={styles.text}>{bmi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
    border: 10,
    color: '#ff00ff',
  }
})

export default App;
