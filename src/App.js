import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Heroes from './pages/Heroes'
import Teams from './pages/Teams'
import Navigation from './components/Navigation/Nav-content'
import Home from './pages/Home'

import './lib/css/style.css'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Grid centered columns={1}>
        <Grid.Column className='paddingBottom'>
          <Navigation />
        </Grid.Column>
        <Grid.Column className='paddingTop'>
          <Route exact path='/' component={Home}/>
          <Route path='/hero' component={Heroes}/>
          <Route path='/team' component={Teams}/>
        </Grid.Column>
      </Grid>
      </Router>
    )
  }
}
