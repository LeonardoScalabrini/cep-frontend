import React, { Component } from 'react'

class Cadastrar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      cidade: '',
      cep: ''
    }

    this.cadastrarCep = this.cadastrarCep.bind(this)
  }

  cadastrarCep (e) {
    if (this._cidadeInput.value && this._cepInput.value) {
      let novo = {
        cidade: this._cidadeInput.value,
        cep: this._cepInput.value,
        _id: Date.now()
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novo)
      }
      let url = 'https://correios.free.beeceptor.com/cep'

      fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ cidade: '', cep: '' }))
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.cadastrarCep}>
          <input
            type='text'
            placeholder='Cidade'
            name='cidade'
            value={this.state.cidade}
            onChange={(ev) => this.setState({ cidade: ev.target.value })}
            ref={(event) => this._cidadeInput = event} />
          <input
            type='text'
            placeholder='Cep'
            name='cep'
            value={this.state.cep}
            onChange={(ev) => this.setState({ cep: ev.target.value })}
            ref={(event) => this._cepInput = event} />
          <button type='submit'>
            Adicionar
          </button>
        </form>
      </div>
    )
  }
}

export default Cadastrar
