import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

export default class LogoImage extends Component {
  render() {
    const { image } = this.props
    return (
      <Image src={image} size='mini'/>
    )
  }
}
