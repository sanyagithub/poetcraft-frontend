// GradientBackground.js
import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeartbeatLine from './HeartbeatLine';

const GradientBackground = ({children}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#DE9DE0', '#F0DCEF', '#FFFCF4']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}>
        {children}
      </LinearGradient>
      <HeartbeatLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground;
