const url = '/api/v1/cep'

export const addCep = (content) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content)
  }

  return fetch(url, requestOptions)
    .then(response => {
      return response.json().then(data => {
        return data
      })
    })
}

export const getCep = () => {
  return fetch(url)
    .then(response => {
      return response.json().then(data => {
        return data
      })
    })
}
