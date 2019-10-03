import * as React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

export default function RestaurantPicker ({data, selectedRestaurant, onValueChange}) {
  return (
    <View>
      <Text style={styles.sectionLabel}>Select restaurant:</Text>
      <Text style={styles.labels}>Select your favourite restaurant from the dropdown menu</Text>
      <Picker
        selectedValue={selectedRestaurant}
        style={styles.picker}
        onValueChange={onValueChange}>
        {data.map(item => <Picker.Item label={item.name} />)}
      </Picker>
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
  picker: {
    height: 50,
    fontSize: 16,
    borderColor: '#CCCCCC',
    marginBottom: 5,
  },
  labels: {
    marginTop: 8,
    fontSize: 16,
    marginBottom: 5,
  },
})