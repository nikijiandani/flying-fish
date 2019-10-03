import * as React from 'react';
import { View, Text, TextInput, Keyboard, StyleSheet } from 'react-native';

export default function PersonalDetails () {
  return (
    <View>
      <Text style={styles.sectionLabel}>Personal Details:</Text>
      <Text style={styles.labels}>Name:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Name"
        onBlur={Keyboard.dismiss}
      />
      <Text style={[styles.labels, {marginBottom: 10, marginTop: 10}]}>Enter your Delivery Address:</Text>
      <Text style={styles.labels}>Address Line 1:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Address Line 1"
        onBlur={Keyboard.dismiss}
      />
      <Text style={styles.labels}>Address Line 2:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Address Line 2"
        onBlur={Keyboard.dismiss}
      />
      <Text style={styles.labels}>City:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="City"
        onBlur={Keyboard.dismiss}
      />
      <Text style={styles.labels}>Special Instructions:</Text>
      <TextInput
        multiline
        numberOfLines={2}
        style={[styles.textInput, {height: 100, paddingTop: 10}]}
        placeholder="Buzz code etc."
        onBlur={Keyboard.dismiss}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#409689",
    marginTop: 16,
    marginBottom: 8,
  },
  labels: {
    marginTop: 8,
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    fontSize: 16,
    paddingLeft: 7,
    paddingRight: 7,
    marginBottom: 5,
  },
})