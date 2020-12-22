import React from 'react'
import { connect } from 'react-redux'
import { listarCeps } from '../../store/selectors'

const Listar = ({ceps}) => (
  <div>
    <ul className='ceps-list'>
      {ceps && ceps.length ? ceps.map((item) => {
         return (
           <li key={item._id}>
             {item.cidade + ' ' + item.cep}
           </li>
         )
       }) : 'Não há nenhum CEP cadastrado!'}
    </ul>
  </div>
)

export default connect(listarCeps)(Listar)
