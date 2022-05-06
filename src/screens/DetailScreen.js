import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

function DetailScreen({route, navigation}) {
  const {data} = route.params;
  console.log('data', data);

  return <WebView source={{uri: 'http://localhost:3000/post/123'}} />;
}

const styles = StyleSheet.create({
  // todo : theme color
  detailWrap: {
    // marginTop: getStatusBarHeight(),
    marginTop: 10,
  },
});

export default DetailScreen;
