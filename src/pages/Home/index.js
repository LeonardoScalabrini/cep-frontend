import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Listar from '../../components/Listar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

class Home extends Component {

  render () {
    return (
      <Container align='center' style={{marginTop: '16px'}}>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant='contained'
            className='add-cep'
            onClick={this.adicionarCep}
            color='primary'>
            <Link to='cadastrar-cep' style={{ color: 'white' }}> Adicionar CEP
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Listar/>
        </Grid>
      </Container>
    )
  }
}

export default Home
