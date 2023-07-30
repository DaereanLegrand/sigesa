class User {
    constructor() {}

    validarCredenciales() {
        this.user = document.getElementById("user").value;
        this.pass = document.getElementById("pass").value; // HASH NEEDED

        fetch("https://localhost:8080/login", {
            method: "POST",
            body: JSON.stringify({ usuario: this.user, contraseña: this.pass}),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data[0].count != 0) {
                    document.getElementById("mDiv").innerHTML = '';

                    var menu = new Menu;
                    document.getElementById("mDiv").appendChild(menu.showMenu());
                    
                    return true;
                } else {
                    return false;
                }
            });
    }
}
