const user = new User();
const inicio = new Inicio();
const registrar = new Registrar();
const persona = new Persona();
const vehiculo = new Vehículo();
const barcode = new Barcode();
const loginForm = document.getElementById("loginForm");
const formularioLogin = document.getElementById("loginForm");  
const registrese = document.getElementById("registrese");

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (user.validarCredenciales()) {
        document.getElementById("mDiv").innerHTML = '';
    }
})

registrese.addEventListener('click', () => {
    user.registrese();
});