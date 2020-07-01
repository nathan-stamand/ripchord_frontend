class App {
  constructor() {
    this.songs = new Songs();
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

    return fetch("http://localhost:3000/api/v1/users", userObj)
    .then((res) => {
      return res.json()
    })
    .then(json => {
      console.log(json)
    })
  }
  
  addCreateUserEventListener() {
    const loginSubmitBtn = document.getElementById("sign-up").querySelector("form").lastElementChild;
    loginSubmitBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const username = document.getElementById("sign-up").querySelector("form").firstElementChild.value;
      const password = document.getElementById("sign-up").querySelector("form").children[3].value;
      App.attemptCreateUser(username, password)
    })
  }
}