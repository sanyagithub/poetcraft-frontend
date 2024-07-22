import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getEmail} from '../api/auth';
import {
  getModules,
  getModuleProgress,
  getLastQuestionAnswered,
  getTotalQuestions, getAwardsByEmail,
} from "../api/api";

import Module1Image from '../images/Scansion_Scholar.png';
import Module2Image from '../images/Syllable_Savant.png';
import Module3Image from '../images/Scansion_Sensei.png';
import Module4Image from '../images/Metrical_Master.png';
import Module5Image from '../images/Scansion_Sleuth.png';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';

const getModuleImage = moduleId => {
  switch (moduleId) {
    case 1:
      return Module1Image;
    case 2:
      return Module2Image;
    case 3:
      return Module3Image;
    case 4:
      return Module4Image;
    case 5:
      return Module5Image;
    default:
      return null;
  }
};

const AwardsScreen = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    async function fetchAwards() {
      try {
        const email = await getEmail();
        const awards = await getAwardsByEmail(email);
        setAwards(awards);
      } catch (error) {
        console.error('Error fetching awards:', error);
      }
    }
    fetchAwards();
  }, []);

  const renderItem = ({item}) => {
    //const progress = progressMap[item.id] || 0;

    const image = `./images/${item.awardImageUrl}`;

    return (
      <TouchableOpacity style={styles.moduleContainer}>
        <Image source={image} style={styles.moduleImage} />
        <Text style={styles.awardTitle}>{item.awardTitle}</Text>
      </TouchableOpacity>
    );
  };

  if (awards.length === 0) {
    return (
      <GradientBackground>
        <View style={commonStyles.container}>
          <Text style={styles.encouragingMessage}>
            You haven't earned any awards yet. Keep learning and you'll soon
            start earning awards!
          </Text>
        </View>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Text style={styles.header}>Awards</Text>
        <Text style={styles.subHeader}>
          Your achievements through the modules
        </Text>
        <FlatList
          data={awards}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF4E5',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  moduleContainer: {
    width: '45%',
    alignItems: 'center',
  },
  moduleImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  completedBadge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'green',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#9AAB63',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  awardTitle: {
    marginTop: 10,
    fontSize: 16,
  },
  encouragingMessage: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default AwardsScreen;
