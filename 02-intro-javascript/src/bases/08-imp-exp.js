// import { heroes } from './data/heroes'; //exportar
import heroes, {owners} from '../data/heroes'; //exportar

// console.log(owners)

export const getHeroeByid0 = (id) => {
    return heroes.find( (heroe) => {
        if(heroe.id === id){
            return true;
        }else{
            return false;
        }
    });
}
// console.log( getHeroeByid0(4) );

const getHeroeByid = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}
// console.log( getHeroeByid(3) );

export const getHeroeByid1 = (id) => heroes.find( (heroe) => heroe.id === id);
// console.log( getHeroeByid1(1) );

export const getHeroeByOwer = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
// console.log( getHeroeByOwer('Marvel') );

