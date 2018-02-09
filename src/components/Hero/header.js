import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    const { name } = this.props
    return (
      <Card.Header textAlign='center'>
        {name}
      </Card.Header>
    )
  }
}
