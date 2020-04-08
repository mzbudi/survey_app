import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import styles from '../public/utils/styles';

const HomeScreen = props => {
  return (
    <ImageBackground
      source={require('../public/assets/covid19.png')}
      style={styles.bgImage}>
      <View style={styles.homeFlexerHeader}>
        <Button
          disabled
          iconLeft
          block
          transparent
          onPress={() => {
            props.navigation.navigate('Menu');
          }}>
          <Icon
            type="Entypo"
            name="warning"
            size={20}
            style={{ ...{ color: 'red' } }}
          />
          <Text style={[styles.bold, { ...{ color: 'red' } }]}>
            Bersatu Kita Lawan Covid - 19
          </Text>
        </Button>
      </View>
      <View style={styles.homeFlexerFooter}>
        <Button
          iconLeft
          block
          onPress={() => {
            props.navigation.navigate('Menu');
          }}>
          <Icon type="Entypo" name="book" size={20} />
          <Text>Mulai Survey</Text>
        </Button>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
