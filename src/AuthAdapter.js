export default class AuthAdapter {
  static logIn = (logInParams) => {
    return fetch('http://localhost:3000/auth', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
      body: JSON.stringify(logInParams)
    }).then(resp => resp.json())
  }

  static currentUser = () => {
    return fetch('http://localhost:3000/auth', {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      },
    }).then(resp => resp.json())
  }

}
