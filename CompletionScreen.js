import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Module1Image from './images/Scansion_Scholar.png';
import Module2Image from './images/Syllable_Savant.png';
import Module3Image from './images/Scansion_Sensei.png';
import Module4Image from './images/Metrical_Master.png';
import Module5Image from './images/Scansion_Sleuth.png';
import {globalAudioFIles, playSound} from './audio';
import GradientBackground from './GradientBackground';
import commonStyles from './commonStyles';

const getModuleImage = moduleId => {
  switch (moduleId) {
    case 1:
      return Module1Image;
    case 2:
      return Module2Image;
    case 3:
      return Module3Image;
    case 4:
      return Module4Image;
    case 5:
      return Module5Image;
    default:
      return null;
  }
};

const CompletionScreen = ({route}) => {
  const {moduleId, courseId} = route.params;
  const navigation = useNavigation();

  const moduleImage = getModuleImage(moduleId);

  useEffect(() => {
    // Play the sound when the component mounts
    playSound(globalAudioFIles.wee); // Replace with the actual filename of your sound

    // Cleanup function if necessary
    return () => {
      // Any cleanup code if needed
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <GradientBackground>
      <View style={[commonStyles.container, commonStyles.centerContent]}>
        <Text style={styles.congratulationsText}>Congratulations!</Text>
        <Text style={styles.messageText}>You have completed this module.</Text>
        <Image source={moduleImage} style={styles.moduleImage} />
        <TouchableOpacity
          style={commonStyles.buttonContainer}
          onPress={() => navigation.navigate('Modules', {courseId})}>
          <Text style={commonStyles.buttonTitle}>Next Module</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF4E5',
  },
  congratulationsText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageText: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#9AAB63',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  moduleImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  customButtonContainer: {
    margin: 30, // Add padding here
  },
});

export default CompletionScreen;
