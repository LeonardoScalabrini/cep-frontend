import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Listar from '../../components/Listar'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Link to='cadastrar-cep'>Adicionar CEP</Link>
        <br/>
        <Listar/>
      </div>
    )
  }
}

export default Home
