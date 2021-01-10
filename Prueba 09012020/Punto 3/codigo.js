var id, nombre, apellido, correo, telefono, pais;
let tablaPersonas;

window.onload = cargar();

function cargar() {
    this.tablaPersonas = new Array();
}

function insertar() {
    nombre = document.getElementById("nombrePer").value;
    apellido = document.getElementById("apellidoPer").value;
    correo = document.getElementById("correoPer").value;
    telefono = document.getElementById("telefonoPer").value;
    pais = document.getElementById("paisPer").value;

    var persona = {
        id: 0,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        pais: pais
    };

    crearTabla(insertarRegistro(persona));
    console.log(this.tablaPersonas);
}

function insertarRegistro(persona) {
    persona.id = this.tablaPersonas.length;
    this.tablaPersonas.push(persona);
    return this.tablaPersonas;
}

function crearTabla(tablaPersonas) {
    var dataSet = [];
    if (tablaPersonas.length > 0) {
        for (i = 0; i < tablaPersonas.length; i++) {
            var item = [];
            item.push(
                tablaPersonas[i].id,
                tablaPersonas[i].nombre,
                tablaPersonas[i].apellido,
                tablaPersonas[i].correo,
                tablaPersonas[i].telefono,
                tablaPersonas[i].pais,
                '<input class="btn btn-danger" type="button" onclick="eliminar(' + tablaPersonas[i].id + ');" value="Eliminar" />',
            );
            dataSet.push(item);
        }
        $('#tablaP').DataTable({
            "bDestroy": true,
            data: dataSet,
            columns: [
                { title: "Id" },
                { title: "Nombre" },
                { title: "Apellido" },
                { title: "Correo" },
                { title: "Teléfono" },
                { title: "país" },
                { title: "Eliminar" },
            ]
        });
    }
}

function eliminar(id) {
    this.tablaPersonas.splice(id, 1);
    crearTabla(this.tablaPersonas);
}