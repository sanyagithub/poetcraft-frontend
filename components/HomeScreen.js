import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';

export default function HomeScreen({navigation}) {
  const handleNavigation = () => {
    console.log("I am taped")
    try {
      navigation.navigate('Courses');
    } catch (error) {
      console.error("Navigation error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <GradientBackground>
      <View testID="homeScreen" style={commonStyles.container}>
        <Text accessibilityLabel="Heading: Dive Into the Rhythm of Poetry" style={styles.heading}>Dive Into the Rhythm of Poetry</Text>
        <Image style={styles.imageStyle} source={require('../images/welcome.gif')} />
        <Text accessibilityLabel="Description: Unveil the Secrets of Meter and Transform Your Words into Art!" style={styles.description}>
          Unveil the Secrets of Meter and Transform Your Words into Art!
        </Text>
        <Text accessibilityLabel="Ready Text: Are You Ready to Start Your Journey?" style={styles.readyText}>Are You Ready to Start Your Journey?</Text>
        <TouchableOpacity
          testID="beginJourney"
          style={commonStyles.buttonContainer}
          activeOpacity={0.7}
          onPress={handleNavigation}>
          <Text style={commonStyles.buttonTitle}>Begin Your Poetry Journey</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Teachers-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontFamily: 'NunitoSans_7pt-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  readyText: {
    fontFamily: 'Teachers-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  imageStyle: {
    width: 300,
    height: 250,
  },
});
