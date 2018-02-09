import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import DetailButton from './button'

export default class ButtonGroup extends Component {
  render() {
    const { colorLeft, colorCenter, colorRight, textLeft, textCenter, textRight } = this.props
    return (
      <Button.Group>
        <DetailButton color={colorLeft} value={textLeft} />
        <Button.Or />
        <DetailButton color={colorCenter} value={textCenter} />
        <Button.Or />
        <DetailButton color={colorRight} value={textRight} />
      </Button.Group>
    )
  }
}
