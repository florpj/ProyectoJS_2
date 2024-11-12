/* Cotizador de cursos de Excel para empresas 
Hay tres niveles de cursos con diferente precio y se realiza un descuento que aumenta a mayor cantidad de alumnos 
Se puede cotizar mas un curso y al final se muestra un detalle de lo cotizado con el precio total. */

let nombreEmpresa
let cantAlumnos
let nivelCurso
let precioFinal = 0

const preciosCursos = [50000, 55000, 60000] // Precio por nivel, INICIAL, INTERMEDIO Y AVANZADO
const descuentos = [0, 0.05, 0.10, 0.15, 0.2] // Descuento por cantidad de alumnos, entre 5 y 9 (5%), entre 10 y 14 (10%), entre 15 y 19 (15%), 20 o mas (20%)
const cursos = ["Excel Inicial", "Excel Intermedio", "Excel Avanzado"]
const cotizaciones = []

function calcularPrecio(nivel, alumnos) {
    let j = nivel - 1
    return precio = preciosCursos[j] * alumnos
}

function calcularConDescuento(alumnos, precio) {
    let j = parseInt(alumnos / 5)
    if (j < descuentos.length) {
        return total = precio - (precio * descuentos[j])
    } else {
        return total = precio - (precio * descuentos[4])
    }
}

function agregarCotizacion(nivel, alumnos, precio) {
    cotizaciones.push({
        curso: cursos[nivel - 1],
        alumnos,
        precio
    })

}
function mostrarCotizacion(empresa) {
    let finCotizacion = "\n"
    for (let i = 0; i < cotizaciones.length; i++) {
        const cotizacion = cotizaciones[i];
        finCotizacion = finCotizacion + "Curso de " + cotizacion.curso + " para " + cotizacion.alumnos + " de alumnos por $" + cotizacion.precio + "\n"
        precioFinal = precioFinal + cotizacion.precio
    }
    alert("Sr/Sres de la empresa " + empresa + "\nA continucion se detalla los precios segun los datos ingresados:" + finCotizacion + "\nEl total es: " + precioFinal)
}


function core() {
    if (confirm("Bienvenido al cotizador de nuestra pagina, ud tiene una empresa y desea cotizar uno o varios cursos de Excel?")) {
        nombreEmpresa = prompt("Por favor ingrese el nombre de su empresa/negocio:")
        let bandera = true
        while (bandera) {
            let precioCurso
            let precioCursoConDesc

            cantAlumnos = Number(prompt("Por favor ingrese la cantidad de alumnos que desea inscribir:"))
            nivelCurso = Number(prompt("Ingrese 1,  2 o 3 indicando el curso que quiere cotizar:\n1 - Curso nivel INICIAL\n2 - Curso nivel INTERMEDIO\n3 - Curso nivel AVANZADO"))

            precioCurso = calcularPrecio(nivelCurso, cantAlumnos)
            precioCursoConDesc = calcularConDescuento(cantAlumnos, precioCurso)

            agregarCotizacion(nivelCurso, cantAlumnos, precioCursoConDesc)
            bandera = confirm("Desea agregar otro curso a la cotización?")
        }

        mostrarCotizacion(nombreEmpresa)
    }



}

core()