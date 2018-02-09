import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Table } from 'semantic-ui-react'

import Teams from '../components/Team'

const API_URL = 'https://api.opendota.com'

export default class TeamsPage extends Component {
  state = {
    teams: []
  }

  componentDidMount() {
    axios.get(`${API_URL}/api/teams`)
      .then(res => {
        const teams = res.data;
        this.setState({ teams });
      })
  }

  render() {
    return (
      <Grid centered columns={1} striped={true} padded>
        <Grid.Column>
          <Table color='blue' key='blue' inverted>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>
                  ID
                </Table.HeaderCell>
                <Table.HeaderCell>
                  LOGO
                </Table.HeaderCell>
                <Table.HeaderCell>
                  NAME
                </Table.HeaderCell>
                <Table.HeaderCell>
                  WINS
                </Table.HeaderCell>
                <Table.HeaderCell>
                  LOSSES
                </Table.HeaderCell>
                <Table.HeaderCell>
                  RATING
                </Table.HeaderCell>
                <Table.HeaderCell>
                  TAG
                </Table.HeaderCell>
                <Table.HeaderCell>
                  DETAILS
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
          { this.state.teams.map(team =>
            <Teams
              id={ team.team_id }
              img={ team.logo_url }
              name={ team.name }
              win={ team.wins }
              loss={ team.losses }
              rating={ team.rating }
              tag={ team.tag }
            />
          ) }
        </Table.Body>
      </Table>
    </Grid.Column>
      </Grid>
    )
  }
}
