//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const RatingIcon = () => {
  return (
    <Image
      style={{
        width: 28,
        height: 28,
      }}
      source={require('../assests/icons/rating.png')}></Image>
  );
};
const Rating = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontWeight: '600',
          fontSize: 17,
        }}>
        How would you rate this page?
      </Text>
      <Text>We will use this feedback to improve your experience.</Text>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
        }}>
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
      </View>
      <Text>Rating Us Now</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
    elevation: 3,
  },
});

//make this component available to the app
export default Rating;
