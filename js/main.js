const form = document.getElementById("formulario");
const input = document.getElementById("nombre");
const saludo = document.getElementById("saludo");
const btnBorrar = document.getElementById("eliminar");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre = input.value.trim();

    if (nombre == "") {
        alert("Debe llenar el campo con su nombre");
        return;
    }

    localStorage.setItem("usuario", nombre);
    saludo.textContent = "Bienvenido " + nombre;
    input.value = "";
});


document.addEventListener("DOMContentLoaded", ()=>{
    const usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) {
    saludo.textContent = "Bienvenido de nuevo " + usuarioGuardado;

    }
});


btnBorrar.addEventListener("click", ()=>{
    localStorage.removeItem("usuario");
    saludo.textContent = "Bienvenido usuario indefinido";

});



