import { ADD_CEP, LIST_CEP, ERROR_CEP } from './actionTypes'
const url = '/api/v1/cep'

export const addCep = (content) => {
  return dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    }

    fetch(url, requestOptions)
      .then(response => {
        return response.json().then(data => {
          if (response.ok) {
            return dispatch({
              type: ADD_CEP,
              payload: data
            })
          }
          return dispatch({
            type: ERROR_CEP,
            payload: data
          })
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
    fetch(url)
      .then(response => {
        return response.json().then(data => {
          if (response.ok) {
            return dispatch({
              type: LIST_CEP,
              payload: data
            })
          }
          return dispatch({
            type: ERROR_CEP,
            payload: data
          })
        })
      })
      .catch(error => dispatch({
        type: ERROR_CEP,
        payload: error
      }))
  }
}
