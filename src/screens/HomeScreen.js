//import liraries
import React, { useState} from 'react';

import RenderHtml, {
  HTMLElementModel,
  HTMLContentModel,
} from 'react-native-render-html';
import {connect} from 'react-redux';
import {fetchExamPageData} from '../actions/ExamPageAction';

import {bindActionCreators} from 'redux';
import {
  View,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import Loader from '../modules/Loader';
import ProfileBox from './ProfileBox';

// create a component
const HomeScreen = props => {
  const {route, examPageData} = props;

  const [htmlData, setHtmlData] = useState({}); /// render help

  const handleState = data => setHtmlData(data);
  const fetchPageData = async () => {
    await props.fetchExamPageData(route.params, handleState);
  };

  React.useLayoutEffect(() => {
    fetchPageData();
  }, [route]);

  const {width} = useWindowDimensions();

  const customHTMLElementModels = {
    iframe: HTMLElementModel.fromCustomModel({
      tagName: 'iframe',
      mixedUAStyles: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
       // backgroundColor: 'blue',
      },
      contentModel: HTMLContentModel.block,
    }),
    source: HTMLElementModel.fromCustomModel({
      tagName: 'source',
      mixedUAStyles: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
       /// backgroundColor: 'blue',
      },
      contentModel: HTMLContentModel.block,
    }),
    table: HTMLElementModel.fromCustomModel({
      tagName: 'table',
      mixedUAStyles: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        alignSelf: 'center',
        //backgroundColor: 'blue',
      },
      contentModel: HTMLContentModel.block,
    }),
  };
  let dataFetcher;
  if (route?.params?.name == 'Overview') {
    dataFetcher = htmlData?.contentInfo?.homepage?.wiki[0]?.sections[0]?.value;
  } else if (route?.params?.name == 'Results') {
    dataFetcher = htmlData?.contentInfo?.results?.wiki[0]?.sections[0]?.value;
  }
  const htmlStyles = {
    p: {color: 'green'},
    h2: {color: 'red'},
    table: {backgroundColor: 'white', color: 'white'},
  };
  if (htmlData && Object.keys(htmlData).length > 0 && dataFetcher) {
    return (
      <View style={styles.container}>
        <ProfileBox />
        <RenderHtml
          contentWidth={width}
          tagsStyles={htmlStyles}
          customHTMLElementModels={customHTMLElementModels}
          source={{html: `${dataFetcher}`}}
        />
      </View>
    );
  } else {
    return <Loader></Loader>;
  }
};

// define your styles

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 200,
    //paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
    // flex: 1,
    height: 100,
    //backgroundColor: 'white',
  },
  text: {
    fontSize: 42,
  },
});

//make this component available to the app
const mapStateToProps = state => {
  return {examPageData: state.examPageData};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchExamPageData}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(HomeScreen));
 


