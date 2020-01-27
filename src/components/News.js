//@ts-check
import React from 'react'
import ReactDOM from 'react-dom'
import { loadNews } from '../../api/api'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { Divider, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import Image from 'react-native-scalable-image';
import { ScrollView } from 'react-native-gesture-handler';


const CentralizedView = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-top: 20%;
    width: 100%;
    height: 90%;
`


export class News extends React.Component {
    state = {
        loaded: false,
        unmounted: false
    }
    componentDidMount() {
        loadNews().then(data => {
            if (!this.state.unmounted) {
                this.setState({
                    news: data,
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

    clipDescription(description) {
        if (description.length > 120) {
            return description.slice(0, 120) + "..."
        } else {
            return description
        }
    }
  render () {
      if (!this.state.loaded) {
          return <CentralizedView><Text>Loading...</Text></CentralizedView>
      }
    return (
        <CentralizedView>
            <Text style={{fontFamily: "montserrat-extra-bold", fontSize: 30, marginBottom: 15}}>NEWS</Text>
            <ScrollView style={{width: "100%", marginLeft: 20}}>
                {this.state.news.map(news => (
                <Card style={{width: "95%", height: 150, marginBottom: 10}}>
                    <Card.Content>
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
                            <View style={{maxWidth: "70%"}}>
                                <Title style={{ fontSize: 15, lineHeight: 20}}>{news.title}</Title>
                                <Text style={{marginTop: -5, marginBottom: 5, color: 'gray', opacity: 0.5}}>{news.date}</Text>
                            </View>
                            <View style={{height: "100%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start"}}>
                                <Image
                                    width={90}
                                    style={{marginTop: 20, marginLeft: 5}}
                                    source={{ uri: news.imageUrl }}
                                    />
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                ))}
            </ScrollView>
        </CentralizedView>
    )
  }
}