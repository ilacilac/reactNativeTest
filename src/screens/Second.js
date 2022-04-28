import React from 'react';
import {WebView} from 'react-native-webview';

function Second() {
  return (
    <>
      <WebView source={{url: 'https://www.naver.com/'}} />
    </>
  );
}

export default Second;
