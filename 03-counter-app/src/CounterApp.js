import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    // const [nombre, setNombre] = useState('Goku');
    // console.log(nombre, setNombre)

    // hook
    const [counter, setCounter] = useState(0); // retorna un arreglo con dos valores -> el valor y la funcion
    // console.log(counter)

    const handleAdd = () => {
        setCounter(counter + 1); // Se puede recibir implicito
        // setCounter((c) => c+1); // O Con una function 
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            {/* Sin simplificar */}
            {/* <button onClick={ (e) => { handleAdd(e) } } >+1</button> */}
            {/* Simplificado */}
            <button onClick={handleAdd} >+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;