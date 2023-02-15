import React, { FC } from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

type WebViewComponentProps = {
  source: {
    html: string;
  };
  webviewRef: React.MutableRefObject<WebView | null>;
  setPageHeading: React.Dispatch<React.SetStateAction<number>>;
};

const WebViewComponent: FC<WebViewComponentProps> = ({ source, webviewRef, setPageHeading }) => {
  const onMessage = (event: WebViewMessageEvent) => {
    const data = event.nativeEvent.data;
    setPageHeading(JSON.parse(data as string));
    console.log(data);
  };

  const injectedjs = `const headings = JSON.stringify(Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => ({
    top: heading.offsetTop
  })));
  window.ReactNativeWebView.postMessage(headings);`;

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
