import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Modal,
  ImageBackground,
} from 'react-native';
import AnswerFeedbackModal from './AnswerFeedbackModal';
import {audioFiles, globalAudioFiles, playSound} from '../api/audio';

const MCQQuestion = ({
  question,
  answerOptions,
  correctAnswer,
  handleNextQuestion,
  explanation,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showTryAgainButton, setShowTryAgainButton] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [fontSize, setFontSize] = useState(20); // Default font size

  useEffect(() => {
    const maxLength = Math.max(...answerOptions.map(answer => answer.length));
    //console.log(maxLength);
    // Adjust font size based on the length of the longest answer
    if (maxLength > 50) {
      setFontSize(12);
    } else if (maxLength > 30 && maxLength <= 50) {
      setFontSize(18);
    } else if (maxLength <= 30) {
      setFontSize(24);
    }
  }, [answerOptions]);
  const removeBracketsIfSurrounded = str => {
    // Check if the string is surrounded by [" and "]
    const regex = /^\[".*"\]$/;
    if (regex.test(str)) {
      // Remove the surrounding [" and "]
      return str.slice(2, -2);
    }
    return str;
  };
  const handleAnswerClick = answer => {
    playSound(globalAudioFiles.tapClick);
    setSelectedAnswer(answer);

    // Check if the answer is correct (e.g., for demonstration, assuming 'Answer 1' is correct)
    if (answer.toString() === removeBracketsIfSurrounded(correctAnswer)) {
      setShowNextButton(true);
      setIsAnswerCorrect(true);
    } else {
      setShowTryAgainButton(true);
      setIsAnswerCorrect(false);
    }

    setModalVisible(true); // Show modal when an answer is selected
  };

  const handleNextButtonClick = () => {
    // Reset states for next question
    setSelectedAnswer(null);
    setShowNextButton(false);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);
    handleNextQuestion();
    // Additional logic for moving to the next question
  };

  const handleTryAgainButtonClick = () => {
    // Reset states to allow user to try again
    setSelectedAnswer(null);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);
    // Additional logic if needed
  };

  const renderAnswers = () => {
    return answerOptions.map((answer, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => handleAnswerClick(answer)}
        disabled={selectedAnswer !== null}>
        <ImageBackground
          source={
            selectedAnswer === answer
              ? require('../images/answerOptionSelected.png')
              : require('../images/answerOptionUnselected.png')
          }
          style={styles.buttonImage}>
          <Text style={[styles.answerText, {fontSize}]}>{answer}</Text>
        </ImageBackground>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.answersContainer}>{renderAnswers()}</View>
      {selectedAnswer && (
        <AnswerFeedbackModal
          isVisible={modalVisible}
          isAnswerCorrect={isAnswerCorrect}
          showNextButton={showNextButton}
          showTryAgainButton={showTryAgainButton}
          explanation={explanation}
          handleNextButtonClick={handleNextButtonClick}
          handleTryAgainButtonClick={handleTryAgainButtonClick}
          closeModal={() => setModalVisible(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  explanationText: {
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'left',
    lineHeight: 26,
    fontFamily: 'TildaSans-Regular',
  },
  explanationButton: {
    backgroundColor: '#9AAB63',
    borderRadius: 10,
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  explanation_button_text: {
    color: 'white',
    fontFamily: 'TildaSans-Regular',
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
    marginTop: 40,
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

    //fontSize: 20,
  },
  imageContainer: {
    alignItems: 'center',
    paddingBottom: 52,
  },
  wrongAnswerImage: {
    width: 225,
    height: 175,
    zIndex: 1,
  },
  correctAnswerImage: {
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MCQQuestion;
