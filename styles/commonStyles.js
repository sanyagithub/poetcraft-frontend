// commonStyles.js
import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    // left: 0,
    // right: 0,
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    backgroundColor: '#DDB1E4',
    borderRadius: 10,
    marginTop: 10,
    //alignContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    //borderWidth: 1,
  },
  buttonTitle: {
    fontFamily: 'NunitoSans_7pt-Black',
    alignSelf: 'center',
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default commonStyles;
