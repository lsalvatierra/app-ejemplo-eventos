document.addEventListener("DOMContentLoaded", () => {
    const mensaje = document.getElementById("mensajepreferencia")
    const opcionesradio = document.querySelectorAll("input[name='lenguage']")

    opcionesradio.forEach(radio => {
        radio.addEventListener("change", (evento) => {
            mensaje.textContent = `Tu lenguaje favorito es: ${evento.target.value}`
        })
    })

})