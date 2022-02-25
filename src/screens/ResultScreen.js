//import liraries
import React, {useEffect, useState} from 'react';

import RenderHtml from 'react-native-render-html';
import apiClient from '../api/client.js';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

// create a component
const ResultScreen = props => {
  const getHtmlData1 = () => apiClient.get();
  const [data, setData] = useState({html: '<p>LOADING....</p>'});
  const getData = async () => {
    const response = await getHtmlData1();
    const newData =
      response.data.data.contentInfo.importantdates.wiki[0].sections[0].value;
    let source = {
      html: `${newData}`,
    };
    setData(source);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <RenderHtml contentWidth={width} source={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

//make this component available to the app
export default ResultScreen;
