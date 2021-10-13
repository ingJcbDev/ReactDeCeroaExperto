import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//imr tab importa react

// hay dos tipos de compones basados en clases y basados en funciones
// functional component

//FC
const PrimeraApp = ({
                        saludo, 
                        subtitulo
                    }) => {

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
            <p>{subtitulo}</p>
        </>
    );
}

// Esto deberia lanzar una alerta pero nada 
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// propiedad por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitul'
}

export default PrimeraApp;