import React, {useEffect, useState} from 'react';
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
    <>
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
                <Text style={styles.explanationText}>{explanation}</Text>
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
                    <Text style={styles.button_text}>Continue</Text>
                  </TouchableOpacity>
                )}
                {showTryAgainButton && (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleTryAgainButtonClick}>
                    <Text style={styles.button_text}>Got It!</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/*<Modal*/}
      {/*  animationType="slide"*/}
      {/*  transparent={true}*/}
      {/*  visible={explanationModalVisible}*/}
      {/*  onRequestClose={() => setExplanationModalVisible(false)}>*/}
      {/*  <View style={styles.modalOverlay}>*/}
      {/*    <View style={styles.explanationModalView}>*/}
      {/*      <Text style={styles.explanationText}>{explanation}</Text>*/}
      {/*      <TouchableOpacity*/}
      {/*        style={styles.explanationButton}*/}
      {/*        onPress={() => {*/}
      {/*          setExplanationModalVisible(false); // Close explanation modal*/}
      {/*          setTimeout(() => setIsFirstModalVisible(true), 300); // Reopen the first modal with a delay to ensure state is updated*/}
      {/*        }}>*/}
      {/*        <Text style={styles.explanation_button_text}>Close</Text>*/}
      {/*      </TouchableOpacity>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*</Modal>*/}
    </>
  );
};

const styles = StyleSheet.create({
  explanationModalView: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'white', // Ensure background color for the explanation modal
    padding: 20,
    alignItems: 'center',
    width: '90%',
    height: 'auto', // Adjust height as needed
    justifyContent: 'center', // Center content vertically
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
  tryAgainImageOverlay: {
    position: 'absolute',
    top: -25, // Adjust this value as needed to position the image over the feedback container
    right: '20%',
    zIndex: 1, // Ensure the image is above the feedback container
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60, // Add padding to give space at the top
  },
  buttonImage: {
    width: 120,
    height: 140,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
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
    backgroundColor: '#F5D867', // Change background color when selected
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
  audio_image: {
    width: 45,
    height: 40,
    alignSelf: 'flex-start',
    marginLeft: 13,
  },
  audioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  audiotext: {
    fontFamily: 'Teachers-Bold',
    fontSize: 20,
    marginLeft: 10,
    paddingTop: 10,
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
    height: '100%', // Adjust height as needed
    justifyContent: 'center', // This will push the feedbackContainer to the bottom
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default AnswerFeedbackModal;
