import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BottomCta = () => {
  const [active, setActive] = useState(0);
  const onPress = () => setActive(1 - active);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, active == 0 ? styles.active : null]}
        onPress={onPress}>
        <Text style={[styles.text, active == 0 ? styles.activeText : null]}>
          Get Question Papers
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          active == 1 ? styles.active : null,
          {paddingLeft: 20},
        ]}
        onPress={onPress}>
        <Text style={[styles.text, active == 1 ? styles.activeText : null]}>
          Download Guide
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    width: '48%',
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
    backgroundColor: 'tomato',
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

export default BottomCta;
