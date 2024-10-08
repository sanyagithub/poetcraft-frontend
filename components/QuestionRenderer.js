import PoemScantion from './PoemScantion';
import WordPuzzle from './WordPuzzle';
import MCQQuestion from './MCQQuestion';
import {useEffect, useState} from 'react';
import WordScantion from './WordScantion';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const QuestionRenderer = ({question, handleNextScreen}) => {
  console.log('question is ', question);

  function convertToJSONString(input) {
    // Remove whitespace and split the string by commas and brackets
    const elements = input.replace(/[\[\]\s]/g, '').split(',');

    // Add double quotes around each element if not already quoted
    const quotedElements = elements.map(element => {
      if (element.startsWith('"') && element.endsWith('"')) {
        return element;
      }
      return `"${element}"`;
    });

    // Join the elements back into a JSON array string
    return `[${quotedElements.join(',')}]`;
  }

  const [answerOptions, setAnswerOptions] = useState([]);
  const [syllables, setSyllables] = useState([]);
  const [correctPattern, setCorrectPattern] = useState([]);
  const [correctEdges, setCorrectEdges] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    console.log('useEffect is running');
    if (question.type === 'MCQ' && question.options) {
      setAnswerOptions(JSON.parse(question.options));
    }
    if (question.type === 'DRAG_DROP' && question.dragDropSyllablesOptions) {
      setAnswerOptions(JSON.parse(question.dragDropSyllablesOptions));
    }
    if (
      question.type === 'STRESS_CHECKER_WORDS' &&
      question.syllable &&
      question.pattern
    ) {
      setSyllables(JSON.parse(convertToJSONString(question.syllable)));
      setCorrectPattern(question.pattern.split(''));
    }
    if (question.type === 'STRESS_CHECKER_POEM' && question.poemSyllables) {
      console.log('I am here');
      const parsedSyllables = JSON.parse(question.poemSyllables);
      setSyllables(parsedSyllables);
      setUserInput(parsedSyllables.map(line => line.map(() => '')));
      setFeedback(parsedSyllables.map(line => line.map(() => '')));
      setCorrectPattern(
        question.pattern.split('\n').map(line => line.split('')),
      );
      if (question.edges) {
        setCorrectEdges(question.edges.split('\n').map(line => line.split('')));
      }
    }
  }, [question]);

  if (question.type === 'STRESS_CHECKER_POEM' && syllables.length === 0) {
    // return null; // Or a loading indicator if you prefer
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#DDB1E4" />
      </View>
    );
  }
  switch (question.type) {
    case 'MCQ':
      return (
        <MCQQuestion
          testID={`MCQQuestion-${question.id}`}
          question={question.questionText}
          answerOptions={answerOptions}
          correctAnswer={question.correctAnswer}
          handleNextScreen={handleNextScreen}
          explanation={question.explanation}
        />
      );
    case 'DRAG_DROP':
      return (
        <WordPuzzle
          testID="WordPuzzle"
          word={question.dragDropWord}
          correctAnswers={question.dragDropSyllablesCorrect}
          initialTexts={answerOptions}
          handleNextScreen={handleNextScreen}
          explanation={question.explanation}
        />
      );

    case 'STRESS_CHECKER_POEM':
      return (
        <PoemScantion
          testID={`PoemScantion-${question.id}`}
          poemId={question.poemId}
          syllables={syllables}
          correctPattern={correctPattern}
          correctEdges={correctEdges ? correctEdges : null}
          handleNextScreen={handleNextScreen}
          explanation={question.explanation}
          userInput={userInput}
          feedback={feedback}
          setUserInput={setUserInput}
          setFeedback={setFeedback}
        />
      );
    case 'STRESS_CHECKER_WORDS':
      return (
        <WordScantion
          testID={`WordScantion-${question.id}`}
          lineText={question.questionText}
          syllables={syllables}
          correctPattern={correctPattern}
          handleNextScreen={handleNextScreen}
          explanation={question.explanation}
          audioId={question.audioId ? question.audioId : null}
        />
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuestionRenderer;
