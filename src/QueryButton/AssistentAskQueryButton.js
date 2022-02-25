import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AssistentAskQueryButton = () => {
  const [active, setActive] = useState(0);
  const onPress = () => setActive(1 - active);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, active == 0 ? styles.active : null]}
        onPress={onPress}>
        <Text style={[styles.text, active == 0 ? styles.activeText : null]}>
          Ask a Query
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          active == 1 ? styles.active : null,
        ]}
        onPress={onPress}>
        <Text style={[styles.text, active == 1 ? styles.activeText : null]}>
          Download Exam Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
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
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  active: {
    backgroundColor: '#639',
    color: 'white',
    textDecorationColor: 'white',
    borderColor: 'white',
    borderWidth: 0,
  },
  text: {
    fontWeight: '600',
    color: 'blue',
  },
  activeText: {
    color: 'white',
  },
});

export default AssistentAskQueryButton;
