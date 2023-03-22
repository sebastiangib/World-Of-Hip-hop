import{productos} from '../helpers/baseDatos.js'
import {pintarProductos} from '../helpers/pintarProductos.js'

// Llamando a la fila
let fila=document.getElementById("fila")

// Pintar los productos de la tienda
pintarProductos(productos)

// Escuchando click en la fila contenedora de producto
fila.addEventListener("click",function(evento){

    let datosProductoSeleccionado={}
    let tarjerta=evento.target.parentElement
    datosProductoSeleccionado.foto=tarjerta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjerta.querySelector("h3").textContent
    datosProductoSeleccionado.precio=tarjerta.querySelector("h5").textContent
    datosProductoSeleccionado.descripcion=tarjerta.querySelector("p").textContent
    datosProductoSeleccionado.cantidad=tarjerta.querySelector("input").inputMode

    // Usaremos la memoria del pc para guardar esta info
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))

     window.location.href="./src/views/ampliarInfo.html"
})

let menu = document.getElementById("menu")

window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop>50){
        menu.classList.add("menuSecundario")
        menu.classList.remove("menu")
    }else{
        menu.classList.remove("menuSecundario")
        menu.classList.add("menu")
    }
})