import React, { Component } from 'react'

import 'semantic-ui-css/semantic.min.css';
import {
  Grid,
  Card,
  Icon,
  Image
} from 'semantic-ui-react'

export default class Heroes extends Component {
  render() {
    const { img, name, type, health, mana, str, agi, int, speed } = this.props
    return (
          <Grid.Column>
            <Card fluid>
                <Image src={ img }/>
                <Card.Content>
                  <Card.Header textAlign='center'>
                    { name }
                  </Card.Header>
                  <Card.Meta textAlign='center'>
                    { type }
                  </Card.Meta>
                  <Card.Description>
                    <p>
                      <Icon name='heartbeat'/>
                      <b>health</b> { health }
                    </p>
                    <p>
                      <Icon name='wizard'/>
                      <b>mana</b> { mana }
                    </p>
                    <p>
                      <Icon name='protect'/>
                      <b>strength</b> { str }
                    </p>
                    <p>
                      <Icon name='star'/>
                      <b>agility</b> { agi }
                    </p>
                    <p>
                      <Icon name='thumbs up'/>
                      <b>intelligence</b> { int }
                    </p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='paw'/>
                    { speed }
                  </p>
                </Card.Content>
            </Card>
          </Grid.Column>
    )
  }
}
