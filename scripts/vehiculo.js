class Vehículo {
    getVehiculo(event) {
        event.preventDefault();

        fetch("https://localhost:8080/obtenerVehiculo", {
            method: "POST",
            body: JSON.stringify({
                placa: event.target.value
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data != null) {
                    if (data.exists == true) {
                        const marcaSelect = document.getElementById("marca-select");
                        
                        for (let i = 0; i < marcaSelect.options.length; i++) {
                            if (data.marca === marcaSelect.options[i].value) {
                                marcaSelect.options[i].selected = true;
                            }
                        }
                        const colorSelect = document.getElementById("color-select");
                        
                        for (let i = 0; i < colorSelect.options.length; i++) {
                            if (data.color === colorSelect.options[i].value) {
                                colorSelect.options[i].selected = true;
                            }
                        }
                        const modeloSelect = document.getElementById("modelo-select");
                        
                        for (let i = 0; i < modeloSelect.options.length; i++) {
                            if (data.marca === modeloSelect.options[i].value) {
                                modeloSelect.options[i].selected = true;
                            }
                        }
                    } else if (data.exists == false) {
                    }
                }
            });
    }
}
