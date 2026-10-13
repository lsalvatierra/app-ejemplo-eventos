document.addEventListener("DOMContentLoaded", () => {
    const areaTexto = document.getElementById("txtcomentario")
    const contador = document.getElementById("numcontador")
    const limiteMaximo = 50
    areaTexto.addEventListener("keyup", (evento) => {
        const longitudActual = areaTexto.value.length
        const restantes = limiteMaximo - longitudActual
        contador.textContent = restantes
    })
})