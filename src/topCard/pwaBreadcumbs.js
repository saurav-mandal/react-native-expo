//import liraries
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const HomeIcon = () => {
  return (
    <Image style={styles.image} source={require('../assests/icons/home.png')} />
  );
};

const NavigationNext = () => {
  return (
    <Image
      style={styles.image}
      source={require('../assests/icons/navigate_next.png')}
    />
  );
};

// create a component
const PwaBreadcumbs = () => {
  return (
    <View style={styles.container}>
      <HomeIcon />
      <NavigationNext />
      <Text style={{color: 'blue'}}>MBA</Text>
      <NavigationNext />
      <Text style={{color: 'blue'}}>MBA Exams</Text>
      <NavigationNext />
      <Text>CAT</Text>
    </View>
  );
};

// define your styles

//make this component available to the app
export default PwaBreadcumbs;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  container: {
    flexDirection: 'row',
  },
});
