import { ADD_CEP, LIST_CEP, ERROR_CEP } from '../actionTypes.js'

const initialState = {
  ceps: []
}

export default function reducer (state = initialState , action) {
  switch (action.type) {
    case ADD_CEP: {
      state.ceps = [...state.ceps, action.payload]
      return state
    }
    case LIST_CEP: {
      state.ceps = [...state.ceps, action.payload]
      return state
    }
    case ERROR_CEP: {
      alert(action.payload)
      return state
    }
    default:
      return state
  }
}
