const user = new User();
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log("Hi");
    if (user.validarCredenciales()) {
        document.getElementById("mDiv").innerHTML = '';
    }
})
