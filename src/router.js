import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Cadastrar from './components/Cadastrar'
import Home from './pages/Home'
import Erro from './pages/Erro'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cadastrar-cep' component={Cadastrar} />
        <Route path='*' component={Erro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
