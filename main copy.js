/* Cotizador de cursos de Excel para empresas 
Hay tres niveles de cursos con diferente precio y se realiza un descuento que aumenta a mayor cantidad de alumnos 
Se puede cotizar mas un curso y al final se muestra un detalle de lo cotizado con el precio total. */

let nombreEmpresa = document.getElementById("nombreEmpresa");
let cantAlumnos = document.getElementById("cantAlumnos")
let nivelCurso
let precioFinal = 0

const preciosCursos = [50000, 55000, 60000] // Precio por nivel, INICIAL, INTERMEDIO Y AVANZADO
const descuentos = [0, 0.05, 0.10, 0.15, 0.2] // Descuento por cantidad de alumnos, entre 5 y 9 (5%), entre 10 y 14 (10%), entre 15 y 19 (15%), 20 o mas (20%)
const cursos = ["Excel Inicial", "Excel Intermedio", "Excel Avanzado"]
const cotizaciones = []

/* function ingresoNivel() {
    let nivel =Number(prompt("Ingrese 1,  2 o 3 indicando el curso que quiere cotizar:\n1 - Curso nivel INICIAL\n2 - Curso nivel INTERMEDIO\n3 - Curso nivel AVANZADO"))

    while (!(nivel == 1 || nivel == 2 || nivel == 3) || isNaN(nivel)) {
        nivel =Number(prompt("Nivel invalido!\nIngrese 1,  2 o 3 indicando el curso que quiere cotizar:\n1 - Curso nivel INICIAL\n2 - Curso nivel INTERMEDIO\n3 - Curso nivel AVANZADO"))
    }
    return nivel
} */

/* function ingresoCantidad() {
    let cantidad= Number(prompt("Por favor ingrese la cantidad de alumnos que desea inscribir:"))

    while ( cantidad <= 0 || isNaN(cantidad)) {
        cantidad = Number(prompt("Cantidad invalida!\nPor favor ingrese un número valido para la cantidad de alumnos que desea inscribir:"))
    }
    return cantidad
} */

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

            let precioCurso
            let precioCursoConDesc

            nivelCurso = ingresoNivel()
            cantAlumnos = ingresoCantidad()
            
            precioCurso = calcularPrecio(nivelCurso, cantAlumnos)
            precioCursoConDesc = calcularConDescuento(cantAlumnos, precioCurso)

            agregarCotizacion(nivelCurso, cantAlumnos, precioCursoConDesc)

        }

        mostrarCotizacion(nombreEmpresa)





core()