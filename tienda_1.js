function mostrarResumen() {
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const bebidaSeleccionada = document.getElementById('bebidaSeleccionada').value;

    if (nombreUsuario === "" || bebidaSeleccionada === "") {
        alert("¡Completa todos los campos para continuar!");
        return;
    }

    const nombreResumen = document.getElementById('nombreResumen');
    const bebidaResumen = document.getElementById('bebidaResumen');

    nombreResumen.textContent = nombreUsuario;

    switch (bebidaSeleccionada) {
        case "cocacola":
            bebidaResumen.textContent = "Coca-Cola";
            break;
        case "pepsi":
            bebidaResumen.textContent = "Pepsi";
            break;
        case "sprite":
            bebidaResumen.textContent = "Sprite";
            break;
        case "fanta":
            bebidaResumen.textContent = "Fanta";
            break;
        case "guarana":
            bebidaResumen.textContent = "Guaraná";
            break;
        default:
            bebidaResumen.textContent = "Bebida no seleccionada";
    }

    document.getElementById('resumenCompra').style.display = "block";
}
