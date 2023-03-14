import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Constants from 'expo-constants';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Button} from 'react-native-paper';

const formatTime = timeInSeconds => {
  const hours = Math.floor(timeInSeconds / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export default function AlarmScreen() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hours, setHours] = React.useState('');
  const [minutes, setMinutes] = React.useState('');
  const [duration, setDuration] = React.useState(0); // updated default value to zero
  const [resetKey, setResetKey] = React.useState(0);

  const handleHoursChange = text => {
    setHours(text);
  };

  const handleMinutesChange = text => {
    setMinutes(text);
  };

  const startSession = () => {
    if (hours != '' && minutes != '') {
      const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
      setDuration(totalSeconds);
      setIsPlaying(true);
    }
  };

  const resetTimer = () => {
    setIsPlaying(false);
    setHours('');
    setMinutes('');
    setResetKey(resetKey + 1);
    setDuration(0); // set duration to zero when reset is pressed
  };

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        key={resetKey}
        isPlaying={isPlaying}
        duration={duration}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[60, 30, 10, 0]}
        onComplete={() => {
          return [
            {shouldRepeat: false, delay: 2000},
            () => alert('Session Complete!'),
          ];
        }}
        updateInterval={0}>
        {({remainingTime}) => (
          <Text style={{fontSize: 30}}>{formatTime(remainingTime)}</Text>
        )}
      </CountdownCircleTimer>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={handleHoursChange}
            value={hours}
            placeholder="HH"
            keyboardType="numeric"
            editable={!isPlaying}
            maxLength={2}
            textAlign="center"
          />
          <Text style={{fontSize: 30}}>:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleMinutesChange}
            value={minutes}
            placeholder="MM"
            keyboardType="numeric"
            editable={!isPlaying}
            maxLength={2}
            textAlign="center"
          />
        </View>
      </View>
      <Button onPress={startSession} mode="">
        Start Session
      </Button>
      <Button onPress={resetTimer}>Reset Timer</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0e0e0e',
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    fontSize: 20,
    width: 80,
    textAlign: 'center',
  },
});
