// variables y Constantes

// Constantes variables que no van a cambiar
// const

// Variable el cual el valor cambia
// let

const nombre = 'Jonier';
const apellido = 'Cabrera';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// var Nose debe usar ...
// muchas inconsistencias al usar el tipo de variable var
if(true){
    // dentro de este scope la variable se le asigna este valor afuera del scope cambia
    let valorDado = 6;
    console.log(valorDado)

    // Se permite porque no hay una variable const con el mismo nombre dentro de este scope
    const nombre = 'pepito';
    console.log(nombre)
}

console.log(valorDado)