import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Este es el test pruebas de 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un Héroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });

    });
});

describe('Debe retornar que el heroe no existe', () => {
    test('Debe retornar que el heroe no existe Héroe async', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });

    });
});
