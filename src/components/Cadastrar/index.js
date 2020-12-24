import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCep } from '../../store/actions'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

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
      cidade: this.cidadeInput.value,
      cep: this.cepInput.value
    }
    this.props.addCep(cep)
    this.setState({ cidade: '', cep: '' })
  }

  render () {
    return (
      <Container align='center'>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='cidadeInput'
            fullWidth
            variant='outlined'
            margin='normal'
            type='text'
            label='Cidade'
            name='cidade'
            value={this.state.cidade}
            onChange={event => {
                        const { value } = event.target
                        this.setState({ cidade: value })
                      }}
            inputRef={(ev) => {
                        this.cidadeInput = ev
                      }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='cepInput'
            fullWidth
            variant='outlined'
            margin='normal'
            label='CEP'
            name='cep'
            value={this.state.cep}
            onChange={event => {
                        const { value } = event.target
                        this.setState({ cep: value })
                      }}
            inputRef={(ev) => {
                        this.cepInput = ev
                      }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant='contained'
            className='add-cep'
            onClick={this.adicionarCep}
            color='primary'>
            Adicionar CEP
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button fullWidth className='cancel-cep' color='inherit'>
            <Link to='/'> Cancelar
            </Link>
          </Button>
        </Grid>
      </Container>
    )
  }
}

export default connect(null, {addCep})(Cadastrar)
