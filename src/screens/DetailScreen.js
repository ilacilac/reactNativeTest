import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

function DetailScreen({route, navigation}) {
  const {data} = route.params;
  const [webviewRef, setWebviewRef] = useState(null);
  const sendData = {
    type: 'DETAIL_INIT',
    data,
  };

  return (
    <WebView
      source={{uri: 'http://localhost:3000/post/123'}}
      onLoadEnd={() => webviewRef.postMessage(JSON.stringify(sendData))}
      ref={ref => setWebviewRef(ref)}
    />
  );
}

export default DetailScreen;
