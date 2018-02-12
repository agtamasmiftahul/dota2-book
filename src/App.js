import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Heroes from './pages/Heroes'
import Teams from './pages/Teams'
import Navigation from './components/Navigation/Nav-content'

export default class App extends Component {
  render() {
    return (
      <Router>
      <Grid centered columns={1}>
        <Grid.Column>
          <Navigation />
        </Grid.Column>
        <Grid.Column>
          <Route exact path='/' component={Heroes}/>
          <Route path='/hero' component={Heroes}/>
          <Route path='/team' component={Teams}/>
        </Grid.Column>
      </Grid>
      </Router>
    )
  }
}
