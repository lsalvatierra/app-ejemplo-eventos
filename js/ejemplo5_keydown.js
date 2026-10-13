document.addEventListener("DOMContentLoaded", () => {
    const txtproducto = document.getElementById("txtproducto")
    const listaProductos = document.getElementById("lista-productos")

    txtproducto.addEventListener("keydown", (evento) => {
        //Verificar si la tecla ENTER es presionada
        if(evento.key === 'Enter'){
            const texto = txtproducto.value.trim()
            if(texto !== ""){
                //crear la etiqueta li: <li></li>
                const liItem = document.createElement("li")
                //agregar el texto a la etiqueta li: <li>[Nombre del producto]</li>
                liItem.textContent = texto
                //agregando la etiqueta li a ul: <ul><li>[Nombre del producto]</li></ul>
                listaProductos.appendChild(liItem)
                txtproducto.value = ""
            }
        }

    })
})