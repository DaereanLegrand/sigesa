const user = new User();
const inicio = new Inicio();
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (user.validarCredenciales()) {
        document.getElementById("mDiv").innerHTML = '';
    }
})
