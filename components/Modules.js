import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
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
    <TouchableOpacity
      style={styles.courseButton}
      onPress={onPress}
      accessibilityLabel={`Module ${module.name}, ${progress}% completed`}
      testID={`moduleButton-${module.id}`}
    >
      <View style={{...styles.progressBar, width: `${progress}%`}} />
      <Text style={styles.courseText}>{module.name}</Text>
    </TouchableOpacity>
  );
};

const Modules = ({route}) => {
  const [modules, setModules] = useState(null);
  const [progressMap, setProgressMap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const email = await getEmail();
        const modulesData = await getModules(route.params.courseId);
        setModules(modulesData);

        const progressData = {};
        for (let module of modulesData) {
          const progress = await getModuleProgress(email, route.params.courseId, module.id);
          progressData[module.id] = progress;
        }
        setProgressMap(progressData);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("There was a problem loading the modules. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [route.params.courseId]);

  const handlePress = async moduleId => {
    try {
      const email = await getEmail();
      const lastQuestion = await getLastQuestionAnswered(email, moduleId);
      const totalQuestions = await getTotalQuestions(email, moduleId);

     // if (lastQuestion < totalQuestions) {
        navigation.navigate('QuestionFlow', {
          moduleId,
          courseId: route.params.courseId,
          email,
          lastQuestion,
        });
      // } else {
      //   navigation.navigate('CompletionScreen', {
      //     moduleId,
      //     courseId: route.params.courseId,
      //   });
      // }
    } catch (error) {
      console.error('Error navigating to module:', error);
      alert("Something went wrong. Please try again.");
    }
  };

  const renderItem = ({item}) => {
    const progress = progressMap[item.id] || 0;
    return (
      <ModuleButton
        module={item}
        progress={progress}
        onPress={() => handlePress(item.id)}
      />
    );
  };

  if (isLoading) {
    return (
      <GradientBackground>
        <View style={commonStyles.container}>
          <Text style={styles.loadingText}>Loading your modules...</Text>
          <ActivityIndicator size="large" color="#DDB1E4" />
        </View>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Text style={styles.text_title}>Explore the Modules</Text>
        <Image
          source={require('../images/heartline.png')}
          style={styles.heartlineimage}
        />
        {modules && (
          <FlatList
            data={modules}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        )}
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
    backgroundColor: '#F5D867',
    borderRadius: 10,
    padding: 5,
    alignContent: 'center',
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
    fontSize: 20,
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
  loadingText: {
    fontFamily: 'Teachers-Regular',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default Modules;
