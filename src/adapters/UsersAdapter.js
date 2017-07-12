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

}
