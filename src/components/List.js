import React, {useContext, useRef, useState} from 'react';
import {WebView} from 'react-native-webview';
import {ThemeColorContext} from '../context/ThemeColorProvider';

function List({code, gnb}) {
  // 웹뷰와 rn과의 소통은 아래의 ref 값을 이용하여 이루어집니다.
  // https://kyounghwan01.github.io/blog/React/react-native/react-native-webview/#rn%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-webview%E1%84%85%E1%85%A9-%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5-%E1%84%89%E1%85%A9%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AB
  const {isDark, colors, setScheme} = useContext(ThemeColorContext);
  const [webviewRef, setWebviewRef] = useState(null);

  const sendData = {
    type: 'TEST',
    data: gnb,
    isDark,
  };

  const handleOnMessage = ({nativeEvent: {data}}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
  };

  return (
    <>
      <WebView
        source={{uri: `http://localhost:3000/list/${code}`}}
        // source={{url: `localhost:3000/${code}`}}
        onLoadEnd={() => webviewRef.postMessage(JSON.stringify(sendData))}
        onMessage={handleOnMessage}
        ref={ref => setWebviewRef(ref)}
      />
    </>
  );
}

export default List;
