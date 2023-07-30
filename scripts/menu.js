class Menu {
    showMenu() {
        var content = document.createElement('div');
        content.className = "content-div";

        var mmenu = document.createElement('div');
        mmenu.className = "menu-div";

        var logo = document.createElement('img');
        logo.id = "cuarta-menu";
        logo.src = "./images/4taBRIGMTÑ.png";

        var menuitems = document.createElement('div');
        menuitems.className = "menu-items-div";

        /*
        var item = document.createElement('div');
        item.className = "item";
        
        var btn1 = document.createElement('button');
        btn1.id = "btn1";
        btn1.innerText = "Inicio";

        item.appendChild(btn1);
        menuitems.appendChild(item);
        */

        const buttonsAdmin = ['Inicio', 'Registrar Persona', 'Registrar Vehículo', 'Personal de guardia'];

        (buttonsAdmin.map(name => {
            var item = document.createElement('div');
            item.className = "item-div";
            
            var btn1 = document.createElement('button');
            btn1.className = "btn-menu";
            btn1.innerText = name;

            item.appendChild(btn1);
            menuitems.appendChild(item);
        }))

        var loginInfo = document.createElement('div')
        loginInfo.className = "login-info";
        loginInfo.innerText = "BIENVENIDO";

        mmenu.appendChild(loginInfo);
        mmenu.appendChild(logo);
        mmenu.appendChild(menuitems);
        content.appendChild(mmenu);
        return content;
    }
}
