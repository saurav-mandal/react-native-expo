//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// create a component
import PageTitle from './pageTitle';
import BottomCta from './bottomCta';
import PwaBreadcumbs from './pwaBreadcumbs';
import CommentShare from './commentShare';
const BreadCrumb = props => {
  return (
    <View style={styles.container}>
      <PwaBreadcumbs />
      <PageTitle title={props.title} />
      <CommentShare />
      <BottomCta />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default BreadCrumb;
