class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.adapter = new UserAdapter();
    this.fetchAndLoadUser()
  }

  fetchAndLoadUser() {
    this.adapter.getUser(1).then(user => {
      console.log(user)
    })
  }
}