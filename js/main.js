const formCurso = document.getElementById("formularioCurso");
const inputCurso = document.getElementById("cursos");
const inputProfesor = document.getElementById("Profesor");
const inputPrecio = document.getElementById("precio");
const inputCiudad = document.getElementById("ciudad");
const inputCupo = document.getElementById("cupo");
const inputMensaje = document.getElementById("mensajeCurso");
const btnBorrar = document.getElementById("borrar");


formCurso.addEventListener("submit", (e)=>{
    e.preventDefault();

    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();
   

    if (curso == "" || profesor == "" || precio == "" || ciudad == "" || cupo == "") {
        alert("Todos los campos son obligatorios");
        return;
    }
//Anteriormente era un solo valor y ahora estamos alimentando un objeto con sus diferentes claves o valores
    const nuevoCurso = {
        nombre : curso,
        profesor : profesor,
        precio : precio,
        ciudad : ciudad,
        cupo : cupo
    }

    localStorage.setItem("curso", JSON.stringify(nuevoCurso))

    formCurso.reset()
});

document.addEventListener('DOMContentLoaded', ()=>{
    const cursoCreado = localStorage.getItem("curso");
    if (cursoCreado) {

        const objetoCurso = JSON.parse(cursoCreado)
        inputMensaje.innerHTML = "El curso es: " +  objetoCurso.nombre + "<br>" + "profesor: " + objetoCurso.profesor + "<br>" + "precio: " + objetoCurso.precio + "<br>" + "ciudad: " + objetoCurso.ciudad + "<br>" +  "cupo: " + objetoCurso.cupo; 

        
    }
});










