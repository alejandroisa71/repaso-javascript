// import{nombreTarea, crearTarea, tareaCompletada } from './modulos/exportarFuncion.js'


// console.log(nombreTarea);
// const tarea1 = crearTarea('Pasear al perro', 'Media');

// console.log(tarea1);
// tareaCompletada();

import Tarea from './modulos/exportarClases.js';

const tarea1 = new Tarea ('Aprender JavaScript', 'Urgente');

console.log(tarea1)

tarea1.mostrar();