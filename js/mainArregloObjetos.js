const formCurso = document.getElementById("formularioCurso");
const inputCurso = document.getElementById("cursos");
const inputProfesor = document.getElementById("profesor");
const inputPrecio = document.getElementById("precio");
const inputCiudad = document.getElementById("ciudad");
const inputCupo = document.getElementById("cupo");
const inputMensaje = document.getElementById("mensajeCurso");
const btnBorrar = document.getElementById("borrar");

formCurso.addEventListener("submit", (e) => {
    e.preventDefault();

    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();

    if (curso === "" || profesor === "" || precio === "" || ciudad === "" || cupo === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    const nuevoCurso = {
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    };

    // Guardamos solo el último curso agregado
    localStorage.setItem("curso", JSON.stringify(nuevoCurso));

    // Mostramos el curso
    inputMensaje.innerHTML =
        "El curso es: " + nuevoCurso.nombre + "<br>" +
        "profesor: " + nuevoCurso.profesor + "<br>" +
        "precio: " + nuevoCurso.precio + "<br>" +
        "ciudad: " + nuevoCurso.ciudad + "<br>" +
        "cupo: " + nuevoCurso.cupo;

    formCurso.reset();
});

// Al cargar la página, mostramos el curso guardado si existe
document.addEventListener("DOMContentLoaded", () => {
    const cursoCreado = localStorage.getItem("curso");
    if (cursoCreado) {
        const objetoCurso = JSON.parse(cursoCreado);
        inputMensaje.innerHTML =
            "El curso es: " + objetoCurso.nombre + "<br>" +
            "profesor: " + objetoCurso.profesor + "<br>" +
            "precio: " + objetoCurso.precio + "<br>" +
            "ciudad: " + objetoCurso.ciudad + "<br>" +
            "cupo: " + objetoCurso.cupo;
    }
});

// Botón borrar
btnBorrar.addEventListener("click", () => {
    localStorage.removeItem("curso"); // corregido (antes era "cursos")
    inputMensaje.textContent = "Curso eliminado correctamente";
});
