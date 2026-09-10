// 1. Arreglo de Productos (Catálogo Base)
const productos = [
    { id: "TC001", nombre: "Torta Cuadrada de Chocolate", precio: 45000, img: "imagenes/torta-chocolate.jpg" },
    { id: "TC002", nombre: "Torta Cuadrada de Frutas", precio: 50000, img: "imagenes/torta-frutas.jpg" },
    { id: "TT001", nombre: "Torta Circular de Vainilla", precio: 40000, img: "imagenes/torta-vainilla.jpg" }
];

// 2. Lógica del Carrito con LocalStorage
let carrito = JSON.parse(localStorage.getItem("carritoTienda")) || [];

function actualizarContador() {
    const contadores = document.querySelectorAll("#contador-carrito");
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contadores.forEach(c => c.textContent = totalItems);
}

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;

    const existe = carrito.find(item => item.id === idProducto);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    // Guarda el carrito en el navegador
    localStorage.setItem("carritoTienda", JSON.stringify(carrito)); 
    actualizarContador();
    alert(`Sugerencia: ¡${producto.nombre} añadido a tu carrito de compras!`);
}

// 3. Validaciones de Reglas de Negocio
const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

function validarCorreo(correo) {
    return dominiosPermitidos.some(dominio => correo.toLowerCase().endsWith(dominio));
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();

    // Eventos para añadir al carrito desde catálogo
    document.querySelectorAll(".btn-anadir").forEach(boton => {
        boton.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            agregarAlCarrito(id);
        });
    });

    // Validación Login
    const formLogin = document.getElementById("form-login");
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const correo = document.getElementById("correo-login").value;
            const pass = document.getElementById("contrasena-login").value;
            
            if (!validarCorreo(correo)) {
                alert("Error: El correo solo puede ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
                return;
            }
            if (pass.length < 4 || pass.length > 10) {
                alert("Error: La contraseña debe tener entre 4 y 10 caracteres.");
                return;
            }
            alert("Inicio de sesión exitoso. Redirigiendo...");
        });
    }

    // Validación Registro
    const formRegistro = document.getElementById("form-registro");
    if (formRegistro) {
        formRegistro.addEventListener("submit", (e) => {
            e.preventDefault();
            const correo = document.getElementById("correo").value;
            const correoConf = document.getElementById("confirmar-correo").value;
            const pass = document.getElementById("contrasena").value;
            const passConf = document.getElementById("confirmar-contrasena").value;

            if (!validarCorreo(correo)) {
                alert("Error: Dominio de correo no permitido para registro.");
                return;
            }
            if (correo !== correoConf) {
                alert("Error: Los correos no coinciden.");
                return;
            }
            if (pass !== passConf) {
                alert("Error: Las contraseñas no coinciden.");
                return;
            }
            alert("Registro completado con éxito.");
        });
    }

    // Validación Contacto
    const formContacto = document.getElementById("form-contacto");
    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();
            const correo = document.getElementById("correo-contacto").value;
            if (!validarCorreo(correo)) {
                alert("Error: Usa un correo válido (@duoc.cl, @profesor.duoc.cl o @gmail.com).");
                return;
            }
            alert("Mensaje enviado correctamente a Pastelería Mil Sabores.");
        });
    }
});