//@ts-check
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { BottomNavigation, Text } from 'react-native-paper';
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

class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'statistic', title: 'Statistic', icon: 'signal' },
      { key: 'albums', title: 'Albums', icon: 'album' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    statistic: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        shifting={true}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MyComponent />
    </PaperProvider>
  );
}

