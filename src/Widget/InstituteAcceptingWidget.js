//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';
// create a component
const Header = ({imageUrl, name, location}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10}}>
      <Image
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={{
          uri: `${imageUrl}`,
        }}
      />
      <View style={{flex: 2, marginLeft: 10}}>
        <Text
          style={{
            color: '#1048c3',
            fontWeight: '800',
            paddingBottom: 5,
          }}
          numberOfLines={1}>
          {name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              width: 15,
              height: 15,
              marginRight: 5,
            }}
            source={require('../assests/icons/outline_location_on_black_48.png')}></Image>
          <Text>{location}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: '#1048c3',
              fontWeight: '800',
              paddingBottom: 5,
            }}>
            Admissions 2022 &#10140;
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Content = ({duration, name, TotalFees, rating, eligibility}) => {
  // console.log(rating);
  let amount = TotalFees / 100000.0;
  return (
    <View>
      <Text
        style={{
          fontWeight: '700',
          color: '#1048c3',
        }}>
        {name}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Rating
          fractions={2}
          startingValue={rating}
          ratingCount={5}
          imageSize={13}
        />
        <Text style={{paddingLeft: 10, color: '#1048c3'}}>{rating}</Text>
      </View>
      <View>
        {amount > 0 && <Text>Total Fees : {amount} Lakh</Text>}
        <Text>{duration} Years &#124; Full Time</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Exams : </Text>
        {eligibility.map(item => {
          return (
            <Text
              key={item.exam_id}
              style={{color: '#1048c3', paddingRight: 5}}>
              {item.exam_name} &#124;
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity style={{flex: 0}}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={require('../assests/icons/outline_star_border_black_48.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'blue',
          borderWidth: 1,
          marginHorizontal: 10,
          flex: 1,
        }}>
        <Text style={{color: 'blue', fontWeight: '500'}}> Download </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'blue',
          borderWidth: 1,
          marginHorizontal: 10,
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor:'#f37921'
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
            backgroundColor: 'gray',
          }}
          source={require('../assests/icons/download.png')}></Image>
        <Text style={{color: 'white', fontWeight: '500'}}> Brochur </Text>
      </TouchableOpacity>
    </View>
  );
};

const InstituteAcceptingWidget = ({examPageData}) => {
  const InstituteData = examPageData.acceptingWidget.categoryInstituteTuple;
  //console.log(InstituteData);
  return (
    <View style={styles.container}>
      {InstituteData.map(item => {
        return (
          <View
            key={item.instituteId}
            style={{backgroundColor: 'white', elevation: 3, marginBottom: 10}}>
            <Header
              imageUrl={item.instituteThumbUrl}
              name={item.name}
              location={item.displayLocationString}
            />
            <Content
              duration={item.courseTupleData.durationValue}
              name={item.courseTupleData.name}
              TotalFees={item.courseTupleData.fees}
              rating={
                item.courseTupleData.aggregateReviewData.aggregateRating
                  .averageRating.mean
              }
              eligibility={item.courseTupleData.eligibility}
            />
            <Footer />
          </View>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default InstituteAcceptingWidget;
