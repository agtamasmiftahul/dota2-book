import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Table } from 'semantic-ui-react'

import TABLEHEADER from '../components/Team/Table-header'
import TableContent from '../components/Team/Table-content'

const API_URL = 'https://api.opendota.com'

export default class TeamsPage extends Component {
  state = {
    teams: []
  }

  componentWillMount() {
    axios.get(`${API_URL}/api/teams`)
      .then(res => {
        this.setState({
          teams : res.data
        })
      })
  }

  render() {
    return (
      <Grid centered columns={1} striped={true} padded>
        <Grid.Column>
          <Table color='blue' key='blue' inverted>
            <Table.Header>
              <Table.Row textAlign='center'>
              { TABLEHEADER.map(HEADER =>
                <Table.HeaderCell>
                  {HEADER.name}
                </Table.HeaderCell>
              ) }
              </Table.Row>
            </Table.Header>
            <Table.Body>
            { this.state.teams.map(team =>
              <TableContent
                id={ team.team_id }
                img={ team.logo_url }
                name={ team.name }
                win={ team.wins }
                loss={ team.losses }
                rating={ team.rating }
                tag={ team.tag }
                colorLeft='red'
                colorCenter='yellow'
                colorRight='green'
                textLeft='Matches'
                textCenter='Heroes'
                textRight='Players'
              />
            ) }
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    )
  }
}
