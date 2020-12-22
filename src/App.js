import React, { Component } from 'react'
import Routes from './router'
import './global.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Routes/>
      </div>
    )
  }
}

export default App
