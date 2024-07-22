import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {getCourses, getUserProgress} from '../api/api';
import {useNavigation} from '@react-navigation/native';
import {getEmail} from '../api/auth';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';

const CourseButton = ({course, progress, onPress}) => {
  return (
    <TouchableOpacity style={styles.courseButton} onPress={onPress}>
      <View style={{...styles.progressBar, width: `${progress}%`}} />
      <Text style={styles.courseText}>{course.name}</Text>
    </TouchableOpacity>
  );
};

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const [userProgress, setUserProgress] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const email = await getEmail();
      const coursesData = await getCourses();
      //const progressData = (await getUserProgress(email, coursesData.id)) || {};
      console.log('courses', coursesData);
      setCourses(coursesData);

      const progressData = {};
      for (let course of coursesData) {
        const progress = await getUserProgress(email, course.id);
        progressData[course.id] = progress;
      }
      console.log(progressData);
      setProgressMap(progressData);
      //setUserProgress(progressData);
    }
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    //console.log('Rendering item:', {item}); // Debugging log
    const progress = progressMap[item.id] || 0;
    return (
      <CourseButton
        course={item}
        progress={progress}
        onPress={() => navigation.navigate('Modules', {courseId: item.id})}
      />
    );
  };

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Text style={styles.text_title}>COURSES</Text>
        <Image
          source={require('../images/heartline.png')}
          style={styles.heartlineimage}
        />
        <FlatList
          data={courses}
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
    fontSize: 18,
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

export default Courses;
