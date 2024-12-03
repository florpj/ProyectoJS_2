const descuentos = [0, 0.05, 0.10, 0.15, 0.2] // Descuento por cantidad de alumnos, entre 5 y 9 (5%), entre 10 y 14 (10%), entre 15 y 19 (15%), 20 o mas (20%)
const cursosDictados = [
    {
        id: 1,
        curso: "Excel Inicial",
        precio: 50000
    },
    {
        id: 2,
        curso: "Excel Intermedio",
        precio: 55000
    },

    {
        id: 3,
        curso: "Excel Avanzado",
        precio: 60000
    }
] // Precio por nivel, INICIAL, INTERMEDIO Y AVANZADO

const nombreEmpresa = document.getElementById("nombreEmpresa");
const cursos = document.getElementById("cursos")
const cantAlumnos = document.getElementById("cantAlumnos")
let precioFinal = 0
const cotizaciones = []

function agregarBoton() {
    const botonAgregar = document.getElementsByClassName("botonAgregar")
    const arrayBotones = Array.from(botonAgregar)

    console.dir(arrayBotones)
}


document.addEventListener("DOMContentLoaded", () => {
    cursosDictados.forEach(curso => {
        cursos.innerHTML += `
            <div id=${curso.id} class="cadaCurso">
                    <h4>Curso de ${curso.curso}</h4>
                    <label for="cantAlumnos">Cantidad alumnos</label>
                    <input type="number" id="cantAlumnos">
                    <button class="botonAgregar">Agregar</button>
            </div>
        `
    })
    agregarBoton()
})