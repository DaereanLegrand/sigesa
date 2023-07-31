class Inicio {
    createTablaPersonal() {
        const headers =  ['N°', 'DNI', 'Grado', 'Apellidos y Nombres', 'Hora de Ingreso', 'Hora de Salida'];
        var tablaDiv = document.createElement('div');
        tablaDiv.className = "tabla-div";
        var tablaPersonal = document.createElement('table');
        tablaPersonal.id = "tabla-personal";
        var headersTablaPersonal = document.createElement('thead');

        var num = 0;
        (headers.map(header => {
            var head = document.createElement('th');
            head.innerText = header;

            headersTablaPersonal.appendChild(head);

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
                    head.style.width = "35vw";
                    break;
                case 4:
                    head.style.width = "5vw";
                    break;
                case 5:
                    head.style.width = "5vw";
                    break;
            }
            num++;
        }))

        tablaPersonal.appendChild(headersTablaPersonal);
        tablaDiv.appendChild(tablaPersonal);
        return tablaDiv;
    }

    showInicio(contentDiv) {
        var topBar = document.createElement('div');
        topBar.className = "top-bar";

        var welcome = document.createElement('h1');
        welcome.id = "bienvenida-contenido";
        welcome.innerText = "Bienvenido Montañero";

        var infoDiv = document.createElement('div');
        infoDiv.className = "info-div";
        
        var descDiv = document.createElement('div');
        descDiv.className = "desc-div";

        var title = document.createElement('h1');
        title.className = "titulo";
        title.innerText = "Visualizar Personal"
        var desc = document.createElement('p');
        desc.className = "parrafo";
        desc.innerText = "En esta parte podrás ver la situación actual del personal que esta dentro del fuerte en estos momentos:";

        var filterBtn = document.createElement('button');
        filterBtn.className = "action-button";
        filterBtn.innerText = "Filtros";

        descDiv.appendChild(title);
        descDiv.appendChild(desc);
        infoDiv.appendChild(descDiv);
        infoDiv.appendChild(filterBtn);

        var bottomButtons = document.createElement('div');
        bottomButtons.className = "bottom-buttons-div";
        var btnVisVehiculos = document.createElement('button');
        btnVisVehiculos.innerText = "Visualizar Vehículos";
        btnVisVehiculos.className = "action-button";
        var btnImpimirReporte = document.createElement('button');
        btnImpimirReporte.innerText = "Imprimir Reporte";
        btnImpimirReporte.className = "action-button";

        bottomButtons.appendChild(btnVisVehiculos);
        bottomButtons.appendChild(btnImpimirReporte);

        topBar.appendChild(welcome);
        contentDiv.appendChild(topBar);
        contentDiv.appendChild(infoDiv);
        contentDiv.appendChild(this.createTablaPersonal());
        contentDiv.appendChild(bottomButtons);
    }
};
