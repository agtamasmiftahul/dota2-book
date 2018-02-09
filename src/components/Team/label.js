import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'

export default class TeamLabel extends Component {
  render() {
    const { text } = this.props
    return (
      <Label tag>{text}</Label>
    )
  }
}
