import React from 'react'; // importacion de react
import ReactDOM  from 'react-dom'; // Importacion del react dom
import PrimeraApp from './PrimerApp';
// import CounterApp from './CounterApp';

import './index.css';

// const saludo = <h1>Hola mundo</h1>;

// Referencia  
const divRoot = document.querySelector('#app');
// renderizar 
// ReactDOM.render(<PrimeraApp /> , divRoot);
// ReactDOM.render(<CounterApp value={10}/> , divRoot);
ReactDOM.render(<PrimeraApp saludo='Hola soy goku'/> , divRoot);
