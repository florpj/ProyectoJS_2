const descuentos = [0, 0.05, 0.10, 0.15, 0.2] // Descuento por cantidad de alumnos, entre 5 y 9 (5%), entre 10 y 14 (10%), entre 15 y 19 (15%), 20 o mas (20%)
const cursosDictados = [{
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

const nombreEmpresa = document.getElementById("nombreEmpresa")
//const cursos = document.getElementById("cursos")
//const cantAlumnos = document.getElementById("cantAlumnos")
let precioFinal = 0
const cotizaciones = []

function calcularPrecio(nivel, alumnos) {
    let j = nivel - 1
    return precio = cursosDictados[j].precio * alumnos
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
        curso: cursosDictados[nivel - 1].curso,
        alumnos,
        precio
    })

}

function agregarBoton() {
    const botonAgregar = document.getElementsByClassName("botonAgregar")
    const arrayBotones = Array.from(botonAgregar)

    arrayBotones.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            evento.preventDefault()
            let cantidadAlum = Number(evento.target.parentElement.children[2].value)
            let nivel = Number(evento.target.parentElement.id)
            let precio = calcularPrecio(nivel, cantidadAlum)
            let precioConDescuento = calcularConDescuento(cantidadAlum, precio)

            agregarCotizacion(nivel, cantidadAlum, precioConDescuento)
        })
    })
}

function mostrarCotizacion(empresa) {
    let finCotizacion = "\n"
    for (let i = 0; i < cotizaciones.length; i++) {
        const cotizacion = cotizaciones[i];
        finCotizacion = finCotizacion + "Curso de " + cotizacion.curso + " para " + cotizacion.alumnos + " de alumnos por $" + cotizacion.precio + "\n"
        precioFinal = precioFinal + cotizacion.precio
    }

}

function cotizar() {
    const botonCotizar = document.getElementById('botonCotizar')
    const resultado = document.getElementById('resultado')
    
    botonCotizar.addEventListener('click', (evento) => {
        let finCotizacion = "\n"
        let textoCotizacion = ''
        empresa = evento.target.parentElement[0].value
        resultado.innerHTML += `
        <p>Sr/Sres de la empresa ${empresa}  <br> A continucion se detalla los precios segun los datos ingresados:<br> </p> 
        <ul>
        `
        for (let i = 0; i < cotizaciones.length; i++) {
            const cotizacion = cotizaciones[i];
            resultado.innerHTML+=`
            <li>Curso de ${cotizacion.curso} para ${cotizacion.alumnos} alumnos por $ ${cotizacion.precio}</li>
            `
            //finCotizacion = finCotizacion + "Curso de " + cotizacion.curso + " para " + cotizacion.alumnos + "alumnos por $" + cotizacion.precio + "\n"
            precioFinal = precioFinal + cotizacion.precio
        }
        resultado.innerHTML += `
        </ul>
        <p>El total es: ${precioFinal} </p>
        `
        resultado.style.display = 'inline'
    })
    

}


document.addEventListener("DOMContentLoaded", () => {
    cursosDictados.forEach(curso => {
        cursos.innerHTML += `
            <div id=${curso.id} class="cadaCurso">
                    <h4>Curso de ${curso.curso}</h4>
                    <label for="cantAlumnos">Cantidad alumnos</label>
                    <input type="number" class="cantAlumnos">
                    <button class="botonAgregar">Agregar</button>
            </div>
        `
    })

    agregarBoton()
    cotizar()
})