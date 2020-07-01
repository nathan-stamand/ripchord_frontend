class UserAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users/'
  }

  createUser(username, password) {
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
    .then(resp => resp.json())
  }


  loginUser(username, password) {
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

    return fetch(this.baseUrl + 'login', userObj)
    .then(resp => resp.json())
  }
}