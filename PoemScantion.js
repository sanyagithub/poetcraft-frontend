import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import Sound from 'react-native-sound';
import {getPoem} from './api';
import commonStyles from './commonStyles';
import GradientBackground from './GradientBackground';
import AnswerFeedbackModal from './AnswerFeedbackModal';
import { audioFiles, globalAudioFIles, playSound } from "./audio";

const PoemScansion = ({
  poemId,
  syllables,
  correctPattern,
  correctEdges,
  handleNextQuestion,
  explanation,
  userInput,
  feedback,
  setUserInput,
  setFeedback,
}) => {
  console.log('Initial props:', {
    poemId,
    syllables,
    correctPattern,
    correctEdges,
    explanation,
    userInput,
    feedback,
  });

  // const [userInput, setUserInput] = useState([]);
  // const [feedback, setFeedback] = useState([]);
  const [syllableLayouts, setSyllableLayouts] = useState([]);
  const [visibleLines, setVisibleLines] = useState([]);
  const [audioFile, setAudioFile] = useState('');
  const [poemText, setPoemText] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showTryAgainButton, setShowTryAgainButton] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [poemModalVisible, setPoemModalVisible] = useState(false);
  const [explanationModalVisible, setExplanationModalVisible] = useState(false);
  const [edgesInput, setEdgesInput] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const initializeStates = () => {
    console.log('Initializing states with syllables:', syllables);
    // setUserInput(syllables.map(line => line.map(() => '')));
    // setFeedback(syllables.map(line => line.map(() => '')));
    setSyllableLayouts(
      syllables.map(line => line.map(() => ({width: 0, x: 0}))),
    );
    setVisibleLines(syllables.map(line => line.map(() => false)));
    setEdgesInput(
      correctEdges ? correctEdges.map(line => line.map(() => '')) : [],
    );
  };

  useEffect(() => {
    async function fetchData() {
      if (poemId != null) {
        const poem = await getPoem(poemId);
        console.log('Fetched poem:', poem);
        setAudioFile(poem.audio.filename);
        setPoemText(poem.text);
      }
    }
    setCurrentStep(1);
    setAudioFile('');
    fetchData();
  }, [poemId]);

  useEffect(() => {
    if (syllables.length > 0) {
      initializeStates();
    }

    // console.log('feedback state updated:', feedback);
  }, [syllables]);

  // useEffect(() => {
  //   console.log('feedback state updated:', feedback);
  // }, [feedback]);

  const handleInputChange = (lineIndex, syllableIndex) => {
    playSound(globalAudioFIles.tapClick);
    const newInput = userInput.map((line, i) =>
      i === lineIndex
        ? line.map((syllable, j) => {
            if (j === syllableIndex) {
              return currentStep === 1
                ? syllable === '/'
                  ? ''
                  : '/'
                : syllable === 'u'
                ? ''
                : 'u';
            }
            return syllable;
          })
        : line,
    );
    setUserInput(newInput);
  };

  const toggleEdge = (lineIndex, edgeIndex) => {
    const newEdgesInput = edgesInput.map((line, i) =>
      i === lineIndex
        ? line.map((edge, j) =>
            j === edgeIndex ? (edge === '|' ? ' ' : '|') : edge,
          )
        : line,
    );
    setEdgesInput(newEdgesInput);
  };

  const toggleLineVisibility = (lineIndex, syllableIndex) => {
    const newVisibleLines = visibleLines.map((line, i) =>
      i === lineIndex
        ? line.map((visible, j) => (j === syllableIndex ? !visible : visible))
        : line,
    );
    setVisibleLines(newVisibleLines);
  };

  const handleSyllableLayout = (event, lineIndex, syllableIndex) => {
    const {width, x} = event.nativeEvent.layout;
    setSyllableLayouts(prevLayouts =>
      prevLayouts.map((line, i) =>
        i === lineIndex
          ? line.map((layout, j) => (j === syllableIndex ? {width, x} : layout))
          : line,
      ),
    );
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const checkAnswers = () => {
    let correct = true;
    setShowSubmitButton(false);

    if (currentStep === 1) {
      correct = userInput.every((line, lineIndex) =>
        line.every(
          (input, syllableIndex) =>
            input === correctPattern[lineIndex][syllableIndex] || input === '',
        ),
      );
    } else if (currentStep === 2) {
      correct = userInput.every((line, lineIndex) =>
        line.every(
          (input, syllableIndex) =>
            input === correctPattern[lineIndex][syllableIndex],
        ),
      );
    } else if (currentStep === 3) {
      console.log(edgesInput);
      correct = edgesInput.every((line, lineIndex) =>
        line.every(
          (input, edgeIndex) =>
            correctEdges[lineIndex][edgeIndex] === '-' ||
            input === correctEdges[lineIndex][edgeIndex],
        ),
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

    const newFeedback = userInput.map((line, lineIndex) =>
      line.map((input, syllableIndex) =>
        input === correctPattern[lineIndex][syllableIndex] ||
        (currentStep === 3 &&
          edgesInput[lineIndex][syllableIndex - 1] ===
            correctEdges[lineIndex][syllableIndex - 1])
          ? 'correct'
          : 'wrong',
      ),
    );
    setFeedback(newFeedback);
  };

  const handleNextButtonClick = () => {
    setShowSubmitButton(true);
    setShowNextButton(false);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);

    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (correctEdges.length > 0) {
        setCurrentStep(3);
      } else {
        handleNextQuestion();
      }
    } else if (currentStep === 3) {
      handleNextQuestion();
    }
  };

  const handleTryAgainButtonClick = () => {
    setShowSubmitButton(true);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);
  };

  const renderPoemLines = () => {
    return syllables.map((line, lineIndex) => (
      <View key={lineIndex} style={styles.lineContainer}>
        <View style={styles.stressWrapper}>
          {line.map((syllable, syllableIndex) => (
            <React.Fragment key={syllableIndex}>
              {currentStep < 3 ? (
                <View style={styles.syllableWrapper}>
                  <TouchableOpacity
                    style={[
                      styles.input,
                      feedback[lineIndex] &&
                      feedback[lineIndex][syllableIndex] === 'correct'
                        ? styles.correct
                        : feedback[lineIndex] &&
                          feedback[lineIndex][syllableIndex] === 'wrong'
                        ? styles.wrong
                        : null,
                    ]}
                    onPress={() => handleInputChange(lineIndex, syllableIndex)}>
                    <Text style={styles.inputText}>
                      {userInput[lineIndex][syllableIndex]}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={styles.syllable}
                    onLayout={event =>
                      handleSyllableLayout(event, lineIndex, syllableIndex)
                    }>
                    {syllable}
                  </Text>
                </View>
              ) : (
                <View style={styles.syllableWrapper}>
                  <View style={styles.edgeWrapper}>
                    <Text style={styles.stressText}>
                      {userInput[lineIndex][syllableIndex]}
                    </Text>
                  </View>
                  <Text
                    style={styles.syllable}
                    onLayout={event =>
                      handleSyllableLayout(event, lineIndex, syllableIndex)
                    }>
                    {syllable}
                  </Text>
                  {syllableIndex < line.length - 1 && (
                    <View style={styles.arrowWrapper}>
                      <View
                        style={styles.arrowPosition(
                          syllableLayouts,
                          lineIndex,
                          syllableIndex,
                        )}>
                        <TouchableOpacity
                          onPress={() => {
                            toggleEdge(lineIndex, syllableIndex);
                            toggleLineVisibility(lineIndex, syllableIndex);
                          }}>
                          <Image
                            source={require('./images/hand.png')}
                            style={styles.handImage}
                          />
                        </TouchableOpacity>
                        {visibleLines[lineIndex] &&
                          visibleLines[lineIndex][syllableIndex] && (
                            <View style={styles.visibleLine} />
                          )}
                      </View>
                    </View>
                  )}
                </View>
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={poemModalVisible}
        onRequestClose={() => setPoemModalVisible(!poemModalVisible)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setPoemModalVisible(!poemModalVisible)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.poemText}>{poemText}</Text>
            <TouchableOpacity onPress={() => playSound(globalAudioFIles[audioFile])}>
              <Image
                source={require('./images/listenbtn.png')}
                style={styles.audio_image}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        {currentStep > 1 && (
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require('./images/backbtn.png')}
              style={styles.goBackIcon}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => setPoemModalVisible(true)}>
          <Image
            source={require('./images/infobtn.png')}
            style={styles.showPoemIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.instructionContainer}>
        <Text style={styles.instructionTitle}>
          {currentStep === 1
            ? 'Click the boxes above to mark the stressed syllables'
            : currentStep === 2
            ? 'Click the boxes above to mark the unstressed syllables'
            : 'Tap the arrows to draw edges between the syllables.'}
        </Text>
      </View>
      {/*<TouchableOpacity onPress={scrollLeft} style={[styles.scrollButton, styles.leftButton]}>*/}
      {/*  <Text style={styles.buttonText}>{'<'}</Text>*/}
      {/*</TouchableOpacity>*/}
      <ScrollView
        // ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={true}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}>
          <View style={styles.poemContainer}>{renderPoemLines()}</View>
        </ScrollView>
      </ScrollView>
      {/*<TouchableOpacity onPress={scrollRight} style={[styles.scrollButton, styles.rightButton]}>*/}
      {/*  <Text style={styles.buttonText}>{'>'}</Text>*/}
      {/*</TouchableOpacity>*/}
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
  handImage: {
    width: 10,
    height: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollButton: {
    padding: 10,
    //backgroundColor: '#ccc',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 1,
    top: '50%',
  },
  leftButton: {
    left: 0,
  },
  rightButton: {
    right: 0,
  },
  inputText: {
    fontSize: 24, // Adjust this value to change the size of the user input text
    fontWeight: 'bold', // Optional: to make the text bold
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
    top: -25,
    right: '20%',
    zIndex: 1,
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
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
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
    alignItems: 'center',
    width: '100%',
    // paddingHorizontal: 50,
    //  marginHorizontal: 50,
  },
  poemText: {
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'left',
    lineHeight: 26,
    fontFamily: 'Teachers-Bold',
  },
  poemContainer: {
    width: '100%',
    marginBottom: 20,
    //marginHorizontal:20,
    //  borderWidth: 1,
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
    marginRight: 5,
    marginHorizontal: 8,
    marginBottom: 5,
    justifyContent: 'center',
  },
  edgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 8,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    width: 40,
    height: 50,
    textAlign: 'center',
    marginBottom: 5,
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
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'TildaSans-Regular',
  },
  stressText: {
    fontSize: 20,
    marginBottom: 5,
    paddingTop: 20,
    fontFamily: 'TildaSans-Regular',
    color: '#9aab63',
    fontWeight: 'bold',
  },
  instructionContainer: {
    marginBottom: 10,
    padding: 10,
    paddingTop: 80,
    // backgroundColor: '#FAF4E5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 16,
  },
  instructionTitle: {
    fontFamily: 'Teachers-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    // paddingHorizontal: 16,
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
  audio_image: {
    width: 200,
    height: 50,
    alignSelf: 'center',
    // marginLeft: 13,
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
    //marginRight: 25,
    width: 130,
    height: 40,
    // marginBottom: 10,
  },
  goBackIcon: {
    width: 130,
    height: 40,
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
  arrowPosition: (syllableLayouts, lineIndex, syllableIndex) => ({
    position: 'absolute',
    left:
      syllableLayouts[lineIndex][syllableIndex]?.x +
        syllableLayouts[lineIndex][syllableIndex]?.width / 2 +
        (syllableLayouts[lineIndex][syllableIndex + 1]?.x -
          syllableLayouts[lineIndex][syllableIndex]?.x) /
          2 || 0,
  }),
});

export default PoemScansion;
