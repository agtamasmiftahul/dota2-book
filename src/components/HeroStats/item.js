import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

export default class DetailItem extends Component {
  render() {
    const { content } = this.props
    return (
      <Modal.Content>
        <p>{content}</p>
      </Modal.Content>
    )
  }
}
