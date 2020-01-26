//@ts-check
import React from 'react'
import ReactDOM from 'react-dom'
import { loadStatistic } from '../../api/mockApi'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { Divider } from 'react-native-paper'

const CentralizedView = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-top: 30%;
    width: 100%;
    height: 80%;
`
const TitleText = styled(Text)`
    font-family: montserrat-bold;
    line-height: 50;
    font-size: 50;
    font-weight: 900;
    display: flex;
`
const CountText = styled(Text)`
    font-family: montserrat-extra-bold;
    font-size: 80;
    font-weight: 900;
    display: flex;
`


class StatisticBlock extends React.Component {
    render() {
        const {title, count, color} = this.props
        return (
        <View style={{maxHeight: 120, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TitleText>{title}</TitleText>
            <CountText style={{color: color}}>{count}</CountText>
        </View>)
    }
}


export class Statistic extends React.Component {
    state = {
        loaded: false,
        unmounted: false
    }
    componentDidMount() {
        loadStatistic().then(data => {
            if (!this.state.unmounted) {
                this.setState({
                    infected: data.infected,
                    died: data.died,
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
      if (!this.state.loaded) {
          return <CentralizedView><Text>Loading...</Text></CentralizedView>
      }
    return (
        <CentralizedView>
            <StatisticBlock color="red" title='INFECTED' count={this.state.infected} />
            <Divider style={{height: 1, width: "100%"}} />
            <StatisticBlock title='DIED' count={this.state.died} />

        </CentralizedView>
    )
  }
}