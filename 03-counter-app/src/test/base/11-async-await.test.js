import { getImagen } from "../../base/11-async-await";

describe('Prueba de 11-async-await y fetch', () => {
    test('Debe retornar el url de la imagen', async() => {
        const url = await getImagen();
        // console.log(url);
        expect(url.includes('https://')).toBe(true);
    });
});