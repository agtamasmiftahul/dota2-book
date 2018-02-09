import React, { Component } from 'react'

import 'semantic-ui-css/semantic.min.css';
import {
  Grid,
  Card,
  Image,
} from 'semantic-ui-react'

import Header from './header'
import Meta from './meta'
import Description from './description'
import Item from './item'
import ButtonDetail from './button-detail'
import HeroDetail from '../HeroStats/Detail-content'

export default class CardContent extends Component {
  render() {
    const {
      img,
      name,
      type,
      health,
      mana,
      str,
      agi,
      int,
      speed,
    } = this.props

    return (
      <Grid.Column>
        <Card fluid>
          <Image src={img}/>
          <Card.Content>
            <Header name={name}/>
            <Meta type={type}/>
            <Description
              health = {health}
              mana = {mana}
              str = {str}
              agi = {agi}
              int = {int}
              speed = {speed}
            />
          </Card.Content>
          <Card.Content extra>
          <HeroDetail />
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}
