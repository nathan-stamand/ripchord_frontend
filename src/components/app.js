class App {
  constructor() {
    this.songs = new Songs();
    this.addCreateUserEventListener();
    this.addLoginUserEventListener();
  }

  addCreateUserEventListener() {
    const signUpSubmitBtn = document.getElementById("sign-up").querySelector("form").lastElementChild;
    signUpSubmitBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const username = document.getElementById("sign-up").querySelector("form").firstElementChild.value;
      const password = document.getElementById("sign-up").querySelector("form").children[3].value;
      let user = new User(username, password)
      user.attemptCreateUser()
    })
  }

  addLoginUserEventListener() {
    const loginSubmitBtn = document.getElementById("sign-up").querySelector("form").children[6];
    loginSubmitBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const username = document.getElementById("sign-up").querySelector("form").firstElementChild.value;
      const password = document.getElementById("sign-up").querySelector("form").children[3].value;
      let user = new User(username, password)
      user.attemptLoginUser()
    })
  }
}