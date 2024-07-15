import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Courses from './Courses';
import Modules from './Modules';
import QuestionFlow from './QuestionFlow';
import QuestionRenderer from './QuestionRenderer';
import CompletionScreen from './CompletionScreen';

const Stack = createStackNavigator();

const CourseStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CourseScreen" component={Courses} />
      <Stack.Screen name="Modules" component={Modules} />
      <Stack.Screen name="QuestionFlow" component={QuestionFlow} />
      <Stack.Screen name="QuestionRenderer" component={QuestionRenderer} />
      <Stack.Screen name="CompletionScreen" component={CompletionScreen} />
    </Stack.Navigator>
  );
};

export default CourseStack;
