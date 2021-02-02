const banda = 'Sui Generis'
const genero= 'Rock Progresivo'
const canciones=['Cancion para mi muerte', 'Aprendizaje', 'Necesito'];

//forma anterior

const grupo ={
    banda:banda,
    genero:genero,
    canciones:canciones
}

console.log(grupo);

// forma nueva

const grupo1 = {banda,genero,canciones}
console.log(grupo1)