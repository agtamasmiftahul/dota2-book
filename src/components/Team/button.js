import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class DetailButton extends Component {
  render() {
    const { color, value } = this.props
    return (
      <Button color={color}>{value}</Button>
    )
  }
}
