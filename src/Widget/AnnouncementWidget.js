//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AnnouncementIconBox from '../svg/AnnouncementIconBox';

// create a component
const AnnouncementWidget = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingRight: 10, justifyContent: 'center'}}>
        <AnnouncementIconBox />
      </View>
      <View style={{flex: 1, paddingVertical: 10}}>
        <Text style={{marginBottom: 8, color: '#000', fontSize: 16}}>
          Download Important Dates for MBA/PGDM Exams
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
            }}>
            Download Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fffbed',
    elevation: 3,
  },
  button: {
    alignItems: 'center',
    borderColor: 'blue',
    backgroundColor: '#f37921',
  },
});

//make this component available to the app
export default AnnouncementWidget;
