//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 53 53"
    {...props}>
    <G xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
      <Path
        d="M24.864 0a7.652 7.652 0 0 1 7.576 6.58 7.646 7.646 0 0 1 10.006.702 7.652 7.652 0 0 1 .706 10.008 7.652 7.652 0 0 1-.003 15.15 7.646 7.646 0 0 1-.703 10.006 7.652 7.652 0 0 1-10.008.706 7.652 7.652 0 0 1-15.15-.003 7.646 7.646 0 0 1-10.006-.703 7.652 7.652 0 0 1-.706-10.008 7.652 7.652 0 0 1 .003-15.15 7.646 7.646 0 0 1 .703-10.006 7.652 7.652 0 0 1 10.008-.706A7.65 7.65 0 0 1 24.864 0Z"
        fill="#008A3B"
      />
      <Path
        stroke="#FFF"
        strokeWidth={4.477}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.652 25.415 6.89 7.332 13.453-14.664"
      />
    </G>
  </Svg>
);

// create a component
const ProfileDetails = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#1048c3',
            fontWeight: '500',
            paddingHorizontal: 5,
          }}>
          Vipra Shrivastava
        </Text>
        <SvgComponent />
      </View>
      <Text
        style={{
          paddingHorizontal: 5,
        }}>
        Manager - Content
      </Text>
    </View>
  );
};
const ProfileBox = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            source={{
              uri: 'https://images.shiksha.com/mediadata/images/1621410751phpKQiqNg_s.jpeg',
            }}
          />
        </View>
        <ProfileDetails />
      </View>
      <Text>Updated on Feb 16, 2022 05:11 IST</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  imageContainer: {
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default ProfileBox;
