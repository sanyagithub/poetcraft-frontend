import Sound from 'react-native-sound';

export const playSound = audioFileName => {
  Sound.setCategory('Playback', true);
  console.log('audio file name', audioFileName);
  const sound = new Sound(audioFileName, '', error => {
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

const BASE_URL = 'https://sanyagithub.github.io/poetcraftaudio/static/audio/';

export const globalAudioFiles = {
  tapClick: `${BASE_URL}tapclick.mp3`,
  'come_to_me.mp3': `${BASE_URL}come_to_me.mp3`,
  'Like_the_rockweeds.mp3': `${BASE_URL}Like_the_rockweeds.mp3`,
  'empty_and_trembling.mp3': `${BASE_URL}empty_and_trembling.mp3`,
  'Now_when_dying.mp3': `${BASE_URL}Now_when_dying.mp3`,
  'we_re_learning_how_to_scan.mp3': `${BASE_URL}we_re_learning_how_to_scan.mp3`,
  WrongAnswer: `${BASE_URL}WrongAnswer.mp3`,
  CorrectAnswer: `${BASE_URL}CorrectAnswer.mp3`,
  'i_am_happy_1.mp3': `${BASE_URL}i_am_happy_1.mp3`,
  'i_am_happy_2.mp3': `${BASE_URL}i_am_happy_2.mp3`,
  'i_am_happy_3.mp3': `${BASE_URL}i_am_happy_3.mp3`,
  'dog_barks_1.mp3': `${BASE_URL}dog_barks_1.mp3`,
  'dog_barks_2.mp3': `${BASE_URL}dog_barks_2.mp3`,
  'dog_barks_3.mp3': `${BASE_URL}dog_barks_3.mp3`,
  'drink_anything_1.mp3': `${BASE_URL}drink_anything_1.mp3`,
  'drink_anything_2.mp3': `${BASE_URL}drink_anything_2.mp3`,
  'drink_anything_3.mp3': `${BASE_URL}drink_anything_3.mp3`,
  'drink_anything_4.mp3': `${BASE_URL}drink_anything_4.mp3`,
  'eat_dinner_1.mp3': `${BASE_URL}eat_dinner_1.mp3`,
  'eat_dinner_2.mp3': `${BASE_URL}eat_dinner_2.mp3`,
  'eat_dinner_3.mp3': `${BASE_URL}eat_dinner_3.mp3`,
  'eat_dinner_4.mp3': `${BASE_URL}eat_dinner_4.mp3`,
  'snows_a_lot_1.mp3': `${BASE_URL}snows_a_lot_1.mp3`,
  'snows_a_lot_2.mp3': `${BASE_URL}snows_a_lot_2.mp3`,
  'snows_a_lot_3.mp3': `${BASE_URL}snows_a_lot_3.mp3`,
  dropSound: `${BASE_URL}dropSound.mp3`,
  heartbeat: `${BASE_URL}Heartbeat.mp3`,
  wee: `${BASE_URL}wee.mp3`,
};
