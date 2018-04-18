import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdvertsList from './components/advertsList'
import AdvertDetails from './components/advertDetails'

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
      <div>
        <AdvertsList adverts={ adverts } />
        <AdvertDetails adverts={ adverts[0] } />
      </div>
    )
  }
}


export default App;
