import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, Keyboard, Picker, CheckBox, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Navbar from './components/Navbar';
import Button from './components/Button';
import Header from './components/Header';
import RestaurantPicker from './components/RestaurantPicker';
import DishSelector from './components/DishSelector';
import PersonalDetails from './components/PersonalDetails';

import restaurants from './data'

export default class App extends React.Component {
  // state object
  state = {
    restaurant: "",
    fishType: "",
    addMushyPeas: true,
  }

  handleCheckboxClick = () => {
    let currentState = this.state.addMushyPeas
    this.setState({
      addMushyPeas: !currentState
    })
  }

  handleRestaurantChange = (value) => {
    this.setState({
      restaurant: value
    })
  }

  handleRadioButtonClick = (value) => {
    this.setState({
      fishType: value
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Navbar />
          <Header />
          <View style={styles.inputContainer}>
            <RestaurantPicker 
              data={restaurants()}
              selectedRestaurant={this.state.restaurant} 
              onValueChange={this.handleRestaurantChange}
            />             
            <DishSelector 
              fishType={this.state.fishType} 
              addMushyPeas={this.state.addMushyPeas} 
              handleRadioButtonClick={this.handleRadioButtonClick} 
              handleCheckboxClick={this.handleCheckboxClick}
            />
            <PersonalDetails />
            <Button value="Submit" style={styles.submitButton}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  inputContainer: {
    paddingTop: 15
  },
  submitButton: {
    marginTop: 5,
    backgroundColor: '#409689',
    color: '#ffffff',
    textAlign: 'center',
    padding: 15, 
    fontSize: 18,
    textTransform: 'uppercase'
  }
});
