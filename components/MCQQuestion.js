import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AnswerFeedbackModal from './AnswerFeedbackModal';
import {playSound, globalAudioFiles} from '../api/audio';

const MCQQuestion = ({
                       question,
                       answerOptions,
                       correctAnswer,
                       handleNextScreen,
                       explanation,
                        testID
                     }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showTryAgainButton, setShowTryAgainButton] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [fontSize, setFontSize] = useState(20);

  console.log("testId=", testID);

  useEffect(() => {
    const maxLength = Math.max(...answerOptions.map(answer => answer.length));
    if (maxLength > 50) {
      setFontSize(12);
    } else if (maxLength > 30 && maxLength <= 50) {
      setFontSize(18);
    } else if (maxLength <= 30) {
      setFontSize(24);
    }
  }, [answerOptions]);

  const removeBracketsIfSurrounded = str => {
    const regex = /^\[".*"\]$/;
    if (regex.test(str)) {
      return str.slice(2, -2);
    }
    return str;
  };

  const handleAnswerClick = answer => {
    try {
      playSound(globalAudioFiles.tapClick);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
    setSelectedAnswer(answer);

    if (answer.toString() === removeBracketsIfSurrounded(correctAnswer)) {
      setShowNextButton(true);
      setIsAnswerCorrect(true);
    } else {
      setShowTryAgainButton(true);
      setIsAnswerCorrect(false);
    }

    setModalVisible(true);
  };

  const handleNextButtonClick = () => {
    setSelectedAnswer(null);
    setShowNextButton(false);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);
    handleNextScreen();
  };

  const handleTryAgainButtonClick = () => {
    setSelectedAnswer(null);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);
  };

  const renderAnswers = () => {
    return answerOptions.map((answer, index) => (
      <TouchableOpacity
        key={index}
        testID={`MCQOption-${index}`}
        onPress={() => handleAnswerClick(answer)}
        disabled={selectedAnswer !== null}
        accessibilityLabel={`Answer option ${index + 1}: ${answer}`}
      >
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
    <View testID={testID}>
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
    marginTop: 40,
  },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  buttonImage: {
    width: 120,
    height: 140,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  answerText: {
    textAlign: 'center',
    fontFamily: 'NunitoSans_7pt-Regular',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
});

export default MCQQuestion;
