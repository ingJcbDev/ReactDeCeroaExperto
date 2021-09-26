
const nombre = 'Jonier';
const apellido = 'Cabrera';

// Para evitar esta concatenacion utiizamos los Backtick
// const nombreCompleto = nombre +' '+ apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSAludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSAludo(nombre)}`)