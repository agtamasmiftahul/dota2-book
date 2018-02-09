import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

import Item from './item'

export default class Description extends Component {
  render() {
    const {
      health,
      mana,
      str,
      agi,
      int
    } = this.props

    return (
      <Card.Description>
        <Item
          icon='heartbeat'
          text='health'
          value={health}
        />
        <Item
          icon='wizard'
          text='mana'
          value={mana}
        />
        <Item
          icon='protect'
          text='strength'
          value={str}
        />
        <Item
          icon='star'
          text='agility'
          value={agi}
        />
        <Item
          icon='thumbs up'
          text='intelligence'
          value={int}
        />
      </Card.Description>
    )
  }
}
