var bwipjs = require("bwip-js");

function auxiliar() {
    document.getElementById("imprimir").addEventListener("click", (event) => {
        event.preventDefault();

        event.target.hidden = true;
        window.print();
        event.target.hidden = false;
    });
}

function createBarcode(data) {
    bwipjs.toBuffer({ bcid: "code39", text: data }, function (err, png) {
        if (err) {
            document.getElementById("output").textContent = err;
        } else {
            document.getElementById("myimg").src =
                "data:image/png;base64," + png.toString("base64");
        }
    });
}

function multiBarcode() {
    const mbody = document.getElementById("main-div");
    mbody.style.display = "flex";
    mbody.style.flexWrap = "wrap";

    fetch("https://localhost:8080/obtenerPlacaVehiculo")
        .then((response) => response.json())
        .then((data) => {
            data.data.forEach((info) => {
                console.log(info);
                const barcodeDiv = document.createElement("div");
                barcodeDiv.className = "barcode-div";
                const barcodeP = document.createElement("p");
                barcodeP.innerText = info.placa;
                const barcodeImg = document.createElement("img");
                bwipjs.toBuffer(
                    { bcid: "code39", text: info.placa },
                    function (err, png) {
                        barcodeImg.src =
                            "data:image/png;base64," + png.toString("base64");
                    }
                );

                barcodeDiv.appendChild(barcodeP);
                barcodeDiv.appendChild(barcodeImg);
                mbody.appendChild(barcodeDiv);
            });
        });
}
