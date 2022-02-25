//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const CommentShare = ({views = '6.1k', comment = '11.k', share = '496'}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assests/icons/view_count.png')}
      />
      <Text style={styles.text}>{views}</Text>
      <Image
        style={styles.image}
        source={require('../assests/icons/comment.png')}
      />
      <Text style={styles.text}>{comment}</Text>
      <Image
        style={styles.image}
        source={require('../assests/icons/share.png')}
      />
      <Text style={styles.text}>Share ({share})</Text>
    </View>
  );
};

// define your styles
//make this component available to the app
export default CommentShare;

const styles = StyleSheet.create({
  image: {
    width: 15,
    height: 15,
  },
  container: {
    flexDirection: 'row',
  },
  text: {
    paddingRight: 10,
    fontSize: 12,
    paddingLeft: 5,
    fontWeight: '400',
  },
});
