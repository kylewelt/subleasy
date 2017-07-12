export default class SubletsAdapter {
  static getSublets = () => {
    return fetch(
      'http://localhost:3000/api/v1/sublets'
    ).then(resp => resp.json())
  }
}
