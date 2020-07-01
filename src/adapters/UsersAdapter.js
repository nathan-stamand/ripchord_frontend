class UserAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users/'
  }

  getUser(id) {
    return fetch(this.baseUrl + id).then(res => res.json())
  }

  static attemptCreateUser(username, password) {
    const userData = {
      user: {
        username: username,
        password: password
    }}

    const userObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    }

    return fetch(this.baseUrl, userObj)
    .then((res) => {
      return res.json()
    })
    .then(json => {
      console.log(json)
    })
  }
}