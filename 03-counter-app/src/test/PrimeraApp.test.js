import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimerApp";

describe('Prueba PrimeraApp', () => {
   test('Debe de mostrar "Hola soy goku"', () => {
       const saludo = 'Hola soy goku';

       const {getByText} = render(<PrimeraApp saludo={saludo}/>);
       expect( getByText(saludo )).toBeInTheDocument();
   });
});
