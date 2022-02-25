//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const PageTitle = props => {
  return (
    <View style={{paddingVertical:10}}>
      <Text style={{fontWeight: '600',color:'#000'}}>{props.title}</Text>
    </View>
  );
};

// define your styles

//make this component available to the app
export default PageTitle;
