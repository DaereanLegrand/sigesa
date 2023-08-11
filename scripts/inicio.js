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
        var tablaPersonal = document.createElement("table");
        tablaPersonal.id = "tabla-personal";
        var headersTablaPersonal = document.createElement("thead");

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

        tablaPersonal.appendChild(headersTablaPersonal);
        tablaDiv.appendChild(tablaPersonal);
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
        const btnGenerarReporte = document.getElementById('btnGenerarReporte');
        btnGenerarReporte.addEventListener('click', generarEImprimirReporte);
    
    

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

        bottomButtons.appendChild(btnVisPersonas);
        bottomButtons.appendChild(btnImpimirReporte);

        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(infoDiv);
        contentDiv.appendChild(this.createTablaVehiculos());
        contentDiv.appendChild(bottomButtons);
    }
}
