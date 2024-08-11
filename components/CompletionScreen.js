import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Module1Image from '../images/Scansion_Scholar.png';
import Module2Image from '../images/Syllable_Savant.png';
import Module3Image from '../images/Scansion_Sensei.png';
import Module4Image from '../images/Metrical_Master.png';
import Module5Image from '../images/Scansion_Sleuth.png';
import {globalAudioFiles, playSound} from '../api/audio';
import GradientBackground from './GradientBackground';
import commonStyles from '../styles/commonStyles';

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
    try {
      playSound(globalAudioFiles.wee);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, []);

  const handleNextModule = () => {
    try {
      navigation.navigate('Modules', {courseId});
    } catch (error) {
      console.error('Navigation error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <GradientBackground>
      <View style={[commonStyles.container, commonStyles.centerContent]}>
        <Text style={styles.congratulationsText}>Well Done!</Text>
        <Text style={styles.messageText}>
          You've successfully completed this module. Ready for the next challenge?
        </Text>
        <Image source={moduleImage} style={styles.moduleImage} testID="moduleImage" />
        <TouchableOpacity
          style={[commonStyles.buttonContainer, styles.nextModuleButton]}
          onPress={handleNextModule}
          activeOpacity={0.7}
        >
          <Text style={commonStyles.buttonTitle}>Continue to Next Module</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
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
  moduleImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  nextModuleButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
});

export default CompletionScreen;
