const boton = document.querySelector('button');

boton.addEventListener("click", () => {
    alert("click en el botón")
})

$(() => {
    $(boton).click(() => {console.log("Hola, estoy utilizando jQuery")})
})