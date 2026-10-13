document.addEventListener("DOMContentLoaded", () => {
    const txttelefono = document.getElementById("txttelefono")
    const mensajeError = document.getElementById("mensaje-error")

    txttelefono.addEventListener("keydown", (evento) => {
        //Definimos un arreglo de teclas permitidas
        const teclasPermitidas = ["Backspace","Delete","ArrowLeft","ArrowRight","Tab"]
        if(teclasPermitidas.includes(evento.key)){
            return;//Permitir la acción de la tecla y no ejecuta el codigo siguiente...
        }
        if(/\D/.test(evento.key)){
            evento.preventDefault()
            mensajeError.style.display = 'block'
        }else{
            mensajeError.style.display = 'none'
        }
    })
})