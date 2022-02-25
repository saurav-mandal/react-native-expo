import React, { useEffect, useState} from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import apiClient from '../api/client';


function Overview() {
  const getHtmlData = () => apiClient.get()
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
  
  const [data, setData] = useState({html: '<p>LOADING....</p>'});

  const getData = async () => {
    const response = await getHtmlData();
    const newData =
      response.data.data.contentInfo.applicationform.wiki[0].sections[0].value;
    let source = {
      html: `${newData}`,
    };
    setData(source);
  };

  useEffect(() => {
    getData();
  }, [data]);

  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <RenderHtml contentWidth={width} source={data} />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Overview