// import heroes, {owners} from '../data/heroes'; //exportar
import {getHeroeByid1} from './08-imp-exp';
// import heroes from './data/heroes';

// console.log();

const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const p1 = getHeroeByid1(2);
        resolve(p1);

        // reject('No se pudo cargar el heroe');
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe', heroe)
}).catch(err => console.log(err));


const getHeroeByIdAsync = (id) =>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const p2 = getHeroeByid1(id);
            if(p2){
                resolve(p2);
            }else{
                reject('No se pudo cargar el heroe');
            }
        }, 4000);
    });
    
}

getHeroeByIdAsync(10)
.then( heroe1 => console.log('Heroe1', heroe1))
.catch(err => console.warn(err));

getHeroeByIdAsync(10)
.then( console.log)
.catch(console.warn);
