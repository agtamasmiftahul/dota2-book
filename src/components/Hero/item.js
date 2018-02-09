import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class Item extends Component {
  render() {
    const {
      icon,
      text,
      value
    } = this.props
    
    return (
      <p>
        <Icon name={icon}/>
        <b>{text}</b> {value}
      </p>
    )
  }
}
