import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const HeartbeatLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <View style={[styles.line, styles.leftLine]} />
        <Image
          source={require('../images/heartline.png')}
          style={styles.heartbeat}
        />
        <View style={[styles.line, styles.rightLine]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  line: {
    height: 2,
    backgroundColor: '#ddb1e4',
  },
  leftLine: {
    flex: 1,
  },
  rightLine: {
    flex: 4,
  },
  heartbeat: {
    width: 40,
    height: 30, // Adjust the height to match your image's aspect ratio
    resizeMode: 'contain',
  },
});

export default HeartbeatLine;
