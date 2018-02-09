import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export default class DetailHeader extends Component {
  render() {
    const {
      icon,
      text
    } = this.props
    return (
      <Header icon={icon} content={text} />
    )
  }
}
