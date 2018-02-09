import React, { Component } from 'react'
import axios from 'axios'
import { Grid } from 'semantic-ui-react'

import Heroes from '../components/Hero/Card-content'

const API_URL = 'https://api.opendota.com'

export default class HeroesPage extends Component {
  state = {
    heroes: []
  }

  componentDidMount() {
    axios.get(`${API_URL}/api/heroStats`)
      .then(res => {
        const heroes = res.data;
        this.setState({ heroes });
      })
  }

  render() {
    return (
      <Grid centered columns={5} padded>
          { this.state.heroes.map(hero =>
            <Heroes
              img={`${API_URL}${hero.img}`}
              name={ hero.localized_name }
              type={ hero.attack_type }
              health={ hero.base_health }
              mana={ hero.base_mana }
              str={ hero.base_str }
              agi={ hero.base_agi }
              int={ hero.base_int }
              speed={ hero.move_speed }
            />
          ) }
      </Grid>
    )
  }
}
