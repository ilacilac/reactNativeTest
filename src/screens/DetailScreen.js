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

  const handleOnMessage = ({nativeEvent: {data}}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
  };

  return (
    <WebView
      source={{uri: `http://localhost:3000/post`}}
      onLoadEnd={() => webviewRef.postMessage(JSON.stringify(sendData))}
      onMessage={handleOnMessage}
      ref={ref => setWebviewRef(ref)}
    />
  );
}

export default DetailScreen;
