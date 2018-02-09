import React, { Component } from 'react'
import axios from 'axios'

import 'semantic-ui-css/semantic.min.css';
import {
  Grid,
  Card,
  Icon,
  Image
} from 'semantic-ui-react'

const API_URL = 'https://api.opendota.com'

export default class Team extends Component {
  state = {
    heroes: []
  }

  componentDidMount() {
    axios.get(`${API_URL}/api/teams`)
      .then(res => {
        const heroes = res.data;
        this.setState({ heroes });
      })
  }

  render() {
    return (
      <Grid centered columns={4} padded>
          { this.state.heroes.map(hero =>
          <Grid.Column>
            <Card fluid>
                <Image src={`${API_URL}${hero.img}`}/>
                <Card.Content>
                  <Card.Header textAlign='center'>
                    { hero.localized_name }
                  </Card.Header>
                  <Card.Meta textAlign='center'>
                    { hero.attack_type }
                  </Card.Meta>
                  <Card.Description>
                    <p>
                      <Icon name='heartbeat'/>
                      <b>health</b> { hero.base_health }
                    </p>
                    <p>
                      <Icon name='wizard'/>
                      <b>mana</b> { hero.base_mana }
                    </p>
                    <p>
                      <Icon name='protect'/>
                      <b>strength</b> { hero.base_str }
                    </p>
                    <p>
                      <Icon name='star'/>
                      <b>agility</b> { hero.base_agi }
                    </p>
                    <p>
                      <Icon name='thumbs up'/>
                      <b>intelligence</b> { hero.base_int }
                    </p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p>
                    <Icon name='paw'/>
                    { hero.move_speed }
                  </p>
                </Card.Content>
            </Card>
          </Grid.Column>
          ) }
      </Grid>
    )
  }
}
