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
      .get('http://localhost:8080/api/auth/' + this.state.word.toLowerCase())
      .then(response => {
        this.setState({syllables: response.data, error: ''});
      })
      .catch(error => {
        this.setState({error: 'Word not found'});
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
          <Text style={styles.header}>Check the stress levels of syllables in a word</Text>
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
    margin: 30, // Add padding here
  },
});
