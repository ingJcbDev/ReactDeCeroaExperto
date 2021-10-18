# Instalaciones recomendadas - Curso de React

## Instalaciones Necesarias
* [Google Chrome](https://www.google.com/chrome/)

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)

* [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)

* [Visual Studio Code](https://code.visualstudio.com/)

* [Postman](https://www.postman.com/downloads/)

* [Mongo Compass](https://www.mongodb.com/try/download/compass)

* [Git](https://git-scm.com/)

* [Node](https://nodejs.org/es/)


## Extensiones de VSCode
[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

### Configuración del Bracket Pair Colorizer 2

[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
```
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#C497D4"
],
```
### Tema que estoy usando en VSCode:

* [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)

* [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### Instalaciones recomendadas sobre React
* [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

## 9. introduccion a babel

* [babeljs](https://babeljs.io/)

Lo que hace babel es coger javascript moderno y convertirlo a javascript para todos osea que lo puede interpretar hasta el navegador mas viejo

```
const respApi = {
  personas: ['Goku', 'Vegueta']
};

console.log(respApi.personas?.length);
```

## Introduccion a javaScript moderno

* [Documentacion React-app.dev](https://create-react-app.dev/)

* Para ver la version npx
```
npx --version
```
* Para crear una aplicacion React con npx
```
npx create-react-app my-app
```

* Para ejecutar la aplicacion React 
### `npm start`

* Recorrer arreglos map()

* [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```
const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];

// Recorrer un array con la function map
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log( arreglo )
console.log( arreglo2 )
console.log( arreglo3 )
```

* La desestructuración

* [desestructuracion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


* Array.prototype.find()
* [find](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

* Array.prototype.filter()
* [filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

* Promise
* [Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* Fetch API
* [Fetch_API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

* giphy developers
Api de giphy animados
* [developers_giphy](https://developers.giphy.com/)

* App Name ::
ReactCeroExpertoCursoUdemy
* API Key ??:: 
8EZgrIzFiRbfJoVYkxD33fzmztdRh00j
* Description ::
Api de gighy animados para el curso de udemy

* [endpoint#random](https://developers.giphy.com/docs/api/endpoint#random)
api.giphy.com/v1/gifs/random

### Async - Await

* Async -> Asincrónico
* Await -> Esperar

Example

```
const getImagen = async() => {
    try {
        const apikey = '8EZgrIzFiRbfJoVYkxD33fzmztdRh00j';
        // cons el await espera que la peticion termine
        // para ejecutar la siguiente linea de codigo
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
    }
}

getImagen();
```

* Operador ternario

```
//if con else
const mensaje1 = (activo)?'Activo':'Inactivo';
console.log(mensaje1);

//solo if true
const mensaje2 = activo && 'Activo';
console.log(mensaje2);

//solo if false
const mensaje3 = !activo && 'Activo';
console.log(mensaje3);

// or 

//solo if true
const mensaje4 = (activo === true) && 'Activo';
console.log(mensaje4);

//solo if false
const mensaje5 = (activo === false) && 'Activo';
console.log(mensaje5);
```

* Aqui se termina el repaso javascript moderno
* [https://developer.mozilla.org/](https://developer.mozilla.org/es/)


## Sección 4: Primeros pasos en React

### Temas puntuales de la sección

¿Qué veremos en esta sección?

* Nuestra primera aplicación - Hola Mundo

* Exposiciones sobre los componentes

* Creación de componentes (Functional Components)

* Propiedades - Props

* Impresiones en el HTML

* PropTypes

* DefaultProps

* Introducción general a los Hooks

* useState

Es una sección importante, especialmente para todos los que están empezando de cero en React, ya que dará las bases de cómo segmentar la lógica de nuestra aplicación en pequeñas piezas más fáciles de mantener.


31. Primera aplicación de React

* [create-react-app](https://create-react-app.dev/)

```
npx create-react-app my-app
cd my-app
npm start
```

41. Componente CounterApp

para ver el privew de un GIS

VIEW -> Command Palette -> markdown: open Preview

rafcp -> Crea funcional componen con propTypes

42. Evento click (Eventos en general)


* [Eventos](https://es.reactjs.org/docs/events.html)
para ver los eventos del html que interactuan react










## Sección 5: Pruebas uniarias y de integracion - probando las secciones anteriores

