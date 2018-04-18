import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdvertsList from './components/advertsList'
import AdvertDetails from './components/advertDetails'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const adverts = [
  {
    id: 1,
    title: 'Handbag',
    price: 1450
  },
  {
    id: 5,
    title: 'Heater',
    price: 550
  }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/adverts" component={AdvertsList} />
          <Route exact path="/products/:id" component={AdvertDetails} />
          <Route exact path="/" render={ () => <Redirect to="/adverts" /> } />
        </div>
      </Router>
    )
  }
}


export default App;
