document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("chkterminos")
    const bontoncontinuar = document.getElementById("btncontinuar")

    checkbox.addEventListener("change", () => {
        if(checkbox.checked){
            bontoncontinuar.disabled = false
        } else {
            bontoncontinuar.disabled = true
        }
    })
})