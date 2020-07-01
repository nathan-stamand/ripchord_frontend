class App {
  constructor() {
    this.songs = new Songs();
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