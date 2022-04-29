import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';

function Search() {
  // 웹뷰와 rn과의 소통은 아래의 ref 값을 이용하여 이루어집니다.
  let webviewRef = useRef();

  /** 웹뷰 ref */
  const handleSetRef = _ref => {
    webviewRef = _ref;
  };

  /** webview 로딩 완료시 */
  const handleEndLoading = e => {
    console.log('handleEndLoading');
    /** rn에서 웹뷰로 정보를 보내는 메소드 */
    webviewRef.postMessage('로딩 완료시 webview로 정보를 보내는 곳');
  };

  const handleOnMessage = ({nativeEvent: {data}}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
  };

  return (
    <>
      <WebView
        source={{url: 'http://localhost:3000/list/123'}}
        onLoadEnd={handleEndLoading}
        onMessage={handleOnMessage}
        ref={handleSetRef}
      />
    </>
  );
}

export default Search;
