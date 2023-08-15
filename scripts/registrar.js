class Registrar {
    registrarPersona(event) {
        event.preventDefault();

        fetch("https://localhost:8080/registrarPersona", {
            method: "POST",
            body: JSON.stringify({
                dni: document.getElementById("dni").value,
                nombres: document.getElementById("nombres").value,
                apellidos: document.getElementById("apellidos").value,
                cip: document.getElementById("cip").value,
                rango: document.getElementById("rango-select").value,
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
                        this.showRegistrarPersona(
                            document.getElementById("cdiv")
                        );
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar a dicha persona. ERROR: ${data.error}`
                        );
                    }
                }
            });
    }

    registrarVehiculo(event) {
        event.preventDefault();
        fetch("https://localhost:8080/registrarVehiculo", {
            method: "POST",
            body: JSON.stringify({
                placa: document.getElementById("placa").value,
                color: document.getElementById("color-select").value,
                marca: document.getElementById("marca-select").value,
                modelo: document.getElementById("modelo-select").value,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data != null) {
                    if (data.success == true) {
                        window.api.dialog(
                            "Exito",
                            "El vehículo fue registrado correctamente."
                        );
                        this.showRegistrarVehiculo(
                            document.getElementById("cdiv")
                        );
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar a dicho vehículo. ERROR: ${data.error}`
                        );
                    }
                }
            });
    }

    showRegistrarPersona(contentDiv) {
        contentDiv.innerHTML = "";

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var formRegistro = document.createElement("form");
        formRegistro.className = "form-registro";

        formRegistro.appendChild(
            createInputField(
                "Apellidos: ",
                "text",
                "apellidos",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            createInputField(
                "Nombres: ",
                "text",
                "nombres",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            createInputField("CIP: ", "number", "cip", "form-inp", "9", true)
        );
        formRegistro.appendChild(
            createInputField("DNI: ", "number", "dni", "form-inp", "8", true)
        );

        const labelCheckbox = document.createElement("label");
        labelCheckbox.textContent = "Selecciona una categoría:";
        const checkboxContainer = document.createElement("div");
        checkboxContainer.style.width = "25vw";
        checkboxContainer.classList.add("checkbox-container");

        const categories = [
            { id: "oficiales", label: "Oficiales" },
            { id: "tcosyso", label: "Técnicos y Sub-Oficiales" },
            { id: "tropa", label: "Tropa" },
        ];

        categories.forEach((category) => {
            const checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.id = category.id;
            checkbox.name = "category";
            checkbox.value = category.id;

            checkbox.addEventListener("change", (event) => {
                const selectedCategory = event.target.value;

                if (event.target.checked) {
                    createDropdown(selectedCategory);
                }
            });

            const categoryLabel = document.createElement("label");
            categoryLabel.textContent = category.label;
            categoryLabel.setAttribute("for", category.id);

            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(categoryLabel);
        });

        const labelDropdown = document.createElement("label");
        labelDropdown.textContent = "Selecciona un rango:";

        const dropdown = document.createElement("select");
        dropdown.id = "rango-select";
        dropdown.appendChild(document.createElement("option"));

        var divCheck = document.createElement("div");
        divCheck.appendChild(labelCheckbox);
        divCheck.appendChild(checkboxContainer);

        var divDropdown = document.createElement("div");
        divDropdown.appendChild(labelDropdown);
        divDropdown.appendChild(dropdown);

        var btnSubmit = document.createElement("button");
        btnSubmit.className = "registrar-submit";
        btnSubmit.innerText = "Registrar persona";

        btnSubmit.addEventListener("click", (event) => {
            this.registrarPersona(event);
        });

        formRegistro.appendChild(divCheck);
        formRegistro.appendChild(divDropdown);
        formRegistro.appendChild(btnSubmit);

        formDiv.appendChild(formRegistro);
        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Registrar persona",
                "Llene este formulario para agregar una nueva persona al sistema."
            )
        );
        contentDiv.appendChild(formDiv);
    }

    showRegistrarVehiculo(contentDiv) {
        contentDiv.innerHTML = "";

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var formRegistro = document.createElement("form");
        formRegistro.className = "form-registro";

        formRegistro.appendChild(
            createInputField(
                "Placa de Matrícula",
                "text",
                "placa",
                "form-inp",
                "7",
                true
            )
        );

        const popularColors = [
            "Negro",
            "Blanco",
            "Gris",
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo",
            "Plata",
            "Otro",
        ];

        const colorDropdownWithLabel = createDropdownWithLabel(
            "color-select",
            "Color:",
            popularColors
        );

        const popularModels = [
            "Sedán",
            "Camioneta",
            "SUV",
            "Hatchback",
            "Pick-up",
            "Coupe",
            "Convertible",
            "Tanque",
            "Transporte blindado de personal",
            "Vehículo todoterreno",
            "Camión militar",
            "Otro",
        ];

        const modelDropdownWithLabel = createDropdownWithLabel(
            "modelo-select",
            "Modelo:",
            popularModels
        );

        const popularBrands = [
            "Toyota",
            "Honda",
            "Ford",
            "Chevrolet",
            "Nissan",
            "Volkswagen",
            "BMW",
            "Mercedes-Benz",
            "Audi",
            "Hyundai",
            "Kia",
            "Otro",
        ];

        const brandDropdownWithLabel = createDropdownWithLabel(
            "marca-select",
            "Marca:",
            popularBrands
        );

        var btnSubmit = document.createElement("button");
        btnSubmit.className = "registrar-submit";
        btnSubmit.innerText = "Registrar vehículo";
        btnSubmit.addEventListener("click", (event) => {
            this.registrarVehiculo(event);
        });

        formRegistro.appendChild(colorDropdownWithLabel);
        formRegistro.appendChild(modelDropdownWithLabel);
        formRegistro.appendChild(brandDropdownWithLabel);

        formRegistro.appendChild(btnSubmit);

        formDiv.appendChild(formRegistro);
        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Registrar vehículo",
                "Llene este formulario para agregar un nuevo vehículo al sistema."
            )
        );
        contentDiv.appendChild(formDiv);
    }

    showRegistrarIngresoVehiculo(contentDiv) {
        contentDiv.innerHTML = "";

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var formRegistro = document.createElement("form");
        formRegistro.className = "form-registro";

        formRegistro.appendChild(
            createInputField("DNI: ", "number", "dni", "form-inp", "8", true)
        );

        formRegistro.appendChild(
            createInputField(
                "Placa de Matrícula",
                "text",
                "placa",
                "form-inp",
                "7",
                true
            )
        );

        const popularColors = [
            "Negro",
            "Blanco",
            "Gris",
            "Rojo",
            "Azul",
            "Verde",
            "Amarillo",
            "Plata",
            "Otro",
        ];

        const colorDropdownWithLabel = createDropdownWithLabel(
            "color-select",
            "Color:",
            popularColors
        );

        const popularModels = [
            "Sedán",
            "Camioneta",
            "SUV",
            "Hatchback",
            "Pick-up",
            "Coupe",
            "Convertible",
            "Tanque",
            "Transporte blindado de personal",
            "Vehículo todoterreno",
            "Camión militar",
            "Otro",
        ];

        const modelDropdownWithLabel = createDropdownWithLabel(
            "modelo-select",
            "Modelo:",
            popularModels
        );

        const popularBrands = [
            "Toyota",
            "Honda",
            "Ford",
            "Chevrolet",
            "Nissan",
            "Volkswagen",
            "BMW",
            "Mercedes-Benz",
            "Audi",
            "Hyundai",
            "Kia",
            "Otro",
        ];

        const brandDropdownWithLabel = createDropdownWithLabel(
            "marca-select",
            "Marca:",
            popularBrands
        );

        formRegistro.appendChild(
            createInputField(
                "Apellidos: ",
                "text",
                "apellidos",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            createInputField(
                "Nombres: ",
                "text",
                "nombres",
                "form-inp",
                "100",
                true
            )
        );

        var btnSubmit = document.createElement("button");
        btnSubmit.className = "registrar-submit";
        btnSubmit.innerText = "Registrar ingreso";
        btnSubmit.addEventListener("click", (event) => {
            this.registrarIngresoVehiculo(event);
        });

        formRegistro.appendChild(colorDropdownWithLabel);
        formRegistro.appendChild(modelDropdownWithLabel);
        formRegistro.appendChild(brandDropdownWithLabel);
        formRegistro.appendChild(
            createTextArea(
                "Motivo: ",
                "text",
                "motivo",
                "form-inp",
                "1000",
                true
            )
        );
        formRegistro.appendChild(
            createInputField(
                "A quien visita: ",
                "text",
                "persona-visitada",
                "form-inp",
                "100",
                true
            )
        );

        formRegistro.appendChild(btnSubmit);

        var bottomButtons = document.createElement("div");
        bottomButtons.className = "bottom-buttons-div";
        var btnIngVehiculos = document.createElement("button");
        btnIngVehiculos.innerText = "Ingreso de Personas";
        btnIngVehiculos.className = "action-button";

        btnIngVehiculos.addEventListener("click", () => {
            this.showRegistrarIngresoPersonas(contentDiv);
        });

        bottomButtons.appendChild(btnIngVehiculos);

        formDiv.appendChild(formRegistro);
        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Registrar ingreso de un vehículo",
                "Llene este formulario para registrar el ingreso de un vehículo."
            )
        );
        contentDiv.appendChild(formDiv);
        contentDiv.appendChild(bottomButtons);

        document.getElementById("dni").addEventListener("blur", (event) => {
            persona.getPersona(event);
        });

        document.getElementById("placa").addEventListener("blur", (event) => {
            vehiculo.getVehiculo(event);
        });
    }

    showRegistrarIngresoPersonas(contentDiv) {
        contentDiv.innerHTML = "";

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var formRegistro = document.createElement("form");
        formRegistro.className = "form-registro";

        var btnSubmit = document.createElement("button");
        btnSubmit.className = "registrar-submit";
        btnSubmit.innerText = "Registrar ingreso";
        btnSubmit.addEventListener("click", (event) => {

            var dniInput = document.getElementById("dni");
            var apellidosInput = document.getElementById("apellidos");
            var nombresInput = document.getElementById("nombres");

            if (dniInput.value.length !== 8 || apellidosInput.value === "" || nombresInput.value === "") {
                window.alert("Error: Por favor, complete todos los campos obligatorios correctamente.");
            } else {
                this.registrarIngresoPersona(event);
            }

        });

        formRegistro.appendChild(
            createInputField("DNI", "number", "dni", "form-inp", "9", true)
        );
        formRegistro.appendChild(
            createInputField(
                "Apellidos: ",
                "text",
                "apellidos",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            createInputField(
                "Nombres: ",
                "text",
                "nombres",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            createTextArea(
                "Motivo: ",
                "text",
                "motivo",
                "form-inp",
                "1000",
                true
            )
        );
        formRegistro.appendChild(
            createInputField(
                "A quien visita: ",
                "text",
                "persona-visitada",
                "form-inp",
                "100",
                true
            )
        );

        formRegistro.appendChild(btnSubmit);

        var bottomButtons = document.createElement("div");
        bottomButtons.className = "bottom-buttons-div";
        var btnIngVehiculos = document.createElement("button");
        btnIngVehiculos.innerText = "Ingreso de Vehículos";
        btnIngVehiculos.className = "action-button";

        btnIngVehiculos.addEventListener("click", () => {
            this.showRegistrarIngresoVehiculo(contentDiv);
        });

        bottomButtons.appendChild(btnIngVehiculos);

        formDiv.appendChild(formRegistro);
        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Registrar ingreso de una persona",
                "Llene este formulario para registrar el ingreso de una persona."
            )
        );
        contentDiv.appendChild(formDiv);

        document.getElementById("dni").addEventListener("blur", (event) => {
            persona.getPersona(event);
        });

        contentDiv.appendChild(bottomButtons);
    }

    registrarSalidaPersona(id, row) {
        fetch("https://localhost:8080/registrarSalidaPersona", {
            method: "POST",
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data != null) {
                    if (data.success == true) {
                        row.parentNode.removeChild(row);
                        window.api.dialog(
                            "Exito",
                            "Se registro la salida de manera exitosa."
                        );
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar la salida de dicha persona. ERROR: ${data.error}`
                        );
                    }
                }
            });
    }

    createTablaPersonalsinSalida() {
        const headers = [
            "N°",
            "DNI",
            "Grado",
            "Apellidos y Nombres",
            "Hora de Entrada",
            "Registrar Salida",
        ];

        var tablaDiv = document.createElement("div");
        tablaDiv.className = "tabla-div";
        var tablaPersonal = document.createElement("table");
        tablaPersonal.id = "tabla-personal";
        var headersTablaPersonal = document.createElement("thead");
        var tbody = document.createElement("tbody");

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
                case 6:
                    head.style.width = "2vw";
            }
            num++;
        });

        tablaPersonal.appendChild(headersTablaPersonal);

        try {
            fetch("https://localhost:8080/obtenerSoloEntradasPersona")
                .then((response) => response.json())
                .then((data) => {
                    if (data.success == true) {
                        let i = 0;
                        data.data.forEach((registro) => {
                            var row = document.createElement("tr");
                            var cellNumber = document.createElement("td");
                            cellNumber.innerText = i + 1;

                            var cellDNI = document.createElement("td");
                            cellDNI.innerText = registro.dni;

                            var cellGrado = document.createElement("td");
                            cellGrado.innerText = registro.rango;

                            var cellNombre = document.createElement("td");
                            cellNombre.innerText =
                                registro.apellidos + " " + registro.nombres;

                            var cellHoraEntrada = document.createElement("td");
                            if (registro.timestampentrada != null) {
                                const ingDate = new Date(
                                    registro.timestampentrada
                                );
                                cellHoraEntrada.innerText =
                                    ingDate.toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    });
                            }

                            var cellRegistrarSalida =
                                document.createElement("td");
                            var botonRegistrarSalida =
                                document.createElement("button");
                            botonRegistrarSalida.innerText = "Registrar Salida";
                            botonRegistrarSalida.className = "button-exit";

                            botonRegistrarSalida.addEventListener(
                                "click",
                                (event) => {
                                    event.preventDefault();
                                    this.registrarSalidaPersona(
                                        registro.id_ensapersona,
                                        row
                                    );
                                }
                            );

                            cellRegistrarSalida.appendChild(
                                botonRegistrarSalida
                            );
                            row.appendChild(cellNumber);
                            row.appendChild(cellDNI);
                            row.appendChild(cellGrado);
                            row.appendChild(cellNombre);
                            row.appendChild(cellHoraEntrada);
                            row.appendChild(cellRegistrarSalida);

                            tbody.appendChild(row);

                            i++;
                        });
                    }
                });
        } catch (error) {}

        tablaPersonal.appendChild(tbody);
        tablaDiv.appendChild(tablaPersonal);

        return tablaDiv;
    }

    registrarSalidaVehiculo(id, row) {
        fetch("https://localhost:8080/registrarSalidaVehiculo", {
            method: "POST",
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data != null) {
                    if (data.success == true) {
                        row.parentNode.removeChild(row);
                        window.api.dialog(
                            "Exito",
                            "Se registro la salida de manera exitosa."
                        );
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar la salida de dicho vehiculo. ERROR: ${data.error}`
                        );
                    }
                }
            });
    }

    createTablaVehiculosinSalida() {
        const headers = [
            "N°",
            "DNI",
            "Placa",
            "Apellidos y Nombres",
            "Hora de Entrada",
            "Registrar Salida",
        ];

        var tablaDiv = document.createElement("div");
        tablaDiv.className = "tabla-div";
        var tablaPersonal = document.createElement("table");
        tablaPersonal.id = "tabla-personal";
        var headersTablaPersonal = document.createElement("thead");
        var tbody = document.createElement("tbody");

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
                case 5:
                    head.style.width = "2vw";
            }
            num++;
        });

        tablaPersonal.appendChild(headersTablaPersonal);

        try {
            fetch("https://localhost:8080/obtenerSoloEntradasVehiculo")
                .then((response) => response.json())
                .then((data) => {
                    if (data.success == true) {
                        let i = 0;
                        data.data.forEach((registro) => {
                            var row = document.createElement("tr");
                            var cellNumber = document.createElement("td");
                            cellNumber.innerText = i + 1;

                            var cellDNI = document.createElement("td");
                            cellDNI.innerText = registro.dni;

                            var cellGrado = document.createElement("td");
                            cellGrado.innerText = registro.placa;

                            var cellNombre = document.createElement("td");
                            cellNombre.innerText =
                                registro.apellidos + " " + registro.nombres;

                            var cellHoraEntrada = document.createElement("td");
                            if (registro.timestampentrada != null) {
                                const ingDate = new Date(
                                    registro.timestampentrada
                                );
                                cellHoraEntrada.innerText =
                                    ingDate.toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    });
                            }

                            var cellRegistrarSalida =
                                document.createElement("td");
                            var botonRegistrarSalida =
                                document.createElement("button");
                            botonRegistrarSalida.innerText = "Registrar Salida";
                            botonRegistrarSalida.className = "button-exit";

                            botonRegistrarSalida.addEventListener(
                                "click",
                                (event) => {
                                    event.preventDefault();
                                    this.registrarSalidaVehiculo(
                                        registro.id_ensavehiculos,
                                        row
                                    );
                                }
                            );

                            cellRegistrarSalida.appendChild(
                                botonRegistrarSalida
                            );
                            row.appendChild(cellNumber);
                            row.appendChild(cellDNI);
                            row.appendChild(cellGrado);
                            row.appendChild(cellNombre);
                            row.appendChild(cellHoraEntrada);
                            row.appendChild(cellRegistrarSalida);

                            tbody.appendChild(row);

                            i++;
                        });
                    }
                });
        } catch (error) {}

        tablaPersonal.appendChild(tbody);
        tablaDiv.appendChild(tablaPersonal);

        return tablaDiv;
    }

    showRegistrarSalidaPersona(contentDiv) {
        contentDiv.innerHTML = "";

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var bottomButtons = document.createElement("div");
        bottomButtons.className = "bottom-buttons-div";
        var btnIngVehiculos = document.createElement("button");
        btnIngVehiculos.innerText = "Salida de Vehículos";
        btnIngVehiculos.className = "action-button";

        btnIngVehiculos.addEventListener("click", () => {
            this.showRegistrarSalidaVehiculo(contentDiv);
        });

        bottomButtons.appendChild(btnIngVehiculos);

        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Registrar salida",
                "Seleccione una de las entradas para registrar una salida de una persona."
            )
        );
        contentDiv.appendChild(formDiv);
        contentDiv.appendChild(bottomButtons);
        formDiv.appendChild(this.createTablaPersonalsinSalida());
    }

    showRegistrarSalidaVehiculo(contentDiv) {
        contentDiv.innerHTML = "";
        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var bottomButtons = document.createElement("div");
        bottomButtons.className = "bottom-buttons-div";
        var btnIngVehiculos = document.createElement("button");
        btnIngVehiculos.innerText = "Salida de Personas";
        btnIngVehiculos.className = "action-button";

        btnIngVehiculos.addEventListener("click", () => {
            this.showRegistrarSalidaPersona(contentDiv);
        });

        bottomButtons.appendChild(btnIngVehiculos);

        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Registrar salida",
                "Seleccione una de las entradas para registrar una salida de un vehiculo."
            )
        );
        contentDiv.appendChild(formDiv);
        contentDiv.appendChild(bottomButtons);
        formDiv.appendChild(this.createTablaVehiculosinSalida());
    }

    async registrarIngresoPersona(event) {
        event.preventDefault();

        if (document.getElementById("apellidos").readOnly == false) {
            try {
             const response = await fetch(
                    "https://localhost:8080/registrarPersona",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            dni: document.getElementById("dni").value,
                            apellidos:
                                document.getElementById("apellidos").value,
                            nombres: document.getElementById("nombres").value,
                        }),
                    }   
                );

                const data = await response.json();

                if (data != null) {
                    if (data.success == true) {
                        window.api.dialog(
                            "Exito",
                            "La persona fue registrada correctamente."
                        );
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar a dicha persona. ERROR: ${data.error}`
                        );
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetch("https://localhost:8080/registrarIngresoPersona", {
            method: "POST",
            body: JSON.stringify({
                dni: document.getElementById("dni").value,
                motivo: document.getElementById("motivo").value,
                aquienvisita: document.getElementById("persona-visitada").value,
                dia_guardia: obtenerDiaDeGuardia(),
            }),
        });
    }

    async registrarIngresoPersona(event) {
        event.preventDefault();

        if (document.getElementById("apellidos").disabled == false) {
            try {
                const response = await fetch(
                    "https://localhost:8080/registrarPersona",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            dni: document.getElementById("dni").value,
                            apellidos:
                                document.getElementById("apellidos").value,
                            nombres: document.getElementById("nombres").value,
                        }),
                    }
                );

                const data = await response.json();

                if (data != null) {
                    if (data.success == true) {
                        window.api.dialog(
                            "Exito",
                            "La persona fue registrada correctamente."
                        );
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar a dicha persona. ERROR: ${data.error}`
                        );
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetch("https://localhost:8080/registrarIngresoPersona", {
            method: "POST",
            body: JSON.stringify({
                dni: document.getElementById("dni").value,
                motivo: document.getElementById("motivo").value,
                aquienvisita: document.getElementById("persona-visitada").value,
                dia_guardia: obtenerDiaDeGuardia(),
            }),
        });
    }

    async registrarIngresoVehiculo(event) {
        event.preventDefault();

        if (document.getElementById("apellidos").disabled == false) {
            try {
                const response = await fetch(
                    "https://localhost:8080/registrarPersona",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            dni: document.getElementById("dni").value,
                            apellidos:
                                document.getElementById("apellidos").value,
                            nombres: document.getElementById("nombres").value,
                        }),
                    }
                );

                const data = await response.json();

                if (data != null) {
                    if (data.success == true) {
                        window.api.dialog(
                            "Exito",
                            "La persona fue registrada correctamente."
                        );
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar a dicha persona. ERROR: ${data.error}`
                        );
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

        if (document.getElementById("color-select").disabled == false) {
            try {
                const response = await fetch(
                    "https://localhost:8080/registrarVehiculo",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            placa: document.getElementById("placa").value,
                            color: document.getElementById("color-select")
                                .value,
                            marca: document.getElementById("marca-select")
                                .value,
                            modelo: document.getElementById("modelo-select")
                                .value,
                        }),
                    }
                );

                const data = await response.json();

                if (data != null) {
                    if (data.success == true) {
                        window.api.dialog(
                            "Exito",
                            "El vehículo fue registrado correctamente."
                        );
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar a dicho vehículo. ERROR: ${data.error}`
                        );
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

        fetch("https://localhost:8080/registrarIngresoVehiculo", {
            method: "POST",
            body: JSON.stringify({
                dni: document.getElementById("dni").value,
                placa: document.getElementById("placa").value,
                motivo: document.getElementById("motivo").value,
                aquienvisita: document.getElementById("persona-visitada").value,
                dia_guardia: obtenerDiaDeGuardia(),
            }),
        });
    }
    async insertarPGuardia(event){
        event.preventDefault();
        console.log();

        if (document.getElementById("dni-ofGuardia").disabled == false) {
            try {
            console.log("b");
             const response = await fetch(
                    "https://localhost:8080/registrarPGuardia",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            dniOG: document.getElementById("dni-ofGuardia").value,
                            dniOD: document.getElementById("dni-adjuntoOfGuardia").value,
                            dia_guardia: obtenerDiaDeGuardia(),
                        }),
                    }   
                );

                const data = await response.json();

                if (data != null) {
                    if (data.success == true) {
                        window.api.dialog(
                            "Exito",
                            "Los oficiales fueron registrados con exito."
                        );

                        this.guardia = data.id_personal_guardia;
                        
                        document.getElementById("dni-ofGuardia").disabled = true;
                        document.getElementById("dni-adjuntoOfGuardia").disabled = true;
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar a dicha persona. ERROR: ${data.error}`
                        );
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }
    async insertarTGuardia(event){
        console.log();

        if (document.getElementById("dni-tropa").disabled == false) {
            try {
            console.log("b");
             const response = await fetch(
                    "https://localhost:8080/registrarTGuardia",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            dniTropa: document.getElementById("dni-tropa").value,
                            idGuardia: this.guardia,
                        }),
                    }   
                );

                const data = await response.json();

                if (data != null) {
                    if (data.success == true) {
                        window.api.dialog(
                            "Exito",
                            "La persona fue registrada correctamente."
                        );
                        
                    } else if (data.success == false) {
                        window.api.dialog(
                            "Error",
                            `Hubo un error al registrar a esta persona. ERROR: ${data.error}`
                        );
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }  
    }
    personaldeGuardia(contentDiv){
        contentDiv.innerHTML = ""

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var formRegistro = document.createElement("form");
        formRegistro.className = "form-registro";
        /* ******************************************************* */
        const subtitleOG = document.createElement("h2");
        subtitleOG.className = "subtitle";
        subtitleOG.innerText = "Oficial de Guardia";

        const divOG = createInputField(
            "DNI: ",
            "number",
            "dni-ofGuardia",
            "form-inp",
            "8",
            false 
        );
        

         /* ******************************************************* */

        const subtitleAOG = document.createElement("h2");
        subtitleAOG.className = "subtitle";
        subtitleAOG.innerText = "Adjunto del Oficial de guardia";

        const divAOG = createInputField(
            "DNI: ",
            "number",
            "dni-adjuntoOfGuardia",
            "form-inp",
            "8",
            false 
        );

        var ooBtn = document.createElement("button");
        ooBtn.className = "action-button";
        ooBtn.innerText = "Registrar";

        
        ooBtn.addEventListener('click', (event) => {
            console.log("a");    
            this.insertarPGuardia(event);
        });
        
        /* ******************************************************* */

        const subtitleTropa = document.createElement("h2");
        subtitleTropa.className = "subtitle";
        subtitleTropa.innerText = "Registrar Personal de Tropa";

        const divTropa = createInputField(
            "DNI: ",
            "number",
            "dni-tropa",
            "form-inp",
            "8",
            false 
        );

        var tropaBtn = document.createElement("button");
        tropaBtn.className = "action-button";
        tropaBtn.innerText = "Registrar";

        
        tropaBtn.addEventListener('click', (event) => {
            event.preventDefault();
                if(this.guardia != null){
                    this.insertarTGuardia();
                    window.api.dialog(
                        "Exito",
                        "La persona fue registrada correctamente.",
                        
                    );
                }else{
                    window.api.dialog(
                        "Error",
                        `Registra al Oficial de Guardia y su adjunto primero.`
                    );
                }
        });
        divTropa.appendChild(tropaBtn);
        
        /* ******************************************************* */
        

        formDiv.appendChild(formRegistro);
        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Personal de guardia",
                "Registre a todo el personal que se encuentra de servicio."
            )
        );

        formRegistro.appendChild(subtitleOG);
        formRegistro.appendChild(divOG);
        formRegistro.appendChild(subtitleAOG);
        formRegistro.appendChild(divAOG);
        formRegistro.appendChild(ooBtn);
        formRegistro.appendChild(subtitleTropa);
        formRegistro.appendChild(divTropa);


        contentDiv.appendChild(formDiv); 
    }
    tablaPGAdmin(){
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

        try {
            fetch("https://localhost:8080/personalGuardia")
            .then((response) => response.json())
                .then((data) => {
                    if (data.success == true) {
                        let i = 1;
                        


                        data.data.forEach((registro) => {
                            var row = document.createElement("tr");
                            var cellNumber = document.createElement("td");
                            cellNumber.innerText = i + 1;
                            
                            var cellDNI = document.createElement("td");
                            cellDNI.innerText = registro.dni_oficial_guardia;
                            
                            var cellGrado = document.createElement("td");
                            cellGrado.innerText = registro.grado_oficial_guardia;
    
                            var cellNombre = document.createElement("td");
                            cellNombre.innerText = registro.apellidos_oficial_guardia + " " + registro.nombres_oficial_guardia; 
    
                            var cellServicio = document.createElement("td");
                            cellServicio.innerText = "Oficial de Guardia";
    
                            var row2 = document.createElement("tr");
                            var cellNumber2 = document.createElement("td");
                            cellNumber2.innerText = i + 1;
                            
                            var cellDNI2 = document.createElement("td");
                            cellDNI2.innerText = registro.dni_oficial_dia;
                            
                            var cellGrado2 = document.createElement("td");
                            cellGrado2.innerText = registro.rango_oficial_dia;
    
                            var cellNombre2 = document.createElement("td");
                            cellNombre2.innerText = registro.apellidos_oficial_dia + " " + registro.nombres_oficial_dia; 
    
                            var cellServicio2 = document.createElement("td");
                            cellServicio2.innerText = "Adjunto de Oficial de Guardia";
    
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
                        });
                    }
                });

            } catch (error) {
                console.log(error);
            }

        tablaDiv.appendChild(tablaPG) 

        return tablaDiv;
    }
    personaldeGuardiaAdmin(contentDiv){
        contentDiv.innerHTML = ""

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";


        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Personal de guardia",
                "Aqui se puede observar los miembros de la guardia."
            )
        );

        contentDiv.appendChild(formDiv);
        formDiv.appendChild(this.tablaPGAdmin());


    }

}
