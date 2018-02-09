import React, { Component } from 'react'

import 'semantic-ui-css/semantic.min.css';
import {
  Table,
  Label,
  Image
} from 'semantic-ui-react'

import Navigation from './navigation'

export default class Teams extends Component {
  render() {
    const { img, id, rating, win, loss, name, tag } = this.props
    return (
                <Table.Row textAlign='center'>
                  <Table.Cell>
                    { id }
                  </Table.Cell>
                  <Table.Cell>
                    <Image src={ img } size='mini'/>
                  </Table.Cell>
                  <Table.Cell>
                    { name }
                  </Table.Cell>
                  <Table.Cell positive>
                    <b>{ win }</b>
                  </Table.Cell>
                  <Table.Cell negative>
                    <b>{ loss }</b>
                  </Table.Cell>
                  <Table.Cell>
                    { rating }
                  </Table.Cell>
                  <Table.Cell>
                    <Label tag>
                      { tag }
                    </Label>
                  </Table.Cell>
                  <Navigation/>
                </Table.Row>

    )
  }
}
