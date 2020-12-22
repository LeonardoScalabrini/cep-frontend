import React, { Component } from 'react'

class Listar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ceps: []
    }
    this.listarCeps = this.listarCeps.bind(this)
  }

  componentDidMount () {
    this.listarCeps()
  }

  listarCeps () {
    let url = 'https://correios.free.beeceptor.com/ceps'
    fetch(url).then((r) => r.json())
      .then((json) => {
        let state = this.state
        state.ceps = json
        this.setState(state)
      })
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.ceps.map((item) => {
             return (
               <li key={item._id}>
                 {item.cidade + ' ' + item.cep}
               </li>
             )
           })}
        </ul>
      </div>
    )
  }
}

export default Listar
