// operador condicional ternario
const activo = true;

let mensaje = '';

if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}

console.log(mensaje);

//if con else
const mensaje1 = (activo)?'Activo':'Inactivo';
console.log(mensaje1);

//solo if true
const mensaje2 = activo && 'Activo';
console.log(mensaje2);

//solo if false
const mensaje3 = !activo && 'Activo';
console.log(mensaje3);

// or 

//solo if true
const mensaje4 = (activo === true) && 'Activo';
console.log(mensaje4);

//solo if false
const mensaje5 = (activo === false) && 'Activo';
console.log(mensaje5);



