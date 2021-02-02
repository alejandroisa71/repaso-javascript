const persona={
    nombre:'Juan',
    trabajo:'Desarrollador Web',
    edad:500,
    musicaRock:true,
    // mostrarInformacion:function(){
    //     console.log(`${this.nombre} es ${this.trabajo}`)
    // }
    // forma resumida
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo}`)
     }
}

persona.mostrarInformacion();