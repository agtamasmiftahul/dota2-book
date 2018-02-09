import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Meta extends Component {
  render() {
    const { type } = this.props
    
    return (
      <Card.Meta textAlign='center'>
        {type}
      </Card.Meta>
    )
  }
}
