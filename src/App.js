import { registerRootComponent } from "expo";
import React from "react";
import { Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Provider } from "react-redux";

import ExamPageScreen from "./screens/ExamPageScreen";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <ExamPageScreen />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 25 : 0,
    marginHorizontal: Platform.OS === "web" ? 200 : 0,
    
  },
});
registerRootComponent(App);
