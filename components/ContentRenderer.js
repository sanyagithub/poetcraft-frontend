// ContentRenderer.js

import React, {useEffect, useRef} from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';
import HeartbeatLine from './HeartbeatLine';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const translateY = useRef(new Animated.Value(20)).current; // Initial value for translateY: 20

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, translateY]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [{translateY}],
      }}>
      {props.children}
    </Animated.View>
  );
};

const ContentRenderer = ({content, handleNextQuestion}) => {
  return (
    <View>
      <Image source={require('../images/Reading.gif')} style={styles.image} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>{content.heading}</Text>
        <FadeInView>
          <Text style={styles.text}>{content.text}</Text>
        </FadeInView>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={commonStyles.buttonContainer}
          onPress={handleNextQuestion}>
          <Text style={commonStyles.buttonTitle}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  scrollView: {
    width: '100%',
    height: 300, // Set your desired fixed height here
    marginBottom: 70, // Space for the button
  },
  heading: {
    fontFamily: 'Teachers-Bold',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  text: {
    fontFamily: 'NunitoSans_7pt-Regular',
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 20,
    textAlign: 'left',
  },
});

export default ContentRenderer;
