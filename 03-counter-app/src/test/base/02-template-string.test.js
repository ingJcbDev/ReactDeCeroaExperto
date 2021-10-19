import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Prueba en el archivo -> 02-template-string.js', () => {
    test('getSaludo debe retornar hola y el nombre', () => {
        const nombre = 'Fernando';             

        const saludo = getSaludo(nombre);
        // console.log(saludo); // Se puede poner console.log para ver el retorno

        expect(saludo).toBe('Hola ' + nombre); // ===
    });

    // getSaludo debe de retornar Hola jonier si no hay argumentos en el nombre
    test('getSaludo debe de retornar Hola jonier si no hay argumentos en el nombre', () => {       

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Jonier'); // ===
        
    });    
});
