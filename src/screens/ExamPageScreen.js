import React, {useLayoutEffect} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import Loader from '../modules/Loader';
import {connect} from 'react-redux';
import {fetchExamPageData} from '../actions/ExamPageAction';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyTabBar from '../TabNavigator';
import {bindActionCreators} from 'redux';

import HomeScreen from './HomeScreen';
import BreadCrumb from '../topCard/breadCrumb';
import Rating from '../RatingContainer/Rating';
import AssistentAskQueryButton from '../QueryButton/AssistentAskQueryButton.js';
import CatNotification from './CatNotification';
import ArticleWrapper from './ArticleWrapper';
import InstituteAcceptingWidget from '../Widget/InstituteAcceptingWidget';

const My = createMaterialTopTabNavigator();

const Divider = () => {
  return <View style={{paddingVertical: 5}}></View>;
};

const ExamPageScreen = props => {


  const {examPageData} = props;
  const fetchPageData = () => {
    props.fetchExamPageData({}, null);
  };
  //console.log(examPageData);
  useLayoutEffect(() => {
    fetchPageData();
    return () => {};
  }, []);
  if (Object.keys(examPageData).length > 0) {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require('../public/images/shiksha_logo.jpg')}
              style={{width:'100%',height:50, resizeMode: 'contain'}}
            />
          </View>
          <ScrollView style={styles.body} contentContainerStyle={{flexGrow: 1}}>
            <View style={{flex: 1, paddingVertical: 16}}>
              <View style={styles.headerCard}>
                <BreadCrumb title={examPageData.seoData?.h1Tags} />
              </View>
              <Divider />
              <View style={styles.l2Menu}>
                <NavigationContainer>
                  <My.Navigator
                    initialRouteName="Overview"
                    tabBar={props => <MyTabBar {...props} />}>
                    <My.Screen
                      name="Overview"
                      initialParams={{name: 'Overview'}}
                      component={HomeScreen}
                    />
                    <My.Screen name="Results" component={HomeScreen} />
                  </My.Navigator>
                </NavigationContainer>
              </View>
              <Divider />
              <View style={{flex: 1}}>
                <AssistentAskQueryButton />
                <Divider />
                <CatNotification examPageData={examPageData} />
                <Divider />
                <Rating />
                <Divider />
                <ArticleWrapper examPageData={examPageData} />
                <InstituteAcceptingWidget examPageData={examPageData} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  } else {
    return <Loader></Loader>;
  }
};

const mapStateToProps = state => {
  return {examPageData: state.examPageData};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchExamPageData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExamPageScreen);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#008489',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#f1f2f4',
    color: '#000',

    //flexWrap:'nowrap'
  },
  primaryHeading: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '600',
  },
  headerCard: {
    backgroundColor: '#fff',
    padding: 15,
    elevation: 3,
  },
  l2Menu: {
    height: 5000,
  },
});
//[] -> objects -> id , item ->
