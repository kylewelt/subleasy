export default class SubletsAdapter {
  static getSublets = () => {
    return fetch(
      'http://localhost:3000/api/v1/sublets'
    ).then(resp => resp.json())
  }

  static createSublet = (params) => {
    return fetch('http://localhost:3000/api/v1/sublets', {
      method: 'post',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    }).then(resp => resp.json())
  }
}
