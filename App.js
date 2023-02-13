import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import styles from "./scr/components/style/Styles";
import NextButton from './scr/components/buttons/NextButton';
import PrevButton from './scr/components/buttons/PrevButton';
import WebViewComponent from './scr/components/webview/WebViewComponent';

const App = () => {
  const webviewRef = useRef();

  const [currentHeading, setCurrentHeading] = useState(0);
  const [pageHeading, setPageHeading] = useState(0);

  return (
    <View style = {styles.container}>
      <WebViewComponent
        source={{html: require('./assets/index')()}}
        webviewRef={webviewRef}
        setPageHeading={setPageHeading}
      />
      <View style = {styles.touchableOpacityContainer}>
      <PrevButton 
        webviewRef={webviewRef} 
        currentHeading={currentHeading}
        pageHeading={pageHeading} 
        setCurrentHeading={setCurrentHeading}
      />
      <NextButton 
        webviewRef={webviewRef} 
        currentHeading={currentHeading}
        pageHeading={pageHeading}
        setCurrentHeading={setCurrentHeading}
      />
      </View>
    </View>
  )
}

export default App;