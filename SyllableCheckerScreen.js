import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import commonStyles from './commonStyles';
import GradientBackground from './GradientBackground';

export default class SyllableCheckerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      syllables: [],
      error: '',
    };
  }

  toggleButtonState = () => {
    if (this.state.word.trim() === '') {
      this.setState({error: 'Please enter a word'});
      return;
    }

    axios
      .get('http://localhost:8080/' + this.state.word.toLowerCase())
      .then(response => {
        this.setState({syllables: response.data, error: ''});
      })
      .catch(error => {
        this.setState({error: 'Word not found'});
      });
  };

  renderSyllable = ({item}) => {
    const stressedStyle =
      item.stress === 'true'
        ? styles.stressedSyllableText
        : styles.unstressedSyllableText;
    const isStressed =
      item.stress === 'true' ? 'is stressed' : 'is NOT stressed';

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
          <Text style={styles.header}>Syllable Stress Checker</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the word..."
            onChangeText={text => {
              this.setState({word: text});
            }}
          />
          {this.state.error ? (
            <Text style={styles.errorText}>{this.state.error}</Text>
          ) : null}
          <TouchableOpacity
            style={commonStyles.buttonContainer}
            onPress={this.toggleButtonState}>
            <Text style={commonStyles.buttonTitle}>Submit</Text>
          </TouchableOpacity>
          <FlatList
            data={this.state.syllables}
            renderItem={this.renderSyllable}
            keyExtractor={item => item.syllable}
            contentContainerStyle={styles.listContainer}
          />
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
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    color: '#4B0082',
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
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  stressedSyllableText: {
    fontSize: 18,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  unstressedSyllableText: {
    fontSize: 18,
    color: '#0000ff',
    fontWeight: 'bold',
  },
  customButtonContainer: {
    margin: 30, // Add padding here
  },
});
