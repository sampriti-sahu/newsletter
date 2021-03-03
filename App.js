import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/JokeScreen';
import FactScreen from './screens/FactScreen';
import NumberScreen from './screens/NumberScreen';
import ImageScreen from './screens/ImageScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Container />
      </View>
    );
  }
}

let navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  FactScreen: FactScreen,
  NumberScreen: NumberScreen,
  ImageScreen: ImageScreen,
});

const Container = createAppContainer(navigator);
