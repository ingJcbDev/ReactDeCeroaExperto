import React from "react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


import PrimeraApp from "../PrimerApp";

describe('Prueba PrimeraApp', () => {
//    test('Debe de mostrar "Hola soy goku"', () => {
//        const saludo = 'Hola soy goku';

//        const {getByText} = render(<PrimeraApp saludo={saludo}/>);
//        expect( getByText(saludo )).toBeInTheDocument();
//    });

test('Debe de mostrar primera prueba correctamente', () => {
    const saludo = 'Hola soy goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

    expect(wrapper).toMatchSnapshot();
})

});
