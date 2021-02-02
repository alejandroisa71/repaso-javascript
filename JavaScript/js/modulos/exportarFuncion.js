export const nombreTarea= 'Pasear al perro';

export const crearTarea=(tarea,urgencia)=>{
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada=()=>{
    console.log('La tarea se completo');
}
//Escribir clases

class Tarea{
    constructor(nombre,prioridad){
        this.nombre= nombre;
        this.prioridad=prioridad
    }
    mostrar(){
       console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad);
        this.cantidad=cantidad;
    }
    mostrar(){
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);
     }
     //se agrega otro metodo
     hola(){
         return'hola';
     }
}

//crear los objetos

// let tarea1 = new Tarea('Aprender JavaScript', 'Alta');

// console.log(tarea1.mostrar())

//Compras
let compra1= new ComprasPendientes('Jabon','Urgente',5);

// compra1.mostrar();
// console.log(compra1.hola())
