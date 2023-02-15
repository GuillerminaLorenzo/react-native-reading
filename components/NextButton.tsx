import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./Styles";

type NextButtonProps = {
  webviewRef: React.RefObject<any>;
  currentHeading: number;
  pageHeading: Array<{top: number}>;
  setCurrentHeading: React.Dispatch<React.SetStateAction<number>>;
};

const NextButton: React.FC<NextButtonProps> = ({ webviewRef, currentHeading, pageHeading, setCurrentHeading}) => {
  const secondToLastHeading = pageHeading.length - 1;
  const nextHeading = currentHeading + 1;
  const firstHeading = pageHeading[0];

  const handleNextPress = () => {
    if (currentHeading < secondToLastHeading) {
      setCurrentHeading(nextHeading);
      scrollToHeadings(pageHeading[nextHeading].top)
    } 
    handleNextPressLastHeading();
  };

  const handleNextPressLastHeading = () => {
    if (currentHeading === secondToLastHeading) {
      setCurrentHeading(0);
      scrollToHeadings(firstHeading.top)
    } 
  }

  const scrollToHeadings = (heading: number) => {
    webviewRef.current?.injectJavaScript(`
      window.scrollTo(0, ${heading});
    `);
  };

  return (
    <TouchableOpacity
      style={styles.touchableOpacityLeft}
      onPress={handleNextPress}
      testID={'next'}
    >
      <Text style={styles.touchableOpacityText}>Next</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
