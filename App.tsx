import React from 'react';
import { View, Text } from 'react-native';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';
import { WebView } from 'react-native-webview';



const App = () => {



  return (
    <View style={{ flex: 1 }}>
      <Text> Hello world </Text>
    </View>
  );
};

// const style = StyleSheet.create({
//   canvas: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'black',
//     // zIndex: -100,
//     position: 'absolute'
//   },
//   text: {
//     display: 'flex',
//     flexDirection: 'column-reverse',
//     zIndex: 1,
//     color: "#3BB143",

//   }
// })

export default App;