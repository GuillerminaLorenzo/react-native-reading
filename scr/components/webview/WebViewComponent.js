import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewComponent = ({ source, webviewRef, setPageHeading }) => {
  const onMessage = (event) => {
    const data = event.nativeEvent.data;
    setPageHeading(JSON.parse(data.split(',')))
    console.log(data)
  };

  const injectedjs = `const headings = JSON.stringify(Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => ({
      top: heading.offsetTop
    })));
    window.ReactNativeWebView.postMessage(headings);
  `

  return (
    <WebView
      allowFileAccess={true}
      originWhitelist={['*']}
      source={source}
      ref={webviewRef}
      onMessage={onMessage}
      javaScriptEnabled={true}
      injectedJavaScript={injectedjs}
    />
  );
};

export default WebViewComponent;
