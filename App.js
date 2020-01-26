//@ts-check
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Appbar } from 'react-native-paper';
import { BottomNavigation, Text } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import * as Font from 'expo-font';
import { Statistic } from './src/components/Statistic';
import { SpreadMap } from './src/components/SpreadMap';
import { News } from './src/components/News';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFB',
    accent: '#f1c40f',
  },
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});

class Layout extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'statistic', title: 'Statistic', icon: 'signal' },
      { key: 'map', title: 'Map', icon: 'map' },
      { key: 'news', title: 'News', icon: 'clipboard-pulse-outline' },
    ],
    fontLoaded: false,
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    statistic: Statistic,
    map: SpreadMap,
    news: News
  });

  componentDidMount() {
    Font.loadAsync({
      "montserrat-bold": require('./assets/fonts/Montserrat-Bold.ttf'),
      "montserrat-extra-bold": require('./assets/fonts/Montserrat-ExtraBold.ttf'),
      "montserrat-semi-bold": require('./assets/fonts/Montserrat-SemiBold.ttf'),
    }).then(()=> this.setState({fontLoaded: true}))
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Text>'Loading...'</Text>
    }
    return (
      <>
        <StatusBar hidden={true} />
        <Appbar style={styles.bottom}>
          {this.state.fontLoaded ? <Text style={{fontFamily: 'montserrat-bold', fontSize: 20, marginLeft: 10}}>China Virus</Text> : <Text>Loading</Text>}
          
        </Appbar>
        <BottomNavigation
          shifting={true}
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </>
    );
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Layout />
    </PaperProvider>
  );
}

