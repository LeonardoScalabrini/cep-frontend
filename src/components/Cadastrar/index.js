import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCep } from '../../store/actions'

class Cadastrar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      cidade: '',
      cep: ''
    }

    this.adicionarCep = this.adicionarCep.bind(this)
  }

  adicionarCep (e) {
    let cep = {
      cidade: this._cidadeInput.value,
      cep: this._cepInput.value,
      _id: Date.now()
    }
    this.props.addCep(cep)
    this.setState({ cidade: '', cep: '' })
  }

  render () {
    return (
      <div>
        <Link to='/'> Voltar
        </Link>
        <input
          type='text'
          placeholder='Cidade'
          name='cidade'
          value={this.state.cidade}
          onChange={(ev) => this.setState({ cidade: ev.target.value })}
          ref={(event) => this._cidadeInput = event} />
        <input
          type='text'
          placeholder='CEP'
          name='cep'
          value={this.state.cep}
          onChange={(ev) => this.setState({ cep: ev.target.value })}
          ref={(event) => this._cepInput = event} />
        <button className='add-cep' onClick={this.adicionarCep}>
          Adicionar CEP
        </button>
      </div>
    )
  }
}

export default connect(null, {addCep})(Cadastrar)
