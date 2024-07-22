import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';
import AnswerFeedbackModal from './AnswerFeedbackModal';
import { globalAudioFiles, playSound } from "../api/audio";

const {width} = Dimensions.get('window'); // Get device screen width

const WordPuzzle = ({
  word,
  correctAnswers,
  initialTexts,
  handleNextQuestion,
  explanation,
}) => {
  useEffect(() => {
    console.log('Word:', word);
    console.log('Correct Answers:', correctAnswers);
    console.log('Initial Texts:', initialTexts);
  }, [word, correctAnswers, initialTexts]);

  const boxWidth = 60;
  const boxHeight = 40;
  const horizontalSpacing = 10; // Space between boxes

  // Calculate the x positions for the boxes based on the screen width
  const calculateXPositions = () => {
    const totalWidth = 3 * boxWidth + 2 * horizontalSpacing;
    const initialX = (width - totalWidth) / 2;
    return Array.from(
      {length: 3},
      (_, i) => initialX + i * (boxWidth + horizontalSpacing),
    );
  };

  const xPositions = calculateXPositions();

  // State for initial positions and draggables
  const [initialPositions, setInitialPositions] = useState([]);
  const [draggables, setDraggables] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputBoxColors, setInputBoxColors] = useState([
    'black',
    'black',
    'black',
  ]);
  const [draggableBoxColor, setDraggableBoxColor] = useState([
    'black',
    'black',
    'black',
    'black',
    'black',
    'black',
  ]);
  const [draggableBorderStyles, setDraggableBorderStyles] = useState([
    'dashed',
    'dashed',
    'dashed',
    'dashed',
    'dashed',
    'dashed',
  ]);

  // Recalculate initial positions and draggables whenever the props change
  useEffect(() => {
    const newInitialPositions = initialTexts.map((item, index) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      return {
        x: xPositions[col] - 30,
        y: 300 + row * (boxHeight + horizontalSpacing),
        text: item,
      };
    });

    setInitialPositions(newInitialPositions);

    setDraggables(
      newInitialPositions.map(pos => ({
        pan: new Animated.ValueXY({x: pos.x, y: pos.y}),
        text: pos.text,
      })),
    );
  }, [word, correctAnswers, initialTexts]);

  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showTryAgainButton, setShowTryAgainButton] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  // Input boxes positioned similarly to draggable boxes
  const inputBoxesRef = useRef([
    {
      x: xPositions[0],
      y: 150,
      width: boxWidth,
      height: boxHeight,
      color: 'black',
    },
    {
      x: xPositions[1],
      y: 150,
      width: boxWidth,
      height: boxHeight,
      color: 'black',
    },
    {
      x: xPositions[2],
      y: 150,
      width: boxWidth,
      height: boxHeight,
      color: 'black',
    },
  ]).current;

  // Creating PanResponder for each draggable box
  const panResponders = draggables.map((draggable, index) => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        draggable.pan.setOffset({
          x: draggable.pan.x._value,
          y: draggable.pan.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [null, {dx: draggable.pan.x, dy: draggable.pan.y}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: () => {
        draggable.pan.flattenOffset();
        const dropAreaIndex = inputBoxesRef.findIndex(
          box =>
            draggable.pan.x._value + boxWidth > box.x - 30 &&
            draggable.pan.x._value < box.x - 30 + boxWidth &&
            draggable.pan.y._value + boxHeight > box.y &&
            draggable.pan.y._value < box.y + boxHeight,
        );
        if (dropAreaIndex !== -1) {
          inputBoxesRef[dropAreaIndex].text = draggable.text;
          const newColors = [...inputBoxColors];
          newColors[dropAreaIndex] = '#ddb1e4';
          setInputBoxColors(newColors);
          const newDraggableColors = [...draggableBoxColor];
          newDraggableColors[index] = '#ddb1e4';
          setDraggableBoxColor(newDraggableColors);
          const newDraggableBorderStyles = [...draggableBorderStyles];
          newDraggableBorderStyles[index] = 'solid';
          setDraggableBorderStyles(newDraggableBorderStyles);
          playSound(globalAudioFiles.dropSound);
          Animated.spring(draggable.pan, {
            toValue: {
              x: inputBoxesRef[dropAreaIndex].x - 30,
              y: inputBoxesRef[dropAreaIndex].y,
            },
            useNativeDriver: false,
          }).start();
        } else {
          Animated.spring(draggable.pan, {
            toValue: initialPositions[index],
            useNativeDriver: false,
          }).start(() => {
            playSound(globalAudioFiles.dropSound);
            const newColors = [...inputBoxColors];
            newColors.fill('black');
            setInputBoxColors(newColors);
            const newDraggableColors = [...draggableBoxColor];
            newDraggableColors.fill('black');
            setDraggableBoxColor(newDraggableColors);
            const newDraggableBorderStyles = [...draggableBorderStyles];
            newDraggableBorderStyles[index] = 'dashed';
            setDraggableBorderStyles(newDraggableBorderStyles);
          });
        }
      },
    });
  });

  const handleSubmit = () => {
    // const correctAnswers = ['ex', 'am', 'ple'];
    const userAnswers = inputBoxesRef.map(box => box.text);
    setShowSubmitButton(false);
    correctAnswers = JSON.parse(correctAnswers);
    if (JSON.stringify(correctAnswers) === JSON.stringify(userAnswers)) {
      setIsAnswerCorrect(true);
      setShowNextButton(true);
    } else {
      setIsAnswerCorrect(false);
      setShowTryAgainButton(true);
      draggables.forEach((draggable, index) => {
        Animated.spring(draggable.pan, {
          toValue: initialPositions[index],
          useNativeDriver: false,
        }).start();
        inputBoxesRef.forEach(box => (box.text = '')); // Clear the input boxes
      });
    }
    setModalVisible(true);
  };

  const handleNextButtonClick = () => {
    // Reset states for next question
    setShowSubmitButton(true);
    setShowNextButton(false);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);
    const newColors = [...inputBoxColors];
    newColors.fill('black');
    setInputBoxColors(newColors);
    const newDraggableColors = [...draggableBoxColor];
    newDraggableColors.fill('black');
    setDraggableBoxColor(newDraggableColors);
    const newDraggableBorderStyles = [...draggableBorderStyles];
    newDraggableBorderStyles.fill('dashed');
    setDraggableBorderStyles(newDraggableBorderStyles);


    handleNextQuestion();
    // Additional logic for moving to the next question
  };

  const handleTryAgainButtonClick = () => {
    // Reset states to allow user to try again
    setShowSubmitButton(true);
    setShowTryAgainButton(false);
    setIsAnswerCorrect(false);
    const newColors = [...inputBoxColors];
    newColors.fill('black');
    setInputBoxColors(newColors);
    const newDraggableColors = [...draggableBoxColor];
    newDraggableColors.fill('black');
    setDraggableBoxColor(newDraggableColors);
    const newDraggableBorderStyles = [...draggableBorderStyles];
    newDraggableBorderStyles.fill('dashed');
    setDraggableBorderStyles(newDraggableBorderStyles);
    // Additional logic if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.word}>Divide the word "{word}" into syllables</Text>
      <View style={styles.inputArea}>
        {inputBoxesRef.map((box, index) => (
          <View
            key={index}
            style={[styles.inputBox, {borderColor: inputBoxColors[index]}]}
          />
        ))}
      </View>
      {draggables.map((draggable, index) => (
        <Animated.View
          key={index}
          {...(panResponders[index] ? panResponders[index].panHandlers : {})}
          style={[
            draggable.pan.getLayout(),
            styles.draggableBox,
            {
              borderColor: draggableBoxColor[index],
              borderStyle: draggableBorderStyles[index],
            },
          ]}>
          <Text>{draggable.text}</Text>
        </Animated.View>
      ))}

      {showSubmitButton && (
        <TouchableOpacity style={commonStyles.buttonContainer} onPress={handleSubmit}>
          <Text style={commonStyles.buttonTitle}>Submit</Text>
        </TouchableOpacity>
      )}
      {!showSubmitButton && (
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Teachers-Bold',
    position: 'absolute',
    top: 30,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    //  marginBottom: 20,
    position: 'absolute',
    top: 150, // Position the input boxes at a fixed position
  },
  inputBox: {
    width: 60,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 5,
  },
  plus: {
    fontSize: 15,
    //marginHorizontal: 5,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 52,
  },
  draggableBox: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5D867',
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dashed',
    // margin: 5,
    position: 'absolute',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 10,
    zIndex: 1,
  },
  submitButton: {
    backgroundColor: '#9AAB63',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 80,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 30,
  },
  submitButton_text: {
    fontFamily: 'TildaSans-Regular',
    fontSize: 15,
    alignSelf: 'center',
    color: 'white',
  },
  button_text: {
    fontFamily: 'TildaSans-Regular',
    fontSize: 15,
    alignSelf: 'center',
  },
});

export default WordPuzzle;
