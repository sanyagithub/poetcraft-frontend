import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { getCourses, getUserProgress } from '../api/api';
import { useNavigation } from '@react-navigation/native';
import { getEmail } from '../api/auth';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';

const CourseButton = ({ course, progress, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.courseButton}
      onPress={onPress}
      testID="courseItem"
      accessibilityLabel={`Course ${course.name}, ${progress}% completed`}
    >
      <View style={{ ...styles.progressBar, width: `${progress}%` }} />
      <Text style={styles.courseText}>{course.name}</Text>
    </TouchableOpacity>
  );
};

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [progressMap, setProgressMap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const email = await getEmail();
        const coursesData = await getCourses();
        setCourses(coursesData);

        const progressData = {};
        for (let course of coursesData) {
          const progress = await getUserProgress(email, course.id);
          progressData[course.id] = progress;
        }
        setProgressMap(progressData);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("There was a problem loading the courses. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <GradientBackground>
        <View style={commonStyles.container}>
          <Text style={styles.loadingText}>Loading your courses...</Text>
          <ActivityIndicator size="large" color="#DDB1E4" />
        </View>
      </GradientBackground>
    );
  }

  const renderItem = ({ item }) => {
    const progress = progressMap[item.id] || 0;
    return (
      <CourseButton
        course={item}
        progress={progress}
        onPress={() => navigation.navigate('Modules', { courseId: item.id })}
      />
    );
  };

  return (
    <GradientBackground>
      <View testID="coursesScreen" style={commonStyles.container}>
        <Text style={styles.text_title}>Explore Our Courses</Text>
        <Image
          source={require('../images/heartline.png')}
          style={styles.heartlineimage}
        />
        {courses && (
          <FlatList
            data={courses}
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
    fontSize: 25,
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

export default Courses;
