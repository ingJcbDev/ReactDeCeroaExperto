import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas del archivo 05-funciones.js', () => {
    test('getUser debe retornar un Obj', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest); // toEqual las propiedades son iguales
    });
    test('getUsuarioActivo debe retornar un Obj', () => {
        const nombre = 'Jonier'
        const userActivo = getUsuarioActivo(nombre);


        expect(userActivo).toEqual({
            uid: 'ABC567',
            username: nombre
        }); // toEqual las propiedades son iguales
    });
});
