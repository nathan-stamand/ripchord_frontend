class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.adapter = new UserAdapter();
  }

  attemptCreateUser() {
    this.adapter.createUser(this.username, this.password).then(user => {
      console.log(user)
    })
  }

  attemptLoginUser() {
    this.adapter.loginUser(this.username, this.password).then(user => {
      console.log(user)
    })
  }
}