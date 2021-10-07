// Desestructuracion
// Asignacion desestructurante

// Sin desestructurar
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// desestructurado
const {nombre:nombre2} = persona;

console.log('-------------------------------');
console.log(nombre2);

// desestructurado
const {nombre,edad,clave} = persona;

console.log('-------------------------------');
console.log(nombre);
console.log(edad);
console.log(clave);


// Desestructuracion con funcion
const retornaPersona = (usuario) => {
    const {nombre,edad,clave} = usuario;
    console.log('-------------------------------');
    console.log(nombre,edad,clave);
}

retornaPersona(persona);

// Desestructuracion con funcion desde el argumento
const retornaPersona1 = ({nombre, edad, rango = 'Capitan'}) => {
    console.log('-------------------------------');
    console.log(nombre,edad,rango);
}

retornaPersona1(persona);

// Desestructuracion con funcion desde el argumento con retorno

const retornaPersona2 = ({clave, edad }) => {
    console.log('-------------------------------');
    return {
        nombreClave:clave,
        anios: edad
    }
}

const {nombreClave, anios} = retornaPersona2(persona);

console.log(nombreClave, anios);

const retornaPersona3 = ({clave, edad }) => {
    console.log('-------------------------------');
    return {
        nombreClave3:clave,
        anios3: edad,
        latlng: {
            lat: 14.55668,
            lng: -12.5554
        }
    }
}

const {nombreClave3, anios3, latlng} = retornaPersona3(persona);

console.log(nombreClave3, anios3);
console.log(latlng);

const retornaPersona4 = ({clave, edad }) => {
    console.log('-------------------------------');
    return {
        nombreClave4:clave,
        anios4: edad,
        latlng: {
            lat: 14.55668,
            lng: -12.5554
        }
    }
}

const {nombreClave4, anios4, latlng:{lat, lng}} = retornaPersona4(persona);

console.log(nombreClave4, anios4);
console.log(lat,lng);



