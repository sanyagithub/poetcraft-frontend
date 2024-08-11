import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Modal,
} from 'react-native';
import {globalAudioFiles, playSound} from '../api/audio';

const AnswerFeedbackModal = ({
                               isVisible,
                               isAnswerCorrect,
                               showNextButton,
                               showTryAgainButton,
                               explanation,
                               handleNextButtonClick,
                               handleTryAgainButtonClick,
                               closeModal,
                             }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}>
      {isAnswerCorrect
        ? playSound(globalAudioFiles.CorrectAnswer)
        : playSound(globalAudioFiles.WrongAnswer)}
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          {showTryAgainButton && (
            <View style={styles.explanationModalView}>
              <Image
                source={require('../images/Reading.gif')}
                style={styles.image}
              />
              <Text style={styles.explanationText}>Hint: {explanation}</Text>
            </View>
          )}
          <View style={styles.imageContainer}>
            <Animated.Image
              source={
                isAnswerCorrect
                  ? require('../images/greatwork.png')
                  : require('../images/oops.png')
              }
              style={
                isAnswerCorrect
                  ? styles.correctAnswerImage
                  : styles.wrongAnswerImage
              }
            />
            <View
              style={[
                styles.feedbackContainer,
                isAnswerCorrect
                  ? styles.correctFeedback
                  : styles.incorrectFeedback,
              ]}>
              {showNextButton && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextButtonClick}>
                  <Text style={styles.button_text}>Next Challenge</Text>
                </TouchableOpacity>
              )}
              {showTryAgainButton && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleTryAgainButtonClick}>
                  <Text style={styles.button_text}>Give It Another Go!</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  explanationModalView: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    width: '90%',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#ddb1e4',
  },
  explanationText: {
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'left',
    lineHeight: 26,
    fontFamily: 'NunitoSans_7pt-Regular',
  },
  explanationButton: {
    backgroundColor: '#9AAB63',
    borderRadius: 10,
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  explanation_button_text: {
    color: 'white',
    fontFamily: 'NunitoSans_7pt-Regular',
    fontSize: 18,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  question: {
    fontFamily: 'Teachers-Bold',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 2,
    textAlign: 'center',
    margin: 13,
  },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  answerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 25,
    margin: 10,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#F5D867',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  selectedAnswerButton: {
    backgroundColor: '#F5D867',
  },
  answerText: {
    textAlign: 'center',
    fontFamily: 'NunitoSans_7pt-Regular',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    width: '120%',
    alignItems: 'center',
  },
  wrongAnswerImage: {
    position: 'absolute',
    bottom: 52,
    width: 225,
    height: 175,
    zIndex: 1,
  },
  correctAnswerImage: {
    position: 'absolute',
    bottom: 52,
    width: 225,
    height: 180,
    zIndex: 1,
  },
  feedbackContainer: {
    width: '100%',
    paddingHorizontal: 60,
    paddingVertical: 15,
    zIndex: 0,
  },
  correctFeedback: {
    backgroundColor: '#9AAB63',
  },
  incorrectFeedback: {
    backgroundColor: '#FE502B',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  button_text: {
    fontFamily: 'NunitoSans_7pt-Black',
    fontSize: 15,
    alignSelf: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default AnswerFeedbackModal;
