export default class AuthAdapter {
  static logIn = (params) => {
    return fetch('http://localhost:3000/api/v1/auth', {
      method: 'post',
      body: JSON.stringify(params)
    }).then(resp => resp.json())
  }

  static currentUser = () => {
    return fetch('http://localhost:3000/api/v1/me', {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
    }).then(resp => resp.json())
  }

}
