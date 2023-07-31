class Menu {
    showMenu() {
        var content = document.createElement('div');
        content.className = "content-div";

        var mmenu = document.createElement('div');
        mmenu.className = "menu-div";

        var contentDisp = document.createElement('div');
        contentDisp.className = "content-disp-div";
        contentDisp.id = "cdiv";

        var logo = document.createElement('img');
        logo.id = "cuarta-menu";
        logo.src = "./images/4taBRIGMTÑ.png";

        var menuitems = document.createElement('div');
        menuitems.className = "menu-items-div";

        const buttonsAdmin = ['Inicio', 'Registrar Persona', 'Registrar Vehículo', 'Personal de guardia'];

        (buttonsAdmin.map(name => {
            var item = document.createElement('div');
            item.className = "item-div";
            
            var btn1 = document.createElement('button');
            btn1.className = "btn-menu";
            btn1.innerText = name;

            switch (name) {
                case 'Inicio': 
                    btn1.addEventListener('click', () => {
                        inicio.showInicio(contentDisp);
                        item.style.boxShadow = "0 4px 0 #174A3B";
                    })
                    break;
            }

            item.appendChild(btn1);
            menuitems.appendChild(item);
        }))

        var bottomButtons = document.createElement('div');
        bottomButtons.className = "bottom-buttons-div";

        var loginInfo = document.createElement('div')
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
