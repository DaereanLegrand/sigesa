class Vehículo {
    getVehiculo(event) {
        event.preventDefault();

        fetch("https://localhost:8080/obtenerVehiculo", {
            method: "POST",
            body: JSON.stringify({
                placa: event.target.value,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data != null) {
                    const marcaSelect = document.getElementById("marca-select");
                    const colorSelect = document.getElementById("color-select");
                    const modeloSelect = document.getElementById("modelo-select");
                    if (data.exists == true) {
                        for (let i = 0; i < marcaSelect.options.length; i++) {
                            if (data.marca === marcaSelect.options[i].value) {
                                marcaSelect.options[i].selected = true;
                            }
                        }

                        for (let i = 0; i < colorSelect.options.length; i++) {
                            if (data.color === colorSelect.options[i].value) {
                                colorSelect.options[i].selected = true;
                            }
                        }

                        for (let i = 0; i < modeloSelect.options.length; i++) {
                            if (data.marca === modeloSelect.options[i].value) {
                                modeloSelect.options[i].selected = true;
                            }
                        }

                        marcaSelect.disabled = true;
                        colorSelect.disabled = true;
                        modeloSelect.disabled = true;
                    } else if (data.exists == false) {
                        marcaSelect.disabled = false;
                        colorSelect.disabled = false;
                        modeloSelect.disabled = false;
                    }
                }
            });
    }
}
