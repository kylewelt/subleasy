export default class UsersAdapter {
  static createUser = (params) => {
    return fetch('http://localhost:3000/api/v1/users', {
      method: 'post',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then(resp => resp.json())
  }

  static getUser = (id) => {
    return fetch(`http://localhost:3000/api/v1/users/${id}`, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    }).then(resp => resp.json())
  }

}
