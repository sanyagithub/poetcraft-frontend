import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import commonStyles from './commonStyles';
import GradientBackground from './GradientBackground';

export default function HomeScreen({navigation}) {
  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Text style={styles.heading}>Discover the Rhythm of Poetry</Text>
        <Text style={styles.description}>
          Unlock the secrets of meter and bring your poetry to life!
        </Text>
        <Text style={styles.readyText}>Ready to begin?</Text>
        <TouchableOpacity
          style={commonStyles.buttonContainer}
          onPress={() => navigation.navigate('Courses')}>
          <Text style={commonStyles.buttonTitle}>Start Learning Now</Text>
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
  noteContainer: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    borderWidth: 1,
    padding: 15,
    borderColor: '#DDB1E4', // Border color for the note
    borderStyle: 'dashed',
    backgroundColor: '#FAF4E5', // Background color for the note
  },
  noteText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
    color: '#DDB1E4', // Note text color
  },
  identifyButton: {
    backgroundColor: '#F5D867', // Identify button color
  },
});
