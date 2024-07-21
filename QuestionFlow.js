// QuestionFlow.js

import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import QuestionRenderer from './QuestionRenderer';
import {addAward, getQuestions, updateUserProgress} from './api';
import {useNavigation} from '@react-navigation/native';
import Courses from './Courses';
import ContentRenderer from './ContentRenderer';
import commonStyles from './commonStyles';
import GradientBackground from './GradientBackground';

const QuestionFlow = ({route}) => {
  // console.log(route.params);
  const {courseId, moduleId, email, lastQuestion} = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      setCurrentQuestionIndex(lastQuestion + 1);
      // console.log(moduleId);
      const questions = await getQuestions(moduleId);
      //console.log(questions);
      //setQuestions(questions);
      // const combinedItems = [];
      if (moduleId === 1) {
        console.log('I am in module 1');
        setQuestions([
          {
            type: 'CONTENT',
            heading: 'Why Scan a Poem?',
            text: "Before diving into writing poetry, it's essential to grasp the concept of scansion. Scanning a poem, whether it's your own creation or someone else’s work, is crucial for a few reasons:",
          },
          {
            type: 'CONTENT',
            heading: 'Unlocking the Meter’s Magic:',
            text:
              "Scansion is the best, essentially the only, method to truly understand how the meter of a poem works its magic. It reveals the rhythm and movement through time that create the poem's innermost reality.\n" +
              '\n',
          },
          {
            type: 'CONTENT',
            heading: 'Navigating Innermost Realities:',
            text: 'A poem’s rhythm—the unfolding of movement through time—is its innermost reality. By scanning a poem, we translate the wordless, eloquent language of meter into our awareness. Deep scansion allows us to dive deeply into a poem, whether for the first or the hundredth time.',
          },
          {
            type: 'CONTENT',
            heading: 'Experiencing Physical Sensations:',
            text:
              'Just as we feel the most profound romantic and spiritual emotions physically, a poem expresses its sublime truths through the physical sensations of the lengths, weights, and rhythms of its syllables. Scansion is the key to truly experiencing these sensations as the poet did.' +
              '\n',
          },
          {
            type: 'CONTENT',
            heading: "Let's Start with Syllables",
            text:
              'A syllable is a part of a word that contains a single vowel sound and is pronounced as a unit. For example:\n' +
              '\n' +
              "The word 'book' has one syllable.\n" +
              "The word 'reading' has two syllables." +
              '\n',
          },
          ...questions.slice(0),
        ]);
      }

      if (moduleId === 2) {
        setQuestions([
          {
            type: 'CONTENT',
            heading: 'What is an Accented or Stressed Syllable?',
            text: "As an English reader, you already understand and use accent in every English word with more than one syllable. \nFor example, the word “encounter” has three syllables: en-count-er. \nOne of these syllables is accented, meaning it is more heavily stressed or emphasized than the other two. \nWhich syllable do you feel this is? If you're not sure, you can check a dictionary, which will show an accent mark over—yes, you guessed it—the second syllable.",
          },
          {
            type: 'CONTENT',
            heading: 'Components of Accent',
            text:
              'Accent has three different components:\n' +
              '\n' +
              'Loudness: An accented syllable is typically louder than the others.\n\n' +
              'Length: It is also longer in duration.\n\n' +
              'Pitch: The pitch is higher compared to the surrounding syllables.\n\n\n' +
              'Depending on the syllable and context, any one, two, or all three of these factors can contribute to our perception of accent. An accented syllable is louder, longer, and/or higher pitched than the syllables around it. Understanding these components helps in identifying and mastering the rhythm of poetry.' +
              '\n',
          },
          ...questions.slice(0),
        ]);
      }

      if (moduleId === 3) {
        setQuestions([
          {
            type: 'CONTENT',
            heading: 'Symbols for Stressed and Unstressed Syllables\n',
            text: (
              <Text>
                In scansion, we use specific symbols to mark stressed and unstressed syllables:{'\n'}
                {'\n'}
                WAND ( / ): Represents a <Text style={{ fontWeight: 'bold' }}>stressed syllable</Text>, also known as an accent, stress, or ictus. Sometimes referred to as a macron (which actually means 'long syllable').{'\n\n'}
                CUP ( u ): Represents an <Text style={{ fontWeight: 'bold' }}>unstressed syllable</Text>, also known as unstress, nonictus, or breve (which actually means 'short syllable').
              </Text>
            ),
          },
          {
            type: 'CONTENT',
            heading: 'How to Mark Syllables',
            text:
              'When you encounter a word, follow these steps:\n' +
              '\n' +
              'Identify the Stressed Syllables First: Look for the syllables that are stressed or emphasized. Place a wand ( / ) above each stressed syllable.\n\n' +
              'Mark the Unstressed Syllables: After identifying the stressed syllables, place a cup ( u ) above each unstressed syllable.\n\n' +
              'By consistently marking the stressed and unstressed syllables, you will develop a clearer understanding of the rhythm and meter in poetry.' +
              '\n',
          },
          ...questions.slice(0, 9),
          {
            type: 'CONTENT',
            heading: 'What is Phrasal Accent?',
            text:
              'Phrasal accent arises from sentence syntax, idiomatic phrases, and other language demands shared by speakers with a common understanding. Unlike lexical accents found in dictionaries, phrasal accents function similarly but cannot be altered, only overshadowed.\n' +
              '\n',
          },
          {
            type: 'CONTENT',
            heading: 'Accent Hierarchy and Idioms',
            text:
              'The commonly accepted way of accenting parts of speech is shown in the accent hierarchy guide. Idiomatic phrases, such as “I told you so,” rely heavily on traditional momentum. If pronounced without stressing the second syllable, the phrase becomes unrecognizable.\n' +
              '\n',
          },
          {
            type: 'CONTENT',
            heading: 'How to Mark Syllables in a Phrase\n',
            text:
              'When you encounter a phrase, follow these steps:\n' +
              '\n' +
              'Identify the Stressed Syllables First: Look for the syllables that are stressed or emphasized in the phrase. Place a wand ( / ) above each stressed syllable.\n\n' +
              'Mark the Unstressed Syllables: After identifying the stressed syllables, place a cup ( u ) above each unstressed syllable.\n\n' +
              'By consistently marking the stressed and unstressed syllables in phrases, you will better understand the rhythm and meter in poetry.\n\n' +
              '\n',
          },
          ...questions.slice(10, 16),
          {
            type: 'CONTENT',
            heading: 'What is Performative Accent?\n',
            text:
              'Performative accent is the way people emphasize certain syllables when speaking to express emotions or thoughts. \nThis type of accent showcases the flexibility and expressiveness of meter in poetry, allowing it to do magical things.\n' +
              '\n',
          },
          {
            type: 'CONTENT',
            heading: 'Flexibility with Monosyllabic Words\n',
            text:
              'The flexibility of performative accent is especially evident with monosyllabic words. For instance, in the phrase “I love you,” the emphasis can be placed on any of the three syllables, changing the meaning each time:\n' +
              '\n' +
              '\n"I love you": Emphasizes the speaker\'s personal affection.\n' +
              '\n"I love you": Emphasizes the feeling of love.\n' +
              '\n"I love you": Emphasizes the person being addressed.\n' +
              '\n',
          },
          {
            type: 'CONTENT',
            heading: 'Influence of Meter on Performative Stress\n',
            text:
              "The structure of meter in poetry can influence or even force the reader to emphasize certain syllables, affecting performative stress and, consequently, the meaning. \nWriting metrical poetry is a unique way to get inside another person's vocal apparatus and guide their use of performative stress in a specific way.\n" +
              '\n\n' +
              'By understanding and utilizing performative accent, poets can add depth and emotional nuance to their work, making their poetry more impactful and expressive.\n' +
              '\n',
          },
          ...questions.slice(17),
        ]);
      }

      if (moduleId === 4) {
        setQuestions([
          ...questions.slice(0, 2),
          {
            type: 'CONTENT',
            heading: 'What are Metrical Feet?',
            text:
              "Metrical feet are basic repeating patterns that give a poem its rhythm, as if the feet are walking the poem along. \n\nWhen scanning a poem, it's important to mark the boundaries between the metrical feet with a scansion mark called the Edge.\n" +
              '\n',
          },
          {
            type: 'CONTENT',
            heading: 'Basic Types of Metrical Feet',
            text:
              'Here are the basic five types of metrical feet, also known as meters:\n' +
              '\n' +
              '\nTrochee ( /u ): A stressed syllable( / ) followed by an unstressed syllable( u ).\n' +
              '\nIamb ( u/ ): An unstressed syllable( u ) followed by a stressed syllable( / ) .\n' +
              '\nDactyl ( /uu ): A stressed syllable( / ) followed by two unstressed syllables( u ).\n' +
              '\nAnapest ( uu/ ): Two unstressed syllables( uu ) followed by a stressed syllable( / ).\n' +
              '\nAmphibrach ( u/u ): An unstressed syllable( u ), followed by a stressed syllable( / ), and then an unstressed syllable( u ).\n' +
              '\n',
          },
          ...questions.slice(2),
        ]);
      }
    }
    fetchData();
  }, [lastQuestion, moduleId]);

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const awardData = getAwardData(moduleId);
      await addAward(
        email,
        courseId,
        moduleId,
        awardData.awardTitle,
        awardData.awardImageUrl,
      );
      navigation.navigate('CompletionScreen', {
        awardImageUrl: awardData.awardImageUrl,
        awardTitle: awardData.awardTitle,
      });
    }
    await updateUserProgress(email, courseId, moduleId);
  };

  const getAwardData = moduleId => {
    switch (moduleId) {
      case 1:
        return {
          awardTitle: 'Scansion Scholar',
          awardImageUrl: 'Scansion_Scholar.png',
        };
      case 2:
        return {
          awardTitle: 'Syllable Savant',
          awardImageUrl: 'Syllable_Savant.png',
        };
      case 3:
        return {
          awardTitle: 'Scansion Sensei',
          awardImageUrl: 'Scansion_Sensei.png',
        };
      case 4:
        return {
          awardTitle: 'Metrical Master',
          awardImageUrl: 'Metrical_Master.png',
        };
      default:
        return {};
    }
  };

  console.log('length-', questions.length);
  console.log('current index', currentQuestionIndex);

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        {questions.length > 0 &&
          (questions[currentQuestionIndex].type === 'CONTENT' ? (
            <ContentRenderer
              content={questions[currentQuestionIndex]}
              handleNextQuestion={handleNextQuestion}
            />
          ) : (
            <QuestionRenderer
              question={questions[currentQuestionIndex]}
              handleNextQuestion={handleNextQuestion}
            />
          ))}
      </View>
    </GradientBackground>
  );
};

export default QuestionFlow;
