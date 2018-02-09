import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import ButtonGroup from './button-group'
import LogoImage from './image'
import TeamLabel from './label'


export default class TableContent extends Component {
  render() {
    const {
      id,
      img,
      name,
      win,
      loss,
      rating,
      tag,
      colorLeft,
      colorCenter,
      colorRight,
      textLeft,
      textCenter,
      textRight
    } = this.props

    return (
      <Table.Row textAlign='center'>
        <Table.Cell>
          {id}
        </Table.Cell>
        <Table.Cell>
          <LogoImage image={img}/>
        </Table.Cell>
        <Table.Cell>
          {name}
        </Table.Cell>
        <Table.Cell positive>
          {win}
        </Table.Cell>
        <Table.Cell negative>
          {loss}
        </Table.Cell>
        <Table.Cell>
          {rating}
        </Table.Cell>
        <Table.Cell>
          <TeamLabel text={tag}/>
        </Table.Cell>
        <Table.Cell>
          <ButtonGroup
            colorLeft={colorLeft}
            colorCenter={colorCenter}
            colorRight={colorRight}
            textLeft={textLeft}
            textCenter={textCenter}
            textRight={textRight}
          />
        </Table.Cell>
      </Table.Row>
    )
  }
}
