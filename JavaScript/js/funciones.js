

function saludar(nombre){
   console.log(`Bienvenido ${nombre}`)
};

saludar('Juan');

// un solo parametro no lleva parentesis ni llaves ni return
const cliente = nombreCliente=>`Mostrando nombre del cliente ${nombreCliente}`;

console.log(cliente('Ricardo'))


//Mas de un parametro hya que poner parentesis
const clienteCompleto = (nombreCliente, apellidoCliente)=>{
   console.log(`Cliente completo: ${nombreCliente} ${apellidoCliente}`)
}

cliente('Juan');
clienteCompleto('Pedro', 'Martinez');


//Objetos con Object Literal
const persona={
   nombre:'Juan',
   profesion:'Arquitecto',
   edad: 50
};

console.log(persona)

function mostrarInformacionTarea(tarea, prioridad){
   return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;

}

//Object Constructor
function Tarea(nombre, urgencia){
   this.nombre=nombre;
   this.urgencia=urgencia;
}

const tarea1 = new Tarea('Correr', 'alta');
console.log(tarea1)

//prototypes



Tarea.prototype.mostrarInformacionTarea=function(){
   return `La tarea ${this.nombre} tiene una prioridad de ${this.prioridad}`;

}


// crear una nueva tarea

const tarea2 = new Tarea('Aprender Javascript y Angular', 'Urgente');
console.log(tarea2)

const mostrarInfo= mostrarInformacionTarea(tarea2.nombre, tarea2.urgencia)
console.log(mostrarInfo);
