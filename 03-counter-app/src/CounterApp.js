import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const handleAdd = (e) => { 
        console.log(e)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
            {/* Sin simplificar */}
            {/* <button onClick={ (e) => { handleAdd(e) } } >+1</button> */}
            {/* Simplificado */}
            <button onClick={  handleAdd } >+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;