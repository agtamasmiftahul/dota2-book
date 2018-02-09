import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class ButtonDetail extends Component {
  render() {
    const {
      text,
      icon
    } = this.props
    return (
      <Button icon labelPosition='right' fluid positive >
        {text}
        <Icon name={icon} />
      </Button>
    )
  }
}
