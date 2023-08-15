class Inicio {
    createTablaPersonal() {
        const headers = [
            "N°",
            "Tipo",
            "DNI",
            "Grado",
            "Apellidos y Nombres",
            "Motivo",
            "Hora de Ingreso",
            "Hora de Salida",
        ];
        var tablaDiv = document.createElement("div");
        tablaDiv.className = "tabla-div";
        var tablaPersonal = document.createElement("table");
        tablaPersonal.id = "tabla-personal";
        var headersTablaPersonal = document.createElement("thead");
        var contentTablaPersonal = document.createElement("tbody");

        var num = 0;
        headers.map((header) => {
            var head = document.createElement("th");
            head.innerText = header;

            headersTablaPersonal.appendChild(head);

            switch (num) {
                case 0:
                    head.style.width = "3vw";
                    break;
                case 1:
                    head.style.width = "4vw";
                    break;
                case 2:
                    head.style.width = "8vw";
                    break;
                case 3:
                    head.style.width = "8vw";
                    break;
                case 4:
                    head.style.width = "20vw";
                    break;
                case 5:
                    head.style.width = "20vw";
                    break;
                case 6:
                    head.style.width = "5vw";
                    break;
                case 7:
                    head.style.width = "5vw";
                    break;
            }
            num++;
        });

        persona.getEnsaPersona(contentTablaPersonal);

        tablaPersonal.appendChild(headersTablaPersonal);
        tablaPersonal.appendChild(contentTablaPersonal);
        tablaDiv.appendChild(tablaPersonal);
        return tablaDiv;
    }

    createTablaVehiculos() {
        const headers = [
            "N°",
            "Placa",
            "Modelo",
            "DNI",
            "Apellidos",
            "Motivo",
            "Hora de Ingreso",
            "Hora de Salida",
        ];

        var tablaDiv = document.createElement("div");
        tablaDiv.className = "tabla-div";
        var tablaVehiculos = document.createElement("table");
        tablaVehiculos.id = "tabla-personal";
        var headersTablaVehiculos = document.createElement("thead");
        var contentTablaVehiculos = document.createElement("tbody");

        var num = 0;
        headers.map((header) => {
            var head = document.createElement("th");
            head.innerText = header;

            headersTablaVehiculos.appendChild(head);

            switch (num) {
                case 0:
                    head.style.width = "3vw";
                    break;
                case 1:
                    head.style.width = "4vw";
                    break;
                case 2:
                    head.style.width = "4vw";
                    break;
                case 3:
                    head.style.width = "4vw";
                    break;
                case 4:
                    head.style.width = "10vw";
                    break;
                case 5:
                    head.style.width = "15vw";
                    break;
                case 6:
                    head.style.width = "4vw";
                    break;
                case 7:
                    head.style.width = "4vw";
                    break;
            }
            num++;
        });

        vehiculo.getEnsaVehiculos(contentTablaVehiculos);

        tablaVehiculos.appendChild(headersTablaVehiculos);
        tablaVehiculos.appendChild(contentTablaVehiculos);
        tablaDiv.appendChild(tablaVehiculos);
        return tablaDiv;
    }

    createTablaPGAdmin() {
        const headers = [
            "N°",
            "DNI",
            "Grado",
            "Apellidos y Nombres",
            "Servicio de Día",
        ];

        var tablaDiv = document.createElement("div");
        tablaDiv.className = "tabla-div";
        var tablaPG = document.createElement("table");
        tablaPG.id = "tabla-personal";
        var headersTablaPG = document.createElement("thead");
        var tbody = document.createElement("tbody");

        var num = 0;
        headers.map((header) => {
            var head = document.createElement("th");
            head.innerText = header;

            headersTablaPG.appendChild(head);

            switch (num) {
                case 0:
                    head.style.width = "3vw";
                    break;
                case 1:
                    head.style.width = "8vw";
                    break;
                case 2:
                    head.style.width = "8vw";
                    break;
                case 3:
                    head.style.width = "20vw";
                    break;
                case 4:
                    head.style.width = "8vw";
                    break;
            }
            num++;
        });

        tablaPG.appendChild(headersTablaPG);

        let i = 1;

        try {
            fetch("https://localhost:8080/personalGuardia", {
                method: "POST",
                body: JSON.stringify({
                    rango: obtenerDiaDeGuardia(),
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success == true) {
                        data.oficiales.forEach((registro) => {
                            var row = document.createElement("tr");
                            var cellNumber = document.createElement("td");
                            cellNumber.innerText = i;

                            var cellDNI = document.createElement("td");
                            cellDNI.innerText = registro.dni_oficial_guardia;

                            var cellGrado = document.createElement("td");
                            cellGrado.innerText =
                                registro.grado_oficial_guardia;

                            var cellNombre = document.createElement("td");
                            cellNombre.innerText =
                                registro.apellidos_oficial_guardia +
                                " " +
                                registro.nombres_oficial_guardia;

                            var cellServicio = document.createElement("td");
                            cellServicio.innerText = "Oficial de Guardia";

                            var row2 = document.createElement("tr");
                            var cellNumber2 = document.createElement("td");
                            i++;
                            cellNumber2.innerText = i;

                            var cellDNI2 = document.createElement("td");
                            cellDNI2.innerText = registro.dni_oficial_dia;

                            var cellGrado2 = document.createElement("td");
                            cellGrado2.innerText = registro.rango_oficial_dia;

                            var cellNombre2 = document.createElement("td");
                            cellNombre2.innerText =
                                registro.apellidos_oficial_dia +
                                " " +
                                registro.nombres_oficial_dia;

                            var cellServicio2 = document.createElement("td");
                            cellServicio2.innerText =
                                "Adjunto de Oficial de Guardia";

                            row.appendChild(cellNumber);
                            row.appendChild(cellDNI);
                            row.appendChild(cellGrado);
                            row.appendChild(cellNombre);
                            row.appendChild(cellServicio);
                            row2.appendChild(cellNumber2);
                            row2.appendChild(cellDNI2);
                            row2.appendChild(cellGrado2);
                            row2.appendChild(cellNombre2);
                            row2.appendChild(cellServicio2);
                            tbody.appendChild(row);
                            tbody.appendChild(row2);
                            tablaPG.appendChild(tbody);
                            i++;
                        });

                        data.tropa.forEach((registro) => {
                            var row = document.createElement("tr");
                            var cellNumber = document.createElement("td");
                            cellNumber.innerText = i;

                            var cellDNI = document.createElement("td");
                            cellDNI.innerText = registro.dni_tropa_guardia;

                            var cellGrado = document.createElement("td");
                            cellGrado.innerText = registro.rango;

                            var cellNombre = document.createElement("td");
                            cellNombre.innerText =
                                registro.apellidos + " " + registro.nombres;

                            var cellServicio = document.createElement("td");
                            cellServicio.innerText = "Tropa Servicio de Guardia";

                            row.appendChild(cellNumber);
                            row.appendChild(cellDNI);
                            row.appendChild(cellGrado);
                            row.appendChild(cellNombre);
                            row.appendChild(cellServicio);
                            tbody.appendChild(row);
                            tablaPG.appendChild(tbody);
                            i++;
                        });
                    }
                });
        } catch (error) {
            console.log(error);
        }

        tablaDiv.appendChild(tablaPG);

        return tablaDiv;
    }

    showInicio(contentDiv) {
        contentDiv.innerHTML = "";

        var infoDiv = finfoDiv(
            "Visualizar Personas",
            "En esta parte podrás ver la situación actual del personal que esta dentro del fuerte en estos momentos:"
        );

        var filterBtn = document.createElement("button");
        filterBtn.className = "action-button";
        filterBtn.innerText = "Filtros";
        // const btnGenerarReporte = document.getElementById('btnGenerarReporte');
        // btnGenerarReporte.addEventListener('click', generarEImprimirReporte);

        infoDiv.appendChild(filterBtn);

        var bottomButtons = document.createElement("div");
        bottomButtons.className = "bottom-buttons-div";
        var btnVisVehiculos = document.createElement("button");
        btnVisVehiculos.innerText = "Visualizar Vehículos";
        btnVisVehiculos.className = "action-button";

        btnVisVehiculos.addEventListener("click", () => {
            this.showInicioV(contentDiv);
        });

        var btnImpimirReporte = document.createElement("button");
        btnImpimirReporte.innerText = "Imprimir Reporte";
        btnImpimirReporte.className = "action-button";

        btnImpimirReporte.addEventListener("click", () => {
            window.api.reporte();
        });

        bottomButtons.appendChild(btnVisVehiculos);
        bottomButtons.appendChild(btnImpimirReporte);

        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(infoDiv);
        contentDiv.appendChild(this.createTablaPersonal());
        contentDiv.appendChild(bottomButtons);
    }

    showInicioV(contentDiv) {
        contentDiv.innerHTML = "";

        var infoDiv = finfoDiv(
            "Visualizar Vehículos",
            "Entrada y salida de vehículos a la instalación.:"
        );

        var filterBtn = document.createElement("button");
        filterBtn.className = "action-button";
        filterBtn.innerText = "Filtros";

        infoDiv.appendChild(filterBtn);

        var bottomButtons = document.createElement("div");
        bottomButtons.className = "bottom-buttons-div";
        var btnVisPersonas = document.createElement("button");
        btnVisPersonas.innerText = "Visualizar Personas";
        btnVisPersonas.className = "action-button";

        btnVisPersonas.addEventListener("click", () => {
            this.showInicio(contentDiv);
        });

        var btnImpimirReporte = document.createElement("button");
        btnImpimirReporte.innerText = "Imprimir Reporte";
        btnImpimirReporte.className = "action-button";

        btnImpimirReporte.addEventListener("click", () => {
            window.api.reporte();
        });

        bottomButtons.appendChild(btnVisPersonas);
        bottomButtons.appendChild(btnImpimirReporte);

        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(infoDiv);
        contentDiv.appendChild(this.createTablaVehiculos());
        contentDiv.appendChild(bottomButtons);
    }
}
