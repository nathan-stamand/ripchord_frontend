class UserAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users/'
  }

  getUser(id) {
    return fetch(this.baseUrl + id).then(res => res.json())
  }
}