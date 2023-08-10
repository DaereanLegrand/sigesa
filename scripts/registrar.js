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
            // this.registrarVehiculo(event);
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
        })
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
            this.registrarIngresoPersona(event);
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

    showRegistrarSalidaVehiculo(contentDiv) {
        contentDiv.innerHTML = "";

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var formRegistro = document.createElement("form");
        formRegistro.className = "form-registro";

        formDiv.appendChild(formRegistro);
        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Registrar salida",
                "Seleccione una de las entradas para registrar una salida."
            )
        );
        contentDiv.appendChild(formDiv);
    }

    async registrarIngresoPersona(event){
        event.preventDefault();

        if (document.getElementById("apellidos").readOnly == false){
            try {
                const response = await fetch("https://localhost:8080/registrarPersona", {
                    method: "POST",
                    body: JSON.stringify({
                        dni: document.getElementById("dni").value,
                        apellidos: document.getElementById("apellidos").value,
                        nombres: document.getElementById("nombres").value,
                    }),
                });
        
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
                    apellidos: document.getElementById("apellidos").value,
                    nombres: document.getElementById("nombres").value,
                    motivo: document.getElementById("motivo").value,
                    aquienvisita: document.getElementById("persona-visitada").value,
                    dia_guardia: obtenerDiaDeGuardia(),
                }),
            })
    }
}
