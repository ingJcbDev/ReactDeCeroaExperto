/*
* Vamos a simplificar este codigo
const apikey = '8EZgrIzFiRbfJoVYkxD33fzmztdRh00j';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

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
*/

const getImagen = async() => {
    try {
        const apikey = '8EZgrIzFiRbfJoVYkxD33fzmztdRh00j';
        // cons el await espera que la peticion termine
        // para ejecutar la siguiente linea de codigo
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const {data} = await resp.json();
    
        // console.log(data.data);
    
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
    }
}

getImagen();