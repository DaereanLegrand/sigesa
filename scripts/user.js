class User {
    constructor() {}

    validarCredenciales() {
        this.user = document.getElementById("user").value;
        this.pass = document.getElementById("pass").value; // HASH NEEDED

        fetch("https://localhost:8080/login", {
            method: "POST",
            body: JSON.stringify({ usuario: this.user, contraseña: this.pass }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    if (data[0].tipo == "admin") {
                        document.getElementById("mDiv").innerHTML = "";

                        var menu = new Menu();
                        document
                            .getElementById("mDiv")
                            .appendChild(menu.showMenuAdmin());

                        return true;
                    } else if (data[0].tipo == "usuario") {
                        document.getElementById("mDiv").innerHTML = "";

                        var menu = new Menu();
                        document
                            .getElementById("mDiv")
                            .appendChild(menu.showMenuUsuario());

                        return true;
                    }
                } else {
                    window.api.dialog(
                        "Error",
                        "Las credenciales ingresadas no son válidas."
                    );
                    return false;
                }
            });
    }

    registrese(contentDiv) {
        const index = document.getElementById("loginDiv");
        const buttonRegistrese = document.getElementById("registrese");
        const formularioLogin = document.getElementById("loginForm");
        const formularioRegistrar = document.createElement("form");
        formularioRegistrar.className = "login-form";

        const entradaCIP = document.createElement("input");
        entradaCIP.type = "text";
        entradaCIP.id = "cip";
        entradaCIP.className = "login-input";
        entradaCIP.placeholder = "CIP";

        const password1 = document.createElement("input");
        password1.type = "password";
        password1.id = "pass";
        password1.className = "login-input";
        password1.placeholder = "Contraseña";

        const passwordVerificar = document.createElement("input");
        passwordVerificar.type = "password";
        passwordVerificar.className = "login-input";
        passwordVerificar.placeholder = "Verificar Contraseña";

        const btnCrearUsuario = document.createElement("button");
        btnCrearUsuario.id = "btnCrearUsuario";
        btnCrearUsuario.className = "registrar-submit";
        btnCrearUsuario.innerText = "Crear Usuario";

        index.removeChild(formularioLogin);
        index.removeChild(buttonRegistrese);

        const btnVolver = document.createElement("button");
        btnVolver.id = "btnVolver";
        btnVolver.className = "registrar-submit";
        btnVolver.innerText = "Volver";

        formularioRegistrar.appendChild(entradaCIP);
        formularioRegistrar.appendChild(password1);
        formularioRegistrar.appendChild(passwordVerificar);
        formularioRegistrar.appendChild(btnVolver);
        formularioRegistrar.appendChild(btnCrearUsuario);

        index.appendChild(formularioRegistrar);
        index.appendChild(btnVolver);

        btnCrearUsuario.addEventListener("click", (event) => {
            event.preventDefault();
            if (password1.value == passwordVerificar.value) {
                console.log("asada");
                fetch("https://localhost:8080/registrarUsuario", {
                    method: "POST",
                    body: JSON.stringify({
                        cip: document.getElementById("cip").value,
                        contraseña: document.getElementById("pass").value,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data != null) {
                            if (data.success == true) {
                                window.api.dialog(
                                    "Exito",
                                    "La persona fue registrada correctamente."
                                );
                            } else if (data.success == false) {
                                window.api.dialog(
                                    "Error",
                                    `ERROR: ${data.error}`
                                );
                            }
                        }
                    });
            } else {
                window.api.dialog("Error", "Las contraseñas no coinciden");
            }
        });

        btnVolver.addEventListener("click", () => {
            index.removeChild(formularioRegistrar);
            index.removeChild(btnVolver);
            index.appendChild(formularioLogin);
            index.appendChild(buttonRegistrese);
        });
    }
}
