import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un strint y un number', () => {
        // const arr = retornaArreglo(); 
        // expect(arr).toEqual(['ABC', 123]); // mismas propiedades

        const [letras, numeros] = retornaArreglo(); 
        // console.log(typeof letras); // tipo de elemento
        // console.log(typeof numeros); // tipo de elemento
        expect(letras).toBe('ABC'); // ===
        expect(typeof letras).toBe('string'); // ===
        expect(numeros).toBe(123); // ===
        expect(typeof numeros).toBe('number'); // ===
    }); 
});
