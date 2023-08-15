const oficiales = [
    "General del Ejército",
    "General de División",
    "General de Brigada",
    "Coronel",
    "Teniente Coronel",
    "Mayor",
    "Capitán",
    "Teniente",
    "Alférez",
    "Sub-Teniente",
];

const oficialesAbv = [
    "GRAL EJERCITO",
    "GRAL DIV",
    "GRAL BRIG",
    "CRL",
    "TTE CRL",
    "MY",
    "CAP",
    "TTE",
    "ALFZ",
    "STTE",
];

const tcosyso = [
    "Técnico Jefe Superior",
    "Técnico Jefe",
    "Técnico 1ra",
    "Técnico 2da",
    "Técnico 3ra",
    "Sub-Oficial 1ra",
    "Sub-Oficial 2da",
    "Sub-Oficial 3ra",
];

const tcosysoAbv = [
    "TCO JEFE SUP",
    "TCO JEFE",
    "TCO1",
    "TCO2",
    "TCO3",
    "SO1",
    "SO2",
    "SO3",
];

const tropa = ["Sargento 1ra", "Sargento 2da", "Cabo", "Soldado"];

const tropaAbv = ["SGTO1", "SGTO2", "CABO", "SLDO"];

function ftopBar() {
    var topBar = document.createElement("div");
    topBar.className = "top-bar";

    var welcome = document.createElement("h1");
    welcome.id = "bienvenida-contenido";
    welcome.innerText = "Bienvenido Montañero";
    topBar.appendChild(welcome);

    return topBar;
}

function finfoDiv(titulo, descripcion) {
    var infoDiv = document.createElement("div");
    infoDiv.className = "info-div";

    var descDiv = document.createElement("div");
    descDiv.className = "desc-div";

    var title = document.createElement("h1");
    title.className = "titulo";
    //title.innerText = "Visualizar Personal"
    title.innerText = titulo;
    var desc = document.createElement("p");
    desc.className = "parrafo";
    //desc.innerText = "En esta parte podrás ver la situación actual del personal que esta dentro del fuerte en estos momentos:";
    desc.innerText = descripcion;

    descDiv.appendChild(title);
    descDiv.appendChild(desc);
    infoDiv.appendChild(descDiv);

    return infoDiv;
}

function createDropdown(selectedCategory) {
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

function createDropdownWithLabel(id, labelText, options) {
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

function createInputField(
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

function createTextArea(
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

function obtenerDiaDeGuardia() {
    const now = new Date();
    const intervalStart = new Date();
    const intervalEnd = new Date();

    intervalStart.setHours(3, 0, 0, 0);
    intervalEnd.setHours(3, 0, 0, 0);

    if (now.getHours() < 8) {
        intervalStart.setDate(intervalStart.getDate() - 1);
    } else {
        intervalEnd.setDate(intervalEnd.getDate() + 1);
    }

    const formattedIntervalStart = intervalStart
        .toISOString()
        .replace("T", " ")
        .slice(0, -5);
    const formattedIntervalEnd = intervalEnd
        .toISOString()
        .replace("T", " ")
        .slice(0, -5);

    return `[${formattedIntervalStart}, ${formattedIntervalEnd})`;
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function obtenerDiaReporte(date) {
    return `${formatDate(date)} ${formatTime(date)}`;
}

function obtenerDiaDeGuardiaReporte() {
    const now = new Date();
    const intervalStart = new Date();
    const intervalEnd = new Date();

    intervalStart.setHours(8, 0, 0, 0);
    intervalEnd.setHours(8, 0, 0, 0);

    if (now.getHours() < 8) {
        intervalStart.setDate(intervalStart.getDate() - 1);
    } else {
        intervalEnd.setDate(intervalEnd.getDate() + 1);
    }
    
    return `${obtenerDiaReporte(intervalStart)} - ${obtenerDiaReporte(intervalEnd)}`;
}

