document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btncontador")
    const resultado = document.getElementById("txtresultado")

    let contador = 0

    boton.addEventListener("click", () => {
        contador++
        resultado.textContent = contador
    })

})