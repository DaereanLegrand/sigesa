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

    getEnsaPersona(tabla) {
        fetch("https://localhost:8080/obtenerEnsaPersona", {
            method: "POST",
            body: JSON.stringify({
                rango: obtenerDiaDeGuardia()
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data != null) {
                    if (data.success == true) {
                        let i = 0;
                        data.data.forEach((row) => {
                            console.log(row);
                            const mtr = document.createElement('tr');
                            const n = document.createElement('td');
                            n.innerText = i;
                            const tipo = document.createElement('td');
                            tipo.innerText = (row.rango != null) ? "Personal" : "Visita";
                            const dni = document.createElement('td');
                            dni.innerText = row.dni;
                            const grado = document.createElement('td');
                            grado.innerText = row.rango;
                            const apellidosNombres = document.createElement('td');
                            apellidosNombres.innerText = row.apellidos + " " + row.nombres;
                            const motivo = document.createElement('td');
                            motivo.innerText = row.motivo;
                            const ingreso = document.createElement('td');
                            const ingDate = new Date(row.timestampentrada);
                            ingreso.innerText = ingDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                            const salida = document.createElement('td');
                            const salDate = new Date(row.timestampsalida);
                            salida.innerText = salDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                            mtr.appendChild(n);
                            mtr.appendChild(tipo);
                            mtr.appendChild(dni);
                            mtr.appendChild(grado);
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
