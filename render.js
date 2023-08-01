const user = new User();
const inicio = new Inicio();
const registrar = new Registrar();
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (user.validarCredenciales()) {
        document.getElementById("mDiv").innerHTML = '';
    }
})
