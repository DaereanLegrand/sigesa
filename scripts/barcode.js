class Barcode {
    showGenBarcode(contentDiv) {
        contentDiv.innerHTML = "";

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var formRegistro = document.createElement("form");
        formRegistro.className = "form-registro";

        const subtitlePersona = document.createElement("h2");
        subtitlePersona.className = "subtitle";
        subtitlePersona.innerText = "Crear para personas:";

        const divDni = createInputField(
            "DNI: ",
            "number",
            "dni-persona",
            "form-inp",
            "8",
            false 
        );

        var dniBtn = document.createElement("button");
        dniBtn.className = "action-button";
        dniBtn.innerText = "Generar";

        dniBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.api.showBarcode(document.getElementById("dni-persona").value);
        });

        divDni.appendChild(dniBtn);

        const subtitleVehiculos = document.createElement("h2");
        subtitleVehiculos.className = "subtitle";
        subtitleVehiculos.innerText = "Crear para vehículos: ";

        const divPlaca = createInputField(
            "Placa: ",
            "text",
            "placa-vehiculo",
            "form-inp",
            "7",
            false
        );

        var placaBtn = document.createElement("button");
        placaBtn.className = "action-button";
        placaBtn.innerText = "Generar";

        placaBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.api.showBarcode(document.getElementById("placa-vehiculo").value);
        })

        divPlaca.appendChild(placaBtn);

        var showAllPlacasBtn = document.createElement("button");
        showAllPlacasBtn.className = "action-button";
        showAllPlacasBtn.innerText = "Generar para todos los vehículos";

        showAllPlacasBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.api.showAllBarcodes();
        });

        const subtitlePapeleta = document.createElement("h2");
        subtitlePapeleta.className = "subtitle";
        subtitlePapeleta.innerText = "Crear para papeleta: ";
        subtitlePapeleta.style.marginBottom = "0px";

        const divPapeleta = document.createElement("div");
        divPapeleta.className = "papeleta-div";
        const divInpsPapeleta = document.createElement("div");
        divInpsPapeleta.className = "papeleta-inps-div";
        const divDniPapeleta = createInputField(
            "DNI: ",
            "number",
            "dni-papeleta",
            "form-inp",
            "8",
            false 
        );

        const divPlacaPapeleta = createInputField(
            "Placa: ",
            "text",
            "placa-papeleta",
            "form-inp",
            "7",
            false
        );

        var papeletaBtn = document.createElement("button");
        papeletaBtn.className = "action-button";
        papeletaBtn.innerText = "Generar";

        papeletaBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.api.showBarcode(document.getElementById("dni-papeleta").value + " " + document.getElementById("placa-papeleta").value);
        })

        divInpsPapeleta.appendChild(divDniPapeleta);
        divInpsPapeleta.appendChild(divPlacaPapeleta);

        divPapeleta.appendChild(divInpsPapeleta);
        divPapeleta.appendChild(papeletaBtn);

        formRegistro.appendChild(subtitlePersona);
        formRegistro.appendChild(divDni);
        formRegistro.appendChild(subtitleVehiculos);
        formRegistro.appendChild(divPlaca);
        formRegistro.appendChild(showAllPlacasBtn);
        formRegistro.appendChild(subtitlePapeleta);
        formRegistro.appendChild(divPapeleta);

        formDiv.appendChild(formRegistro);
        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Generador de códigos de barra",
                "En este apartada se podrá generar códigos de barra para personas, vehículos y papeletas."
            )
        );
        contentDiv.appendChild(formDiv);
    }
}
