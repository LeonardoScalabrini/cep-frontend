import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { getCep } from '../api'
import { LIST_CEP } from './actionTypes'

const store = createStore(rootReducer, applyMiddleware(thunk))

getCep().then((r) => {
  store.dispatch({
    type: LIST_CEP,
    payload: r
  })
})

export default store
