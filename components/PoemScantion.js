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
} from 'react-native';
import {getPoem} from '../api/api';
import commonStyles from '../styles/commonStyles';
import AnswerFeedbackModal from './AnswerFeedbackModal';
import {audioFiles, globalAudioFiles, playSound} from '../api/audio';

const PoemScansion = ({
                        poemId,
                        testID,
                        syllables,
                        correctPattern,
                        correctEdges,
                        handleNextScreen,
                        explanation,
                        userInput,
                        feedback,
                        setUserInput,
                        setFeedback,
  te
                      }) => {
  console.log('Initial props:', {
    poemId,
    syllables,
    correctPattern,
    correctEdges,
    explanation,
    userInput,
    feedback,
    testID
  });

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

  const scrollViewRef = useRef(null);
  const horizontalScrollViewRef = useRef(null);

  const initializeStates = () => {
    console.log('Initializing states with syllables:', syllables);
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
      scrollToTopLeft();  // Scroll to top-left when new poem is presented
    }
  }, [poemId]);

  useEffect(() => {
    scrollToTopLeft(); // Scroll to top-left on step change
  }, [currentStep]);

  const scrollToTopLeft = () => {
    if (horizontalScrollViewRef.current && scrollViewRef.current) {
      horizontalScrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
      scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
    }
  };

  useEffect(() => {
    if (syllables.length > 0) {
      initializeStates();
    }
  }, [syllables]);

  const handleInputChange = (lineIndex, syllableIndex) => {
    playSound(globalAudioFiles.tapClick);
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
      console.log("input by user:", edgesInput);
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
        handleNextScreen();
      }
    } else if (currentStep === 3) {
      handleNextScreen();
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
                    testID={`Syllable-${lineIndex}-${syllableIndex}`}
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
                            testID={`Arrow-${lineIndex}-${syllableIndex}`}
                            source={require('../images/hand.png')}
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
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <Text style={styles.poemText}>Complete Poem</Text>
            <Text style={styles.poemText}>{poemText}</Text>
            <TouchableOpacity
              onPress={() => playSound(globalAudioFiles[audioFile])}>
              <Image
                source={require('../images/listenbtn.png')}
                style={styles.audio_image}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.header} testID={testID}>
        {currentStep > 1 && (
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require('../images/backbtn.png')}
              style={styles.goBackIcon}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => setPoemModalVisible(true)}>
          <Image
            source={require('../images/infobtn.png')}
            style={styles.showPoemIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.instructionContainer}>
        <Text style={styles.instructionTitle}>
          {currentStep === 1
            ? 'Tap each box to highlight the stressed syllables.'
            : currentStep === 2
              ? 'Tap each box to mark the unstressed syllables.'
              : 'Tap the arrows to connect syllables and draw edges.'}
        </Text>
      </View>
      <ScrollView horizontal ref={horizontalScrollViewRef} showsHorizontalScrollIndicator={true}>
        <ScrollView
          ref={scrollViewRef}
          testID="scrollView"
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}>
          <View style={styles.poemContainer}>{renderPoemLines()}</View>
        </ScrollView>
      </ScrollView>
      {showSubmitButton ? (
        <TouchableOpacity
          style={commonStyles.buttonContainer}
          onPress={checkAnswers}>
          <Text style={commonStyles.buttonTitle}>Check Your Answer</Text>
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
  inputText: {
    fontSize: 24,
    fontWeight: 'bold',
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
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    width: '100%',
  },
  stressWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  syllableWrapper: {
    alignItems: 'center',
    marginRight: 5,
    marginHorizontal: 8,
    marginBottom: 5,
    justifyContent: 'flex-start',
  },
  edgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
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
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionTitle: {
    fontFamily: 'Teachers-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  arrowWrapper: {
    flexDirection: 'row',
    position: 'relative',
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
  },
  header: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
  },
  showPoemIcon: {
    width: 130,
    height: 40,
  },
  goBackIcon: {
    width: 130,
    height: 40,
  },
  visibleLine: {
    position: 'absolute',
    height: 50,
    width: 2,
    backgroundColor: '#DDB1E4',
    top: -50,
    marginHorizontal: 1,
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
