//Arreglos y Map

// con forEach
// const carrito=['Producto 1', 'Producto 2', 'Producto 3'];

// console.log(carrito);


// const appContenedor =document.querySelector('#app');
// // appContenedor.innerHTML = carrito;
// let html=""
// carrito.forEach(producto=>{
//     html += `<li>${producto}</li>`
// })
// appContenedor.innerHTML=html;


//con Map
carrito=['Producto 1', 'Producto 2', 'Producto 3'];

carrito.map(producto=>{
    return 'El producto es '+ producto;
});
