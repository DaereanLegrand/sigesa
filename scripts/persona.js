class Persona {
    getPersona(event) {
        event.preventDefault();

        fetch("https://localhost:8080/obtenerPersona", {
            method: "POST",
            body: JSON.stringify({
                dni: event.target.value,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data != null) {
                    if (data.exists == true) {
                        document.getElementById("nombres").value = data.nombres;
                        document.getElementById("apellidos").value = data.apellidos;
                        document.getElementById("nombres").readOnly = true;
                        document.getElementById("apellidos").readOnly = true;
                    } else if (data.exists == false) {
                        document.getElementById("nombres").readOnly = false;
                        document.getElementById("apellidos").readOnly = false;
                    }
                }
            });
    }
}
