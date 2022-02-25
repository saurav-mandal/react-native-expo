//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyTabBar from '../TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

import CommentShare from '../topCard/commentShare';
import AnnouncementWidget from '../Widget/AnnouncementWidget';

const My = createMaterialTopTabNavigator();

const News = ({newsData}) => {
  return (
    <View>
      {newsData.map(news => {
        if (news.id == 0) return;
        let homepage = news.homepageImageUrl;
        const imageUrl =
          'https://images.shiksha.com/' + (homepage == null ? '' : homepage);
        // console.log(imageUrl);
        if (homepage != null && !homepage.startsWith('/mediadata')) {
          homepage = null;
        }

        return (
          <View
            key={news.id.toString()}
            style={{
              padding: 10,
              marginBottom: 5,
              backgroundColor: 'white',
              elevation: 3,
              height: 300,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '50%'}}>
                <Text
                  style={{paddingBottom: 10, color: '#000', fontWeight: '600'}}>
                  {news.summary}
                </Text>
                <View style={{paddingBottom: 5}}>
                  <Text style={{color: '#000', fontWeight: '400'}}>
                    Vipra Shrivastava
                  </Text>
                  <Text>{news.lastModifiedDate}</Text>
                </View>
              </View>
              {homepage != null && (
                <Image
                  source={{
                    uri: `${imageUrl}`,
                  }}
                  style={{
                    height: '90%',
                    width: '40%',
                  }}
                />
              )}
            </View>

            <CommentShare
              views={news.views}
              comment={news.comments}
              share={news.shares}></CommentShare>
          </View>
        );
      })}
    </View>
  );
};

// create a component
const ArticleWrapper = ({examPageData}) => {
  // console.log(examPageData.examNews.popular);
  return (
    <View style={styles.container}>
      <AnnouncementWidget></AnnouncementWidget>
      <Text
        style={{
          fontSize: 17,
          padding: 12,
          margin: 5,
          backgroundColor: 'white',
          elevation: 3,
          color: '#000',
          fontWeight: '900',
        }}>
        News & Updates
      </Text>
      <View style={{height: 3000}}>
        <NavigationContainer>
          <My.Navigator tabBar={props => <MyTabBar {...props} />}>
            <My.Screen name="Popular">
              {props => (
                <News {...props} newsData={examPageData.examNews.popular} />
              )}
            </My.Screen>
            <My.Screen name="Latest">
              {props => (
                <News {...props} newsData={examPageData.examNews.latest} />
              )}
            </My.Screen>
          </My.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

export default ArticleWrapper;
