import React, { Component } from 'react'
import { Image, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavContent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted basic>
        <Menu inverted pointing secondary>
          <Menu.Menu position='left'>
            <Image src='/images/favicon/dota.png' fluid/>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Link to='/'><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
            <Link to='/hero'><Menu.Item name='hero' active={activeItem === 'hero'} onClick={this.handleItemClick} /></Link>
            <Link to='/team'><Menu.Item name='team' active={activeItem === 'team'} onClick={this.handleItemClick} /></Link>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
