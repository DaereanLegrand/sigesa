const oficiales = ['General del Ejército', 'General de División', 'General de Brigada', 'Coronel', 'Teniente Coronel', 'Mayor', 'Capitán', 'Teniente', 'Alférez', 'Sub-Teniente'];

const oficialesAbv = ['GRAL EJERCITO', 'GRAL DIV', 'GRAL BRIG', 'CRNL', 'TTE CRNL', 'MY', 'CAP', 'TTE', 'ALFZ', 'SUB TTE'];

const tcosyso = ['Técnico Jefe Superior', 'Técnico Jefe', 'Técnico 1ra', 'Técnico 2da', 'Técnico 3ra', 'Sub-Oficial 1ra', 'Sub-Oficial 2da', 'Sub-Oficial 3ra'];

const tcosysoAbv = ['TCO JEFE SUP', 'TCO JEFE', 'TCO1', 'TCO2', 'TCO3', 'SO1', 'SO2', 'SO3'];

const tropa = ['Sargento 1ra', 'Sargento 2da', 'Cabo', 'Soldado'];

const tropaAbv = ['SGTO1', 'SGTO2', 'CABO', 'SLDO'];



function ftopBar() {
    var topBar = document.createElement('div');
    topBar.className = "top-bar";

    var welcome = document.createElement('h1');
    welcome.id = "bienvenida-contenido";
    welcome.innerText = "Bienvenido Montañero";
    topBar.appendChild(welcome);

    return topBar;
}

function finfoDiv(titulo, descripcion) {
    var infoDiv = document.createElement('div');
    infoDiv.className = "info-div";
    
    var descDiv = document.createElement('div');
    descDiv.className = "desc-div";

    var title = document.createElement('h1');
    title.className = "titulo";
    //title.innerText = "Visualizar Personal"
    title.innerText = titulo;
    var desc = document.createElement('p');
    desc.className = "parrafo";
    //desc.innerText = "En esta parte podrás ver la situación actual del personal que esta dentro del fuerte en estos momentos:";
    desc.innerText = descripcion;

    descDiv.appendChild(title);
    descDiv.appendChild(desc);
    infoDiv.appendChild(descDiv);

    return infoDiv;
}
