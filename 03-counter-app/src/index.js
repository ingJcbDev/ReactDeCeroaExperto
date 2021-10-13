import React from 'react'; // importacion de react
import ReactDOM  from 'react-dom'; // Importacion del react dom
import PrimeraApp from './PrimerApp';
import './index.css';

const saludo = <h1>Hola mundo</h1>;

// Referencia  
const divRoot = document.querySelector('#app');
// renderizar 
ReactDOM.render(<PrimeraApp saludo="Hola soy Goku"/> , divRoot);
