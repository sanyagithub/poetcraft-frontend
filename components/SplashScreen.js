import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';
import {checkAuthentication} from '../api/auth';
import {useNavigation} from '@react-navigation/native';
import {globalAudioFiles, playSound} from '../api/audio';

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const soundIntervalRef = useRef(null);
  const [loadingMessage, setLoadingMessage] = useState("Checking credentials...");


  useEffect(() => {
    const authenticate = async () => {
      setLoadingMessage("Authenticating...");
      const isAuthenticated = await checkAuthentication();
      setLoadingMessage("Redirecting...");
      if (isAuthenticated) {
        navigation.replace('MainTabs');
      } else {
        navigation.replace('Login');
      }
    };

    setTimeout(authenticate, 3000);
  }, [navigation]);

  const isTestEnv = process.env.NODE_ENV === 'test';

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

    const startAnimationAndSound = () => {
      const loopAnimation = Animated.loop(heartbeatAnimation);
      loopAnimation.start();

      const playHeartbeatSound = () => {
        playSound(globalAudioFiles.heartbeat);
      };

      playHeartbeatSound();
      soundIntervalRef.current = setInterval(playHeartbeatSound, 1400);
    };



    if (isTestEnv) {
      textOpacity.setValue(1);
    } else {
      startAnimationAndSound();
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }

    const stopPlayback = () => {
      if (soundIntervalRef.current) {
        clearInterval(soundIntervalRef.current);
      }
    };

    const timeoutId = setTimeout(stopPlayback, 5000);

    return () => {
      if (soundIntervalRef.current) {
        clearInterval(soundIntervalRef.current);
      }
      clearTimeout(timeoutId);
      scaleValue.removeAllListeners();
    };
  }, [scaleValue, textOpacity]);

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Animated.View
          style={[styles.container, {transform: [{scale: scaleValue}]}]}>
          <Image source={require('../images/heart.png')} style={styles.image} testID="heart_image" />
        </Animated.View>
        <Animated.Text style={[styles.text_title, {opacity: textOpacity}]} testID="title_beating_heart">
          A Beating Heart
        </Animated.Text>
        <Animated.Text style={[styles.text_title, {opacity: textOpacity}]} testID="title_poets_craft">
          The Poet's Craft
        </Animated.Text>
        {/*<Animated.Text style={[styles.loadingText, {opacity: textOpacity}]}>*/}
        {/*  {loadingMessage}*/}
        {/*</Animated.Text>*/}
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
  loadingText: {
    color: 'red',
    fontFamily: 'Teachers-Bold',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default SplashScreen;
