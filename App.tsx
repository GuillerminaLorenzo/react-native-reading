import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import styles from "./components/Styles";
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';
import WebViewComponent from './components/WebViewComponent';

const App: React.FC = () => {
  const webviewRef = useRef<any>();

  const [currentHeading, setCurrentHeading] = useState<number>(0);
  const [pageHeading, setPageHeading] = useState<number>(0);

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