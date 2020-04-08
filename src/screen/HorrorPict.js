import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
// import { Button, Text } from 'native-base';

const HorrorPict = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../public/assets/ghost.jpg')}
        style={styles.image}
      />
    </View>
  );
};

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
