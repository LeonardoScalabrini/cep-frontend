import React, { Component } from 'react'
import Routes from './router'
import { listCep } from './store/actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount () {
    this.props.listCep()
  }

  render () {
    return (
      <div className='app'>
        <Routes/>
      </div>
    )
  }
}

export default connect(null, {listCep})(App)
