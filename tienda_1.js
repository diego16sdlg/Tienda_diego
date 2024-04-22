
function mostrarResumen() {
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const bebidaSeleccionada = document.getElementById('bebidaSeleccionada').value;
    const dniUsuario = document.getElementById('dniUsuario').value;
    
    if (nombreUsuario === "" || bebidaSeleccionada === "" || dniUsuario === "") {
        alert("¡Completa todos los campos para continuar!");
        return;
    }
    
      if (isNaN(dniUsuario)) {
        alert("¡El DNI solo puede contener números!");
        return;
    }


    const nombreResumen = document.getElementById('nombreResumen');
    const dniResumen = document.getElementById('dniResumen');
    const bebidaResumen = document.getElementById('bebidaResumen');

    nombreResumen.textContent = nombreUsuario;
    dniResumen.textContent = 
        dniUsuario;

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
