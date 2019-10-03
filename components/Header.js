import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Header () {
  return (
    <Text style={styles.header}>
      Fresh Fish & Chips you love, delivered directly to your doorstep!
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 24,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 55,
  }
})