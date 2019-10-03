import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Button from './Button';

export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text style={styles.heading}>
          Flying Fish 🐠
        </Text>
        <Button value="Sign In" style={styles.signinButton}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  heading: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signinButton: {
    marginTop: 5,
    backgroundColor: '#F6F5F6',
    color: '#000000',
    textAlign: 'center',
    padding: 10, 
    fontSize: 18,
    textTransform: 'uppercase'
  }
});