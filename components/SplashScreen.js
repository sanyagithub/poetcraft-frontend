import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View, StyleSheet, Animated} from 'react-native';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';
import {checkAuthentication} from '../api/auth'; // Ensure the path is correct
import {useNavigation} from '@react-navigation/native';
import {globalAudioFiles, playSound} from '../api/audio';

const SplashScreen = () => {
  const navigation = useNavigation(); // Use useNavigation hook
  const scaleValue = useRef(new Animated.Value(1)).current;
  const soundIntervalRef = useRef(null);

  useEffect(() => {
    const authenticate = async () => {
      const isAuthenticated = await checkAuthentication();
      if (isAuthenticated) {
        navigation.replace('MainTabs');
      } else {
        navigation.replace('Login');
      }
    };

    setTimeout(authenticate, 3000); // Simulated loading time
  }, [navigation]);

  useEffect(() => {
    const heartbeatAnimation = Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);
    // Play the sound and start the animation in sync
    const startAnimationAndSound = () => {
      const loopAnimation = Animated.loop(heartbeatAnimation);
      loopAnimation.start();

      // Play the heartbeat sound in sync with the animation
      const playHeartbeatSound = () => {
        playSound(globalAudioFiles.heartbeat);
      };

      // Start playing the sound immediately and then repeat it at intervals to match the animation duration
      playHeartbeatSound();
      soundIntervalRef.current = setInterval(playHeartbeatSound, 1400); // Total duration of the animation sequence
    };

    startAnimationAndSound();

    // Stop the sound and animation after 5 seconds
    const stopPlayback = () => {
      if (soundIntervalRef.current) {
        clearInterval(soundIntervalRef.current);
      }
      // loopAnimation.stop();
    };

    const timeoutId = setTimeout(stopPlayback, 5000); // 3 seconds

    return () => {
      // Cleanup sound and animation
      if (soundIntervalRef.current) {
        clearInterval(soundIntervalRef.current);
      }
      clearTimeout(timeoutId); // Clear the timeout during cleanup
      scaleValue.removeAllListeners();
    };
  }, [scaleValue]);

  // useEffect(() => {
  //   const testEC2Access = async () => {
  //     try {
  //       const response = await fetch(
  //         'http://jsonplaceholder.typicode.com/todos/1',
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.text();
  //       setEc2Status(`EC2 response: ${data}`);
  //     } catch (error) {
  //       console.log(error);
  //       setEc2Status(`EC2 access error: ${error}`);
  //     }
  //   };
  //
  //   testEC2Access();
  // }, []);

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Animated.View
          style={[styles.container, {transform: [{scale: scaleValue}]}]}>
          <Image source={require('../images/heart.png')} style={styles.image} />
        </Animated.View>
        <Text style={styles.text_title}>A Beating Heart</Text>
        <Text style={styles.text_title}>The Poet's Craft</Text>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  text_title: {
    fontFamily: 'Teachers-Bold',
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 2,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 180,
  },
});

export default SplashScreen;
