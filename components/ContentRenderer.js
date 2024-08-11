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

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

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

const ContentRenderer = ({content, handleNextScreen}) => {
  return (
    <View>
      <Image source={require('../images/Reading.gif')} style={styles.image} testID="contentImage" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading} testID="contentHeading">{content.heading}</Text>
        <FadeInView>
          <Text style={styles.text} testID="contentText">{content.text}</Text>
        </FadeInView>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={commonStyles.buttonContainer}
          onPress={handleNextScreen}
          activeOpacity={0.7} // Adding feedback on press
          testID="nextButton"
        >
          <Text style={commonStyles.buttonTitle}>Next</Text>
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
    textAlign: 'left',
    letterSpacing: 1.5, // Adjusted for better readability
    marginBottom: 10,
  },
  text: {
    fontFamily: 'NunitoSans_7pt-Regular',
    fontSize: 18,
    letterSpacing: 1.2, // Adjusted for better readability
    marginBottom: 20,
    textAlign: 'left',
  },
});

export default ContentRenderer;
