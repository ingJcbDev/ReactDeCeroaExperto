describe('Pruebas en el archivo demo.test,js', () => {

    test('Debe ser un true', () => {
        const isActive = true;
    
        if (isActive) {
            // throw new Error('No esta Activo'); // Esta linea de codigo muestra el error
        
        // 1. inicializacion        
        const mensaje = 'Hola mundo';
    
        // 2. estimulo
        const mensaje2 = `Hola mundo`;
    
        expect(mensaje).toBe(mensaje2); // ===
    
        }
    
    });        
});