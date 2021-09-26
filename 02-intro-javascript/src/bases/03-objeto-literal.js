const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    direccion: {
        ciudad: 'Cali',
        zip: 65656556,
        lat: 14.556565,
        lng: 34.56545
    },
    edad: 45, //dejarlo con coma la finalizar el obj son buenas practicas
}

const persona3 = {
    nombre: 'Tony',
    apellido: 'Stark',
    direccion: {
        ciudad: 'Cali',
        zip: 65656556,
        lat: 14.556565,
        lng: 34.56545
    },
    edad: 45, //dejarlo con coma la finalizar el obj son buenas practicas
}

const persona2 = persona; // no realizar esta asignacion porque esto cambiaria la referencia
persona2.nombre = 'Peter';

console.table(persona)

console.log({persona})

console.log({persona2})

const persona4 = {...persona3}; // Esta si es una buena practica porque se clona el obj
persona4.nombre = 'Peter';

console.table(persona3)

console.log({persona3})

console.log({persona4})

