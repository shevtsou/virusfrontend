//@ts-check
import React from 'react'
import { View, StyleSheet,Dimensions  } from 'react-native'
import styled from 'styled-components'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Surface, Text } from 'react-native-paper';
import Image from 'react-native-scalable-image';
import { loadStatistic, loadInfectionPerCountry } from '../../api/mockApi';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const StyledView = styled(View)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const ImageView = styled(View)`
  box-shadow: 20px 20px 20px #000000;
  margin-top: 60px;
  margin-bottom: 10px;
`
const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export class SpreadMap extends React.Component {

  state = {
    loaded: false,
    unmounted: false,
    countries: []
  }

  componentDidMount() {
    loadInfectionPerCountry().then(data => {
      if (!this.state.unmounted) {
        this.setState({
          countries: data,
          loaded: true
        })
      }
    })
  }

  componentWillUnmount() {
    this.setState({
        unmounted: true
    })
  }

  render () {
    const { countries, loaded} = this.state
    if (!loaded) {
      return (
        <Text>Loading...</Text>
      )
    }
    return (
      <ScrollView>
        <StyledView>
          <ImageView>
            <Image
              width={screenWidth - 45}
              source={require('../../assets/evil.png')}
            />
          </ImageView>
            {countries.map((country => (
              <Card style={{height: 100, width: "90%", marginBottom: 10}}>
                <Card.Content>
                  <Paragraph>{country.country}</Paragraph>
                  <Title style={{marginTop: 5}}>{country.count} infected</Title>
                </Card.Content>
              </Card>
            )))}
        </StyledView>
      </ScrollView>
    )
  }
}