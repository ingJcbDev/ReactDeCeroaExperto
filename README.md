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


