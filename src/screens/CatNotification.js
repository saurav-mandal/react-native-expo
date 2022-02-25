//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const CatNotification = ({examPageData}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#e94c25',
          fontWeight: '600',
          fontSize: 17,
        }}>
        CAT Notifications
      </Text>
      {examPageData.epUpdates.updates.map(item => {
        return (
          <TouchableOpacity key={item.url}>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        );
      })}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: '#1048c3',
              fontWeight: '600',
            }}>
            View All Updates {'>'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    elevation: 3,
  },
  text: {
    marginVertical: 5,
    backgroundColor: 'white',
    color: '#1048c3',
    fontSize: 14,
    elevation: 3,
  },
  button: {
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4,
  },
});

//make this component available to the app
export default CatNotification;
