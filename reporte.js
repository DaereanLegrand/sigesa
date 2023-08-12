var inicio = new Inicio();
var persona = new Persona();
var vehiculo = new Vehículo();

function mostrarReportes() {
    const diaReporte = document.getElementById("reporte-dia");
    const reportePersonas = document.getElementById("reporte-personas");
    const reporteVehiculos = document.getElementById("reporte-vehiculos");

    diaReporte.innerText = obtenerDiaDeGuardiaReporte();
    reportePersonas.appendChild(inicio.createTablaPersonal());
    reporteVehiculos.appendChild(inicio.createTablaVehiculos());

    document.getElementById("imprimir").addEventListener('click', (event) => {
        event.preventDefault();

        event.target.hidden = true;
        window.print();
        event.target.hidden = false;
    })
}