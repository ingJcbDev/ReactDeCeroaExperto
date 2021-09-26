// Funciones en JS

// No declarar funciones asi
/*
function saludar(nombre){
    return `Hola, ${nombre}`;
}

saludar = 30 // Se podria pisar asi 

console.log(saludar('Goku'))
*/

const saludar1 = function (nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar1('Goku1'))

// Funcion de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2('Goku2'))

// Funcion de flecha simplificada
const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('Goku3'))

// Funcion de flecha simplificada SIN ARGUMENTOS
const saludar4 = () => `Hola Mundo`;
console.log(saludar4())

// function que regresa un obj de forma implicita
const getUser = () => ({
    uid: 'ASDFASD',
    username: 'eL_PAPIdELrEGUETON',
});

console.log(getUser())

// Tarea
// 1. Transformar a una function de flecha
// 2. Tiene que retornar un obj implicito
// 3. Pruebas
/*
function getUsuarioActivo(nombre){
    return {
        uid: 'SDF558',
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo('Jonier');
console.log(usuarioActivo)
*/

// Solucion
const getUsuarioActivo = (nombre) => ({
    uid: 'SDSF4532',
    username: nombre,
});
console.log(getUsuarioActivo('Jonier1'));




