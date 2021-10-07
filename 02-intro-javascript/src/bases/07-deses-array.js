// desestructuracion con arreglos

// declaracion de array
const personajes = ['Goku', 'Vegeta', 'Trunks'];
//desestructuracion
const [,,p3] = personajes;
//print
console.log(p3)

console.log('*----------------------------------*')

const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

console.log('*----------------------------------*')

//Tarea 
// 1. el primer valor del arr se llamara nombre
// 2. Se llamara Setmonbre
const userEstado = ( valor ) => {
    return [valor, ()=>{ console.log('Hola Mundo') }];
}

const [nombre, setNombre] = userEstado('Goku');


console.log(nombre);
setNombre();

