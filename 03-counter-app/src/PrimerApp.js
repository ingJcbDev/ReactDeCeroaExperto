import React, { Fragment } from 'react';
import ProTypes from 'prop-types';

//imr tab importa react

// hay dos tipos de compones basados en clases y basados en funciones
// functional component

//FC
const PrimeraApp = ({saludo}) => {

    // const saludo = 'Hola Mundo';

    // console.log(props)

    // Esta podria ser una validacion pero ocupa mucha memoria
    // if(!saludo){
    //     throw new Error('El saludo es necesario');
    // }    

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>M1 primera aplicacion</p>
        </>
    );
}

// Esto deberia lanzar una alerta pero nada 
PrimeraApp.proTypes = {
    saludo: ProTypes.string.isRequired
}

export default PrimeraApp;