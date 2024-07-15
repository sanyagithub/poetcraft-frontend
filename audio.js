import Sound from 'react-native-sound';

export const playSound = audioFileName => {
  Sound.setCategory('Playback', true);
  console.log('audio file name', audioFileName);
  const sound = new Sound(audioFileName, error => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
    console.log('Successfully loaded sound:');
    sound.play(success => {
      if (success) {
        console.log('Successfully finished playing');
      } else {
        console.log('Playback failed due to audio decoding errors');
      }
    });
  });
};

export const globalAudioFIles = {
  tapClick: require('./audio/tapclick.mp3'),
  'come_to_me.mp3': require('./audio/come_to_me.mp3'),
  'Like_the_rockweeds.mp3': require('./audio/Like_the_rockweeds.mp3'),
  'empty_and_trembling.mp3': require('./audio/empty_and_trembling.mp3'),
  'Now_when_dying.mp3': require('./audio/Now_when_dying.mp3'),
  'we_re_learning_how_to_scan.mp3': require('./audio/we_re_learning_how_to_scan.mp3'),
  WrongAnswer: require('./audio/WrongAnswer.mp3'),
  CorrectAnswer: require('./audio/CorrectAnswer.mp3'),
  'i_am_happy_1.mp3': require('./audio/i_am_happy_1.mp3'),
  'i_am_happy_2.mp3': require('./audio/i_am_happy_2.mp3'),
  'i_am_happy_3.mp3': require('./audio/i_am_happy_3.mp3'),
  'dog_barks_1.mp3': require('./audio/dog_barks_1.mp3'),
  'dog_barks_2.mp3': require('./audio/dog_barks_2.mp3'),
  'dog_barks_3.mp3': require('./audio/dog_barks_3.mp3'),
  'drink_anything_1.mp3': require('./audio/drink_anything_1.mp3'),
  'drink_anything_2.mp3': require('./audio/drink_anything_2.mp3'),
  'drink_anything_3.mp3': require('./audio/drink_anything_3.mp3'),
  'drink_anything_4.mp3': require('./audio/drink_anything_4.mp3'),
  'eat_dinner_1.mp3': require('./audio/eat_dinner_1.mp3'),
  'eat_dinner_2.mp3': require('./audio/eat_dinner_2.mp3'),
  'eat_dinner_3.mp3': require('./audio/eat_dinner_3.mp3'),
  'eat_dinner_4.mp3': require('./audio/eat_dinner_4.mp3'),
  'snows_a_lot_1.mp3': require('./audio/snows_a_lot_1.mp3'),
  'snows_a_lot_2.mp3': require('./audio/snows_a_lot_2.mp3'),
  'snows_a_lot_3.mp3': require('./audio/snows_a_lot_3.mp3'),
  dropSound: require('./audio/dropSound.mp3'),
  heartbeat: require('./audio/Heartbeat.mp3'),
  wee: require('./audio/wee.mp3'),
};
