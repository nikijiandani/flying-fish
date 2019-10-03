import * as React from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';

import { RadioButton } from 'react-native-paper';

export default function DishSelector ({fishType, addMushyPeas, handleCheckboxClick, handleRadioButtonClick}) {
  return (
    <View>
      <Text style={styles.sectionLabel}>Select dish:</Text>
      <Text style={styles.labels}>Select type of fish</Text>
      <RadioButton.Group
        onValueChange={handleRadioButtonClick}
        value={fishType}
      >
        <View style={styles.radioButton}>
          <RadioButton value="cod" color="#409689"/>
          <Text style={styles.contentText}>Cod</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="halibut" color="#409689"/>
          <Text style={styles.contentText}>Halibut</Text>
        </View>
      </RadioButton.Group>
      <View style={styles.checkbox}>
        <CheckBox
          value={addMushyPeas}
          onValueChange={handleCheckboxClick}
        />
        <Text style={[styles.contentText, {marginLeft: 10}]}>Add mushy peas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    height: 50,
    flexDirection: 'row',
    alignItems: "center",
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5
  },
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
  contentText: {
    fontSize: 16
  }
})