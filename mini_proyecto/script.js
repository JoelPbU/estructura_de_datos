let agregarBoton = document.getElementById("agregar")
let tarea = document.getElementById("tarea")
let lista = document.getElementById("lista")
let contador = document.getElementById("contador")

function agregarTarea(){
   
    const li = document.createElement("li")
    li.textContent = tarea.value;
    const btn = document.createElement("button")
    btn.textContent = "X"
    btn.addEventListener("click", () => {
        li.remove();
        actualizarContador();
    })
    li.appendChild(btn)
    lista.appendChild(li)
    actualizarContador();
    tarea.value = "";
}

function actualizarContador(){
    contador.textContent = lista.children.length;
}

agregarBoton.addEventListener("click", (e)=> {e.preventDefault(); agregarTarea();})