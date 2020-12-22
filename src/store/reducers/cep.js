import { ADD_CEP } from '../actionTypes.js'

const initialState = {
  ceps: []
}

export default function addCep (state = initialState , action) {
  console.log(action)
  switch (action.type) {
    case ADD_CEP: {
      state.ceps = [...state.ceps, action.payload]
      return state
    }
    default:
      return state
  }
}
