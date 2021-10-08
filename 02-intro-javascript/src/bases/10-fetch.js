const apikey = '8EZgrIzFiRbfJoVYkxD33fzmztdRh00j';

// https://api.giphy.com/v1/gifs/random?api_key=8EZgrIzFiRbfJoVYkxD33fzmztdRh00j

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

// Se ve feo y funciona
// peticion.then(resp => {
//     // console.log(resp);
//     resp.json().then(data => {
//         console.log(data)
//     })
// })
// .catch(console.warn);

// Mas limpio con el mismo resultado
// Esto es una promesa en cadena
peticion
.then(resp => resp.json())
.then(({data}) => {
    // console.log(data.images.original.url)
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn);