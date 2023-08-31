// script.js

// Obtener el formulario
const formulario = document.querySelector('form');

// Escuchar el evento de envío del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Obtener los valores de los campos del formulario
    const apellido = document.getElementById('apellido').value;
    const nombre = document.getElementById('nombre').value;
    const nroDNI = document.getElementById('nro_dni').value;
    const fechaNacimiento = document.getElementById('fecha_nac').value;
    const domicilio = document.getElementById('domicilio').value;
    const localidad = document.getElementById('localidad').value;

    // Obtener los valores de los checkboxes y rangos de conocimiento
    const espaniol = document.getElementById('espaniol').checked;
    const ingles = document.getElementById('ingles').checked;
    const frances = document.getElementById('frances').checked;
    const chino = document.getElementById('chino').checked;

    const nivelEspaniol = document.getElementById('nivel_espaniol').value;
    const nivelIngles = document.getElementById('nivel_ingles').value;
    const nivelFrances = document.getElementById('nivel_frances').value;
    const nivelChino = document.getElementById('nivel_chino').value;

    // Mostrar los valores en la consola
    console.log('Apellido:', apellido);
    console.log('Nombre:', nombre);
    console.log('Nro DNI:', nroDNI);
    console.log('Fecha Nacimiento:', fechaNacimiento);
    console.log('Domicilio:', domicilio);
    console.log('Localidad:', localidad);

    console.log('Idiomas:');
    if (espaniol) console.log('- Español (Nivel:', nivelEspaniol + ')');
    if (ingles) console.log('- Inglés (Nivel:', nivelIngles + ')');
    if (frances) console.log('- Francés (Nivel:', nivelFrances + ')');
    if (chino) console.log('- Chino (Nivel:', nivelChino + ')');
});

