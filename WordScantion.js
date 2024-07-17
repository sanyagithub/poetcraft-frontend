import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
  Modal,
} from 'react-native';
import Sound from 'react-native-sound';
import {getAudio} from './api';
import commonStyles from './commonStyles';
import AnswerFeedbackModal from './AnswerFeedbackModal';
import {globalAudioFiles, playSound} from './audio';

// Main function component for Poem Scansion
const WordScantion = ({
  lineText,
  syllables,
  correctPattern,
  handleNextQuestion,
  explanation,
  audioId,
}) => {
  useEffect(() => {
    async function fetchData() {
      if (audioId != null) {
        const audioFile = await getAudio(audioId);
        console.log(audioFile);
        setAudioFile(audioFile);
      }
    }
    fetchData();
  }, [audioId]);

  useEffect(() => {
    setCurrentStep(1);
    setUserInput(syllables.map(() => ''));
    setFeedback(syllables.map(() => ''));
    setSyllableLayouts(syllables.map(() => ({width: 0, x: 0})));
    setAudioFile('');
  }, [syllables]);

  // States to manage user input, feedback, current step, etc.
  const [userInput, setUserInput] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [syllableLayouts, setSyllableLayouts] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [audioFile, setAudioFile] = useState('');

  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showTryAgainButton, setShowTryAgainButton] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Handle input changes for marking stressed or unstressed syllables
  const handleInputChange = syllableIndex => {
    playSound(globalAudioFiles.tapClick);
    const newInput = userInput.map((syllable, index) => {
      if (index === syllableIndex) {
        return currentStep === 1
          ? syllable === '/'
            ? ''
            : '/'
          : syllable === 'u'
          ? ''
          : 'u';
      }
      return syllable;
    });
    setUserInput(newInput);
  };

  // Calculate input box positions based on syllable layouts
  const calculateInputPositions = () => {
    if (syllableLayouts.some(layout => layout.width === 0)) {
      return [];
    }

    const positions = syllableLayouts.map(layout => ({
      left: layout.x + layout.width / 2 - 20, // 20 is half the width of input box
    }));
    return positions;
  };

  const inputPositions = calculateInputPositions();

  // Check user answers
  const checkAnswers = () => {
    let correct = true;
    setShowSubmitButton(false);

    if (currentStep === 1) {
      correct = userInput.every(
        (input, index) => input === correctPattern[index] || input === '',
      );
    } else if (currentStep === 2) {
      correct = userInput.every(
        (input, index) => input === correctPattern[index],
      );
    }

    if (correct) {
      setIsAnswerCorrect(true);
      setShowNextButton(true);
    } else {
      setIsAnswerCorrect(false);
      setShowTryAgainButton(true);
    }
    setModalVisible(true);

    const newFeedback = userInput.map((input, index) =>
      input === correctPattern[index] ? 'correct' : 'wrong',
    );
    setFeedback(newFeedback);
  };

  // Handle next button click
  const handleNextButtonClick = () => {
    setShowSubmitButton(true);
    setShowNextButton(false);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);

    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      handleNextQuestion();
    }
  };

  // Handle try again button click
  const handleTryAgainButtonClick = () => {
    setShowSubmitButton(true);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);
  };

  // Enable playback in silence mode (iOS only)
  Sound.setCategory('Playback');

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {currentStep > 1 && (
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require('./images/backbtn.png')}
              style={styles.goBackIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {audioId == null ? (
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionTitle}>
              {currentStep === 1
                ? `Tap on the boxes above to mark the stressed syllables in the word ${lineText}`
                : `Tap the boxes above to mark the unstressed syllables ${lineText}`}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.instructionTitle}>
              {currentStep === 1
                ? `Listen to the audio and tap on the boxes above to mark the stressed syllables in the sentence ${lineText} as it is used in the audio`
                : `Listen to the audio and tap the boxes above to mark the unstressed syllables ${lineText} as it is used in the audio`}
            </Text>
            <View style={styles.audioContainer}>
              <TouchableOpacity
                onPress={() => playSound(globalAudioFiles[audioFile])}>
                <Image
                  source={require('./images/listenbtn.png')}
                  style={styles.audio_image}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={styles.tableContainer}>
            <View style={styles.row}>
              {syllables.map((syllable, syllableIndex) => (
                <View
                  key={`input-wrapper-${syllableIndex}`}
                  style={styles.cell}>
                  <TouchableOpacity
                    key={`input-${syllableIndex}`}
                    style={[
                      styles.input,
                      feedback[syllableIndex] === 'correct'
                        ? styles.correct
                        : feedback[syllableIndex] === 'wrong'
                        ? styles.wrong
                        : null,
                    ]}
                    onPress={() => handleInputChange(syllableIndex)}>
                    <Text style={styles.inputText}>
                      {userInput[syllableIndex]}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View style={styles.row}>
              {syllables.map((syllable, syllableIndex) => (
                <View
                  key={`syllable-wrapper-${syllableIndex}`}
                  style={styles.cell}>
                  <Text
                    key={`syllable-${syllableIndex}`}
                    style={styles.syllable}>
                    {syllable}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      {showSubmitButton ? (
        <TouchableOpacity
          style={commonStyles.buttonContainer}
          onPress={checkAnswers}>
          <Text style={commonStyles.buttonTitle}>Submit</Text>
        </TouchableOpacity>
      ) : (
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontSize: 24, // Adjust this value to change the size of the user input text
    fontWeight: 'bold', // Optional: to make the text bold
  },
  tableContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 90,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    //marginHorizontal: 10,
  },
  cell: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    width: 70, // Equal width for each cell
  },
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
  submitButton: {
    backgroundColor: '#9AAB63',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 40,
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  submitButton_text: {
    fontFamily: 'TildaSans-Regular',
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  poemButton: {
    backgroundColor: '#9AAB63',
    borderRadius: 10,
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  poem_button_text: {
    color: 'white',
    fontFamily: 'TildaSans-Regular',
    fontSize: 15,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#FAF4E5',
    flex: 1,
    padding: 16,
  },
  scrollViewContent: {
    paddingTop: 50,
    alignItems: 'center',
    width: '100%',
  },
  poemText: {
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'left',
    lineHeight: 26,
    fontFamily: 'Teachers-Bold',
  },
  poemContainer: {
    // width: '100%',
    // marginBottom: 20,
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },
  stressWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  syllableWrapper: {
    alignItems: 'center',
    marginRight: 14,
    marginHorizontal: 10,
    marginBottom: 5,
    justifyContent: 'center',
  },
  inputWrapper: {
    alignItems: 'center',
    marginRight: 14,
    marginHorizontal: 15,
    marginBottom: 5,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    width: 40,
    height: 50,
    textAlign: 'center',
    //marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  correct: {
    borderColor: '#9AAB63',
  },
  wrong: {
    borderColor: '#FE502B',
  },
  syllable: {
    fontSize: 25,
    marginTop: 5,
    fontFamily: 'TildaSans-Regular',
  },
  stressText: {
    fontSize: 16,
    marginBottom: 5,
    paddingTop: 20,
    fontFamily: 'TildaSans-Regular',
  },
  instructionContainer: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 25,
    //borderWidth: 1,
    //backgroundColor: '#FAF4E5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  instructionTitle: {
    fontFamily: 'Teachers-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  arrowWrapper: {
    flexDirection: 'row',
    position: 'relative',
  },
  feedbackContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
  correctFeedback: {
    backgroundColor: '#9AAB63',
  },
  incorrectFeedback: {
    backgroundColor: '#FE502B',
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
  header: {
    position: 'absolute',
    top: 10, // Adjust this value as needed for spacing from the top
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    width: '100%',
    zIndex: 1, // Ensure the header is on top
  },
  showPoemIcon: {
    marginRight: 25,
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  goBackIcon: {
    // marginLeft: 25,
    width: 100,
    height: 31,
    // marginBottom: 10,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 52,
  },
  wrongAnswerImage: {
    width: 225,
    height: 175,
  },
  correctAnswerImage: {
    width: 225,
    height: 180,
  },
  button_text: {
    fontFamily: 'TildaSans-Regular',
    fontSize: 15,
    alignSelf: 'center',
  },
  visibleLine: {
    position: 'absolute',
    height: 50,
    width: 2,
    backgroundColor: '#DDB1E4',
    top: -50,
    marginHorizontal: 1,
  },
  arrowText: {
    fontSize: 16,
    color: '#9AAB63',
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  syllableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  audio_image: {
    width: 200,
    height: 50,
    alignSelf: 'center',
    // marginLeft: 13,
  },
  audioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default WordScantion;
