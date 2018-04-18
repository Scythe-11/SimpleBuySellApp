import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdvertsList from './components/AdvertsList'
import AdvertDetails from './components/AdvertDetails'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/adverts" component={AdvertsList} />
          <Route exact path="/adverts/:id" component={AdvertDetails} />
          <Route exact path="/" render={ () => <Redirect to="/adverts" /> } />
        </div>
      </Router>
    )
  }
}


export default App;
