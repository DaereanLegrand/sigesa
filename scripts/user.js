class User {
    constructor() {}

    validarCredenciales() {
        this.user = document.getElementById("user").value;
        this.pass = document.getElementById("pass").value;

        fetch("https://localhost:8080/login", {
            method: "POST",
            body: JSON.stringify({ usuario: this.user, contraseña: this.pass}),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data[0].count != 0) {
                    document.getElementById("mDiv").innerHTML = '';
                    return true;
                } else {
                    return false;
                }
            });
    }
}
