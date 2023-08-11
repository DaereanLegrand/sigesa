let lastClicked = null;
let lastClickedU = null;

class Menu {
    showMenuAdmin() {
        var content = document.createElement("div");
        content.className = "content-div";

        var mmenu = document.createElement("div");
        mmenu.className = "menu-div";

        var contentDisp = document.createElement("div");
        contentDisp.className = "content-disp-div";
        contentDisp.id = "cdiv";

        var logo = document.createElement("img");
        logo.id = "cuarta-menu";
        logo.src = "./images/4taBRIGMTÑ.png";

        var menuitems = document.createElement("div");
        menuitems.className = "menu-items-div";

        const buttonsAdmin = [
            "Inicio",
            "Registrar Persona",
            "Registrar Vehículo",
            "Personal de guardia",
            "Generación de BARCODES",
        ];

        buttonsAdmin.map((name) => {
            var item = document.createElement("div");
            item.className = "item-div";

            var btn1 = document.createElement("button");
            btn1.className = "btn-menu";
            btn1.innerText = name;

            switch (name) {
                case "Inicio":
                    btn1.addEventListener("click", () => {
                        if (lastClicked != null) {
                            lastClicked.style.boxShadow = "0 4px 0 #8a8d8f";
                        }

                        inicio.showInicio(contentDisp);
                        item.style.boxShadow = "0 4px 0 #174A3B";

                        lastClicked = item;
                    });
                    break;
                case "Registrar Persona":
                    btn1.addEventListener("click", () => {
                        if (lastClicked != null) {
                            lastClicked.style.boxShadow = "0 4px 0 #8a8d8f";
                        }

                        registrar.showRegistrarPersona(contentDisp);
                        item.style.boxShadow = "0 4px 0 #174A3B";

                        lastClicked = item;
                    });
                    break;
                case "Registrar Vehículo":
                    btn1.addEventListener("click", () => {
                        if (lastClicked != null) {
                            lastClicked.style.boxShadow = "0 4px 0 #8a8d8f";
                        }

                        registrar.showRegistrarVehiculo(contentDisp);
                        item.style.boxShadow = "0 4px 0 #174A3B";

                        lastClicked = item;
                    });
                    break;
                case "Generación de BARCODES":
                    btn1.addEventListener("click", () => {
                        if (lastClicked != null) {
                            lastClicked.style.boxShadow = "0 4px 0 #8a8d8f";
                        }

                        barcode.showGenBarcode(contentDisp);
                        item.style.boxShadow = "0 4px 0 #174A3B";

                        lastClicked = item;
                    });

                    break;
            }

            item.appendChild(btn1);
            menuitems.appendChild(item);
        });

        var loginInfo = document.createElement("div");
        loginInfo.className = "login-info";
        loginInfo.innerText = "BIENVENIDO";

        mmenu.appendChild(loginInfo);
        mmenu.appendChild(logo);
        mmenu.appendChild(menuitems);
        content.appendChild(mmenu);
        content.appendChild(contentDisp);
        return content;
    }

    showMenuUsuario() {
        var content = document.createElement("div");
        content.className = "content-div";

        var mmenu = document.createElement("div");
        mmenu.className = "menu-div";

        var contentDisp = document.createElement("div");
        contentDisp.className = "content-disp-div";
        contentDisp.id = "cdiv";

        var logo = document.createElement("img");
        logo.id = "cuarta-menu";
        logo.src = "./images/4taBRIGMTÑ.png";

        var menuitems = document.createElement("div");
        menuitems.className = "menu-items-div";

        const buttonsAdmin = [
            "Inicio",
            "Registrar Ingreso",
            "Registrar Salida",
            "Personal de guardia",
        ];

        buttonsAdmin.map((name) => {
            var item = document.createElement("div");
            item.className = "item-div";

            var btn1 = document.createElement("button");
            btn1.className = "btn-menu";
            btn1.innerText = name;

            switch (name) {
                case "Inicio":
                    btn1.addEventListener("click", () => {
                        if (lastClickedU != null) {
                            lastClickedU.style.boxShadow = "0 4px 0 #8a8d8f";
                        }

                        inicio.showInicio(contentDisp);
                        item.style.boxShadow = "0 4px 0 #174A3B";

                        lastClickedU = item;
                    });
                    break;
                case "Registrar Ingreso":
                    btn1.addEventListener("click", () => {
                        if (lastClickedU != null) {
                            lastClickedU.style.boxShadow = "0 4px 0 #8a8d8f";
                        }

                        registrar.showRegistrarIngresoPersonas(contentDisp);
                        item.style.boxShadow = "0 4px 0 #174A3B";

                        lastClickedU = item;
                    });
                    break;
                case "Registrar Salida":
                    btn1.addEventListener("click", () => {
                        if (lastClickedU != null) {
                            lastClickedU.style.boxShadow = "0 4px 0 #8a8d8f";
                        }

                        registrar.showRegistrarSalida(contentDisp);
                        item.style.boxShadow = "0 4px 0 #174A3B";

                        lastClickedU = item;
                    });
                    break;
            }

            item.appendChild(btn1);
            menuitems.appendChild(item);
        });

        var loginInfo = document.createElement("div");
        loginInfo.className = "login-info";
        loginInfo.innerText = "BIENVENIDO";

        mmenu.appendChild(loginInfo);
        mmenu.appendChild(logo);
        mmenu.appendChild(menuitems);
        content.appendChild(mmenu);
        content.appendChild(contentDisp);
        return content;
    }
}
