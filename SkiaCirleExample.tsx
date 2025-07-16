// src/components/SkiaCircleExample.js
import React from 'react';
import { Canvas, Circle } from '@shopify/react-native-skia';
import { StyleSheet } from 'react-native';

const SkiaCircleExample = () => {
  const r = 100; // Example radius
  return (
    <Canvas style={styles.canvas}>
      <Circle cx={r} cy={r} r={r} color="orange" />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    width: 200,
    height: 200,
    backgroundColor: 'transparent', // Or any background you prefer
    borderWidth: 1, // To make the boundary visible for testing
    borderColor: 'white',
  },
});

export default SkiaCircleExample;
