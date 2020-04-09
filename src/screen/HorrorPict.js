import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
// import { Button, Text } from 'native-base';
const Sound = require('react-native-sound');

class HorrorPict extends Component {
  componentDidMount() {
    const sound = new Sound('scream.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        return;
      }
      sound.play();
    });
    // The play dispatcher
    sound
      .setVolume(1)
      .setPan(1)
      .play();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../public/assets/ghost.jpg')}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default HorrorPict;
