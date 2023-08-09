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
    "CRNL",
    "TTE CRNL",
    "MY",
    "CAP",
    "TTE",
    "ALFZ",
    "SUB TTE",
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
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    const startOfPreviousDay = new Date(startOfDay);
    startOfPreviousDay.setDate(startOfDay.getDate() - 1);

    const intervalStart = new Date(startOfPreviousDay);
    intervalStart.setHours(8, 0, 0, 0);

    const intervalEnd = new Date(startOfDay);
    intervalEnd.setHours(8, 0, 0, 0);
    if (now.getHours() === 0) {
        intervalEnd.setDate(intervalEnd.getDate() + 1);
    }

    const formattedIntervalStart = intervalStart.toISOString().replace("T", " ").slice(0, -5);
    const formattedIntervalEnd = intervalEnd.toISOString().replace("T", " ").slice(0, -5);

    return `[${formattedIntervalStart}, ${formattedIntervalEnd})`;
}

