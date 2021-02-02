// Spread Operator
let lenguajes=['Javascript', 'PHP', 'Python'];
let frameworks=['ReactJS','Laravel','Django'];

// unir los arreglos en uno solo
//antiguo
let combinacion = lenguajes.concat(frameworks);
console.log(combinacion)
// actual

let combinacion1=[...lenguajes,...frameworks]
console.log(combinacion1)


const suma = (a,b,c) =>{console.log(a+b+c)};


const numeros=[1,2,4]

suma(...numeros)