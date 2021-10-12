import React, { Fragment } from 'react';

//imr tab importa react

// hay dos tipos de compones basados en clases y basados en funciones
// functional component

//FC
const PrimeraApp = () => {
    return (
        //div incesario de optimiza Fragment
        // <div>
        //     <h1>Hola Mundo</h1>
        //     <p>M primera aplicacion</p>
        // </div>
        // Fragment forma larga
        // <Fragment>
        //     <h1>Hola Mundo</h1>
        //     <p>M primera aplicacion</p>
        // </Fragment>
        // Fragment forma Corta
        <>
            <h1>Hola Mundo</h1>
            <p>M primera aplicacion</p>
        </>
    );
}

export default PrimeraApp;