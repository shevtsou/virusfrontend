//@ts-check
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Appbar } from 'react-native-paper';
import { BottomNavigation, Text } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import * as Font from 'expo-font';

const MusicRoute = () => <Text>Music</Text>;

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
    top: 24,
  },
});

class Layout extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'statistic', title: 'Statistic', icon: 'signal' },
      { key: 'albums', title: 'Albums', icon: 'album' },
    ],
    fontLoaded: false,
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    statistic: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  componentDidMount() {
    Font.loadAsync({
      "montserrat": require('./assets/fonts/montserrat.ttf'),
    }).then(()=> this.setState({fontLoaded: true}))
  }

  render() {
    return (
      <>
        <Appbar style={styles.bottom}>
          {this.state.fontLoaded ? <Text style={{fontFamily: 'montserrat', fontSize: 20, marginLeft: 10}}>China Virus</Text> : <Text>Loading</Text>}
          
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

