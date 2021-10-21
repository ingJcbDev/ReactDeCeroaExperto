import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba del archivo 08-imp-exp', () => {
    test('Debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        // console.log(heroe);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });
    test('Debe retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });
    test('Debe retornar heroes DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    });
    test('Debe retornar heroes Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
});
