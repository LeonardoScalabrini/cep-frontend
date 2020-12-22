import { ADD_CEP, LIST_CEP, ERROR_CEP } from './actionTypes'

export const addCep = (content) => {
  return dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    }

    let url = 'https://correios.free.beeceptor.com/cep'

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ADD_CEP,
          payload: data
        })
      })
      .catch(error => dispatch({
        type: ERROR_CEP,
        payload: error
      }))
  }
}

export const listCep = () => {
  return dispatch => {
    let url = 'https://correios.free.beeceptor.com/ceps'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: LIST_CEP,
          payload: data
        })
      })
      .catch(error => dispatch({
        type: ERROR_CEP,
        payload: error
      }))
  }
}
