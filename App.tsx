import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'matrix-code-nfi': require('./assets/fonts/matrix code nfi.ttf')
  });

  
  const [render, SetRender] = useState<Boolean>(false)

  let lastElement: string = String.fromCharCode(Math.random() * (122 - 97) + 97)

  function timeCycle( delay : number) : void {
      setTimeout(()=>{
        SetRender(!render)
      }, delay)
  }

  useEffect(()=>{

  } , [render]
  )

  // timeCycle(200)

  return (
    <View key="main" style={styles.container}>
      <View style={styles.matContain}>
        {Array.from({length: 16}).map((el, idx) => (
          <Text style={styles.matrix} key={idx}> {String.fromCharCode(Math.random() * (122 - 97) + 97)} </Text>
        ))}
        <Text style={[styles.matrix, { color: '#00FF41' }]} > {String.fromCharCode(Math.random() * (122 - 97) + 97)} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  matContain: {
    display: 'flex',
    // borderWidth: 2,
    // borderColor: 'red',
    margin: 0,


  },
  matrix: {
    flexDirection: 'column',
    fontFamily: 'matrix-code-nfi', // This matches the CSS font-family name
    fontSize: 22,
    color: '#32CD32',
    // borderWidth: 1,
    // borderColor: 'red',
    // color: 'white'
  }
});