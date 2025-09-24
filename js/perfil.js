const userCreated = document.getElementById("usuarioCreado");

document.addEventListener("DOMContentLoaded", ()=>{
    const usuarioGuardado = localStorage.getItem("usuario");
    userCreated.textContent = "Bienvenido de nuevo " + usuarioGuardado;
});
