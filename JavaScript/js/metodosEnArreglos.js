const personas=[
    {nombre:'Juan', edad:50,aprendiendo:'JavaScript'},
    {nombre:'Pablo', edad:12,aprendiendo:'PHP'},
    {nombre:'Adrian', edad:21,aprendiendo:'Adobe'},
    {nombre:'Oscar', edad:30,aprendiendo:'Python'},
    {nombre:'Luis', edad:35,aprendiendo:'ReactJS'},
]

console.log(personas);

// mayores de 28 años
const mayores=personas.filter(persona=>{
return persona.edad > 28
});

console.log(mayores);


// que aprende Adrian y su edad

const adrian = personas.find(persona =>{
    return persona.nombre==='Adrian'
});

console.log(adrian);



let total = personas.reduce((edadTotal,persona)=>{
    return edadTotal + persona.edad;
},0);

console.log(total)

