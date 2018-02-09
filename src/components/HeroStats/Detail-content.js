import React, { Component } from 'react'
import { Button,Modal } from 'semantic-ui-react'

import Header from './header'
import Item from './item'

export default class DetailContent extends Component {
  render() {
    return (
      <Modal trigger={<Button>Detail</Button>} closeIcon>
        <Header icon='archive' text='Hero Detail' />
        <Item content='You choose hero'/>
      </Modal>
    )
  }
}
