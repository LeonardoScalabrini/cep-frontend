import React from 'react'
import { connect } from 'react-redux'
import { ceps } from '../../store/selectors'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const Listar = ({ceps}) => (
  <Table className='ceps-list'>
    <TableHead>
      <TableRow>
        <TableCell>
          Cidade
        </TableCell>
        <TableCell>
          CEP
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {ceps.map((item) => {
         return (
           <TableRow key={item._id}>
             <TableCell>
               {item.cidade}
             </TableCell>
             <TableCell>
               {item.cep}
             </TableCell>
           </TableRow>
         )
       })}
    </TableBody>
  </Table>
)

export default connect(ceps)(Listar)
