import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getEmail} from '../api/auth';
import {
  getLastQuestionAnswered,
  getModuleProgress,
  getModules,
  getTotalQuestions,
} from '../api/api';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';

const ModuleButton = ({module, progress, onPress}) => {
  return (
    <TouchableOpacity style={styles.courseButton} onPress={onPress}>
      <View style={{...styles.progressBar, width: `${progress}%`}} />
      <Text style={styles.courseText}>{module.name}</Text>
    </TouchableOpacity>
  );
};

const Modules = ({route}) => {
  const [modules, setModules] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    //console.log('course id is ', route.params.courseId);
    const courseId = route.params.courseId;
    async function fetchData() {
      const email = await getEmail();
      const modulesData = await getModules(courseId);
      setModules(modulesData);

      const progressData = {};
      for (let module of modulesData) {
        const progress = await getModuleProgress(email, courseId, module.id);
        progressData[module.id] = progress;
      }
      setProgressMap(progressData);
    }
    fetchData();
  }, [route.params.courseId]);

  const handlePress = async moduleId => {
    try {
      const email = await getEmail(); // Ensure getEmail is awaited
      const lastQuestion = await getLastQuestionAnswered(email, moduleId);
      const totalQuestions = await getTotalQuestions(email, moduleId);

      if (lastQuestion < totalQuestions) {
        navigation.navigate('QuestionFlow', {
          moduleId,
          courseId: route.params.courseId,
          email, // Pass the actual email
          lastQuestion,
        });
      } else {
        navigation.navigate('CompletionScreen', {
          moduleId,
          courseId: route.params.courseId,
        });
      }
    } catch (error) {
      console.error('Error fetching email:', error);
    }
  };

  const renderItem = ({item}) => {
    const progress = progressMap[item.id] || 0;
    console.log(item.name);
    return (
      <ModuleButton
        module={item}
        progress={progress}
        onPress={() => handlePress(item.id)}
      />
    );
  };

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Text style={styles.text_title}>MODULES</Text>
        <Image
          source={require('../images/heartline.png')}
          style={styles.heartlineimage}
        />
        <FlatList
          data={modules}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF4E5',
    flex: 1,
    justifyContent: 'center',
  },
  courseButton: {
    marginBottom: 25,
    marginTop: 5,
    //marginRight: 25,
    backgroundColor: '#F5D867',
    borderRadius: 10,
    padding: 5,
    alignContent: 'center',
    // marginLeft: 25,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    position: 'relative',
    overflow: 'hidden',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '15%',
    backgroundColor: 'green',
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: -1,
  },
  courseText: {
    fontFamily: 'Teachers-Regular',
    alignSelf: 'center',
    fontSize: 18,
    zIndex: 1,
  },
  text_title: {
    fontFamily: 'Teachers-Bold',
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 50,
  },
  heartlineimage: {
    width: 100,
    height: 30,
    marginBottom: 30,
    alignSelf: 'center',
  },
});

export default Modules;
