import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'

export default class Navigation extends Component {
  render() {
    return (
      <Table.Cell>
        <Button.Group>
          <Button color='yellow'>Matches</Button>
          <Button.Or />
          <Button color='olive'>Heroes</Button>
          <Button.Or />
          <Button color='green'>Players</Button>
        </Button.Group>
      </Table.Cell>
    )
  }
}
