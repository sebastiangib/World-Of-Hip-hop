// Llamo a la memoria para accerder a los datos guardados:
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let titulo=document.getElementById("titulo")
titulo.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

let cantidad=document.getElementById("cantidad")
cantidad.inputMode=infoProducto.cantidad

let infoCarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora")
if(infoCarrito != null){
    carrito=infoCarrito
    pildora.textContent=carrito.length
}else{
    carrito=[]
}

let botonagregarProducto=document.getElementById("btnagregarcarrito")

botonagregarProducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
})

let botonvaciarCarrito=document.getElementById("vaciarcarrito")

botonvaciarCarrito.addEventListener("click",function(){
    carrito=[]
    pildora.textContent=carrito.length
})


function subTotal() {
    const precioTexto = document.getElementById("precio").textContent;
    const precio = parseFloat(precioTexto);
    console.log("Precio: " + precio);
  
    if (isNaN(precio)) {
      alert("Error: El precio no es un número válido");
      return NaN;
    } else {
      const cantidadTexto = document.getElementById("cantidad").value;
      const cantidad = parseInt(cantidadTexto);
      console.log("Cantidad: " + cantidad);
  
      if (isNaN(cantidad)) {
        alert("Error: La cantidad no es un número válido");
        return NaN;
      } else {
        const total = precio * cantidad;
        console.log("Total en pesos: " + total);
        document.getElementById('mensaje').innerHTML = "El total es: $" + total;
        return total;
      }
    }
  }

 function conversor() {
    const dolar = 4824.35;
    const totalEnPesos = subTotal();
  
    if (isNaN(totalEnPesos)) {
      console.log("Total en pesos inválido: " + totalEnPesos);
      alert("Error: El total es un número inválido");
    } else {
        
      const totalEnDolares = totalEnPesos / dolar;
      console.log("Total en dólares: " + totalEnDolares);
      document.getElementById('conversor').innerHTML = "El total en dolares es: $" + totalEnDolares.toFixed(2);
    }
  }