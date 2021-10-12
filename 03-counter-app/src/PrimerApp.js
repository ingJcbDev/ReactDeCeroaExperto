import React, { Fragment } from 'react';

//imr tab importa react

// hay dos tipos de compones basados en clases y basados en funciones
// functional component

//FC
const PrimeraApp = () => {

    const saludo = 'Hola Mundo';

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>M1 primera aplicacion</p>
        </>
    );
}

export default PrimeraApp;