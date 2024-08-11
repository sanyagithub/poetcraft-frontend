import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';
import {API_BASE_URL} from './Global';

export default class SyllableCheckerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      syllables: [],
      error: '',
      isLoading: false,
    };
  }

  toggleButtonState = () => {
    if (this.state.word.trim() === '') {
      this.setState({error: 'Oops! It looks like you forgot to enter a word.'});
      return;
    }

    this.setState({isLoading: true});

    axios
      .get(`${API_BASE_URL}/api/auth/word/` + this.state.word.toLowerCase())
      .then(response => {
        this.setState({syllables: response.data, error: '', isLoading: false});
      })
      .catch(error => {
        const errorMessage =
          error.response && error.response.status === 404
            ? 'Word not found'
            : 'An error occurred. Please try again later.';
        this.setState({error: errorMessage, isLoading: false});
      });
  };

  renderSyllable = ({item}) => {
    const stressedStyle =
      item.type === 'stress'
        ? styles.stressedSyllableText
        : item.type === 'secondary stress'
          ? styles.secondaryStressSyllableText
          : styles.unstressedSyllableText;

    const isStressed =
      item.type === 'stress'
        ? '( / ) is stressed'
        : item.type === 'secondary stress'
          ? '( \\ ) is secondary stressed'
          : '( u ) is unstressed';

    return (
      <View style={styles.syllableContainer}>
        <Text style={stressedStyle}>
          {item.syllable} - {isStressed}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <GradientBackground>
        <View style={commonStyles.container}>
          <Text style={styles.header}>
            Discover the Stress Patterns in Your Words
          </Text>
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            placeholder="Enter a word to check stress..."
            placeholderTextColor='#DDB1E4'
            onChangeText={text => {
              this.setState({word: text});
            }}
            testID="syllableInput"
            accessibilityLabel="Input field for word syllable check"
          />
          {this.state.error ? (
            <Text style={styles.errorText}>{this.state.error}</Text>
          ) : null}
          <TouchableOpacity
            style={commonStyles.buttonContainer}
            onPress={this.toggleButtonState}
            accessibilityLabel="Analyze button to check syllable stress"
            testID="analyzeButton"
          >
            <Text style={commonStyles.buttonTitle}>Analyze</Text>
          </TouchableOpacity>
          {this.state.isLoading && (
            <ActivityIndicator size="large" color="#DDB1E4" testID="loadingIndicator" />
          )}
          {this.state.syllables.length > 0 && (
            <FlatList
              data={this.state.syllables}
              renderItem={this.renderSyllable}
              keyExtractor={item => item.syllable}
              contentContainerStyle={styles.listContainer}
              testID="syllableList"
            />
          )}
        </View>
      </GradientBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4B0082',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  listContainer: {
    marginTop: 20,
  },
  syllableContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  stressedSyllableText: {
    fontSize: 18,
    color: '#9AAB63',
    fontWeight: 'bold',
  },
  unstressedSyllableText: {
    fontSize: 18,
    color: '#9AAB63',
    fontWeight: '400',
  },
  secondaryStressSyllableText: {
    fontSize: 18,
    color: '#9AAB63',
    fontWeight: '600',
  },
  customButtonContainer: {
    margin: 30,
  },
});
