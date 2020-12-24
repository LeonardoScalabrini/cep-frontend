import React from 'react'
import { connect } from 'react-redux'
import { ceps } from '../../store/selectors'

const Listar = ({ceps}) => (
  <div>
    <ul className='ceps-list'>
      {ceps && ceps.length > 0 ? ceps.map((item) => {
         return (
           <li key={item._id}>
             {item.cidade + ' ' + item.cep}
           </li>
         )
       }) : 'Não há nenhum CEP cadastrado!'}
    </ul>
  </div>
)

export default connect(ceps)(Listar)
