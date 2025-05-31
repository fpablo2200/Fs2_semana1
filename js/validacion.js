
    const hoyfecha = new Date().toISOString().split('T')[0];
    document.getElementById('fechaNacimiento').setAttribute('max', hoyfecha);

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const telefono = document.getElementById('telefono');
    const rutInput = document.getElementById("rut");
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const direccion = document.getElementById('direccion');


    let txt = "";

    if(nombre.value === ''){
        txt  += "Complete el campo nombre.\n";
        nombre.classList.add("is-invalid");
    }
    if(apellido.value === ''){
        txt  += "Complete el campo apellido.\n";
        apellido.classList.add("is-invalid");
    }
    if(telefono.value === ''){
        txt  += "Complete el campo telefono.\n";
        telefono.classList.add("is-invalid");
    }else{
        if (telefono.value.length !== 9) {
            txt  += "El teléfono debe tener 9 dígitos.\n";
            telefono.classList.add("is-invalid");
        }
    }
    if(rutInput.value === ''){
        txt  += "Complete el campo rut.\n";
        rutInput.classList.add("is-invalid");
    }else{
        let valor = rutInput.value;
        valor = valor.replace(/[^1-9kK\-]/g, "");
        if (valor.length < 8 || valor.length > 10) {
            rutInput.classList.add("is-invalid");
        }
    }
    if(fechaNacimiento.value === ''){
        txt  += "Complete el campo fechaNacimiento.\n";
        fechaNacimiento.classList.add("is-invalid");
    }
    if(direccion.value === ''){
        txt  += "Complete el campo direccion.\n";
        direccion.classList.add("is-invalid");
    }



    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    if (fechaNac >= hoy) {
        txt  += "La fecha de cumpleaños debe ser anterior a hoy..\n";
    }

    if(txt === ""){
        alert('Formulario enviado correctamente.');
    }
    else{
        alert('Se deben completar los siguientes campos.\n' + txt);
    }

});
