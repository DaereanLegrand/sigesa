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

    getEnsaVehiculos(tabla) {
        fetch("https://localhost:8080/obtenerEnsaVehiculos", {
            method: "POST",
            body: JSON.stringify({
                rango: obtenerDiaDeGuardia()
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data != null) {
                    if (data.success == true) {
                        let i = 1;
                        data.data.forEach((row) => {
                            console.log(row);
                            const mtr = document.createElement('tr');
                            const n = document.createElement('td');
                            n.innerText = i;
                            const placa = document.createElement('td');
                            placa.innerText = row.placa;
                            const modelo = document.createElement('td');
                            modelo.innerText = row.modelo;
                            const dni = document.createElement('td');
                            dni.innerText = row.dni;
                            const apellidosNombres = document.createElement('td');
                            apellidosNombres.innerText = row.apellidos + " " + row.nombres;
                            const motivo = document.createElement('td');
                            motivo.innerText = row.motivo;
                            const ingreso = document.createElement('td');
                            if (row.timestampentrada != null) {
                                const ingDate = new Date(row.timestampentrada);
                                ingreso.innerText = ingDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                            }
                            const salida = document.createElement('td');
                            if (row.timestampsalida != null) {
                                const salDate = new Date(row.timestampsalida);
                                salida.innerText = salDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                            }

                            mtr.appendChild(n);
                            mtr.appendChild(placa);
                            mtr.appendChild(modelo);
                            mtr.appendChild(dni);
                            mtr.appendChild(apellidosNombres);
                            mtr.appendChild(motivo);
                            mtr.appendChild(ingreso);
                            mtr.appendChild(salida);

                            tabla.appendChild(mtr);
                            i++;
                        })

                    } else if (data.exists == false) {

                    }
                }
            });

    }
}
