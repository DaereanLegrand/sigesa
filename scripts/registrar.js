class Registrar {
    createDropdown(selectedCategory) {
        var dropdown = document.getElementById("rango-select");
        dropdown.innerHTML = "";

        switch (selectedCategory) {
            case "oficiales":
                oficiales.forEach((item, index) => {
                    const option = document.createElement("option");
                    option.value = oficialesAbv[index];
                    option.textContent = item;
                    dropdown.appendChild(option);
                });
                break;

            case "tcosyso":
                tcosyso.forEach((item, index) => {
                    const option = document.createElement("option");
                    option.value = tcosysoAbv[index];
                    option.textContent = item;
                    dropdown.appendChild(option);
                });
                break;

            case "tropa":
                tropa.forEach((item, index) => {
                    const option = document.createElement("option");
                    option.value = tropaAbv[index];
                    option.textContent = item;
                    dropdown.appendChild(option);
                });
                break;
        }

        return dropdown;
    }

    createDropdownWithLabel(id, labelText, options) {
        const containerDiv = document.createElement("div");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", id);

        const dropdown = document.createElement("select");
        dropdown.id = id;

        options.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            dropdown.appendChild(optionElement);
        });

        containerDiv.appendChild(label);
        containerDiv.appendChild(dropdown);

        return containerDiv;
    }

    createInputField(
        labelText,
        inputType,
        inputId,
        inputClass,
        maxLength,
        isRequired
    ) {
        const containerDiv = document.createElement("div");

        const label = document.createElement("label");
        label.textContent = labelText;

        const input = document.createElement("input");
        input.type = inputType;
        input.id = inputId;
        input.className = inputClass;
        input.maxLength = maxLength;
        input.required = isRequired;

        containerDiv.appendChild(label);
        containerDiv.appendChild(input);

        if (maxLength == "1000") {
            input.style.height = "4vh";
        }

        return containerDiv;
    }

    createTextArea(
        labelText,
        inputType,
        inputId,
        inputClass,
        maxLength,
        isRequired
    ) {
        const containerDiv = document.createElement("div");

        const label = document.createElement("label");
        label.textContent = labelText;

        const input = document.createElement("textarea");
        input.id = inputId;
        input.className = inputClass;
        input.maxLength = maxLength;
        input.required = isRequired;

        containerDiv.appendChild(label);
        containerDiv.appendChild(input);

        if (maxLength == "1000") {
            input.style.height = "4vh";
        }

        return containerDiv;
    }

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
                if (data != null && data.success == true) {
                    //ipcRenderer.send(
                    //    "show-success-dialog",
                    //    "La persona fue agregada a la base de datos con exito."
                    //);
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
            this.createInputField(
                "Apellidos: ",
                "text",
                "apellidos",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            this.createInputField(
                "Nombres: ",
                "text",
                "nombres",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            this.createInputField(
                "CIP: ",
                "number",
                "cip",
                "form-inp",
                "9",
                true
            )
        );
        formRegistro.appendChild(
            this.createInputField(
                "DNI: ",
                "number",
                "dni",
                "form-inp",
                "8",
                true
            )
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
                    this.createDropdown(selectedCategory);
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
            this.createInputField(
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

        const colorDropdownWithLabel = this.createDropdownWithLabel(
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

        const modelDropdownWithLabel = this.createDropdownWithLabel(
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

        const brandDropdownWithLabel = this.createDropdownWithLabel(
            "marca-select",
            "Marca:",
            popularBrands
        );

        var btnSubmit = document.createElement("button");
        btnSubmit.className = "registrar-submit";
        btnSubmit.innerText = "Registrar vehículo";

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

    showRegistrarIngreso(contentDiv) {
        contentDiv.innerHTML = "";

        var formDiv = document.createElement("div");
        formDiv.className = "form-div";

        var formRegistro = document.createElement("form");
        formRegistro.className = "form-registro";

        var btnSubmit = document.createElement("button");
        btnSubmit.className = "registrar-submit";
        btnSubmit.innerText = "Registrar ingreso";

        formRegistro.appendChild(
            this.createInputField("DNI", "number", "dni", "form-inp", "9", true)
        );
        formRegistro.appendChild(
            this.createInputField(
                "Apellidos: ",
                "text",
                "apellidos",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            this.createInputField(
                "Nombres: ",
                "text",
                "nombres",
                "form-inp",
                "100",
                true
            )
        );
        formRegistro.appendChild(
            this.createTextArea(
                "Motivo: ",
                "text",
                "motivo",
                "form-inp",
                "1000",
                true
            )
        );
        formRegistro.appendChild(
            this.createInputField(
                "A quien visita: ",
                "text",
                "persona-visitada",
                "form-inp",
                "100",
                true
            )
        );

        formRegistro.appendChild(btnSubmit);

        formDiv.appendChild(formRegistro);
        contentDiv.appendChild(ftopBar());
        contentDiv.appendChild(
            finfoDiv(
                "Registrar ingreso",
                "Llene este formulario para registrar el ingreso de una persona."
            )
        );
        contentDiv.appendChild(formDiv);
    }

    showRegistrarSalida(contentDiv) {
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
}
