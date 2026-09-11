// =========================================================
// Pastelería Mil Sabores - script.js
// Lógica de catálogo, carrito, registro/login y panel admin
// =========================================================

// 1. Catálogo base de productos (16 productos / 8 categorías)
const productos = [
    { id: "TC001", nombre: "Torta Cuadrada de Chocolate", categoria: "cuadradas", categoriaLabel: "Tortas Cuadradas", precio: 45000, img: "imagenes/torta-chocolate.jpg", personalizable: true,
      descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales." },
    { id: "TC002", nombre: "Torta Cuadrada de Frutas", categoria: "cuadradas", categoriaLabel: "Tortas Cuadradas", precio: 50000, img: "imagenes/torta-cuadrada-frutas.jpg", personalizable: true,
      descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones." },
    { id: "TT001", nombre: "Torta Circular de Vainilla", categoria: "circulares", categoriaLabel: "Tortas Circulares", precio: 40000, img: "imagenes/torta-circular-vainilla.jpg", personalizable: true,
      descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión." },
    { id: "TT002", nombre: "Torta Circular de Manjar", categoria: "circulares", categoriaLabel: "Tortas Circulares", precio: 42000, img: "imagenes/torta-circular-manjar.jpg", personalizable: true,
      descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos." },
    { id: "PI001", nombre: "Mousse de Chocolate", categoria: "individuales", categoriaLabel: "Postres Individuales", precio: 5000, img: "imagenes/mousse-chocolate.jpg", personalizable: false,
      descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate." },
    { id: "PI002", nombre: "Tiramisú Clásico", categoria: "individuales", categoriaLabel: "Postres Individuales", precio: 5500, img: "imagenes/tiramisu-clasico.jpg", personalizable: false,
      descripcion: "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida." },
    { id: "PSA001", nombre: "Torta Sin Azúcar de Naranja", categoria: "sin_azucar", categoriaLabel: "Productos Sin Azúcar", precio: 48000, img: "imagenes/torta-naranja-sinazucar.png", personalizable: true,
      descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables." },
    { id: "PSA002", nombre: "Cheesecake Sin Azúcar", categoria: "sin_azucar", categoriaLabel: "Productos Sin Azúcar", precio: 47000, img: "imagenes/cheesecake-sinazucar.jpg", personalizable: false,
      descripcion: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa." },
    { id: "PT001", nombre: "Empanada de Manzana", categoria: "tradicional", categoriaLabel: "Pastelería Tradicional", precio: 3000, img: "imagenes/empanada-manzana.jpg", personalizable: false,
      descripcion: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda." },
    { id: "PT002", nombre: "Tarta de Santiago", categoria: "tradicional", categoriaLabel: "Pastelería Tradicional", precio: 6000, img: "imagenes/tarta-santiago.jpg", personalizable: false,
      descripcion: "Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos." },
    { id: "PG001", nombre: "Brownie Sin Gluten", categoria: "sin_gluten", categoriaLabel: "Productos Sin Gluten", precio: 4000, img: "imagenes/brownie-singluten.jpg", personalizable: false,
      descripcion: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor." },
    { id: "PG002", nombre: "Pan Sin Gluten", categoria: "sin_gluten", categoriaLabel: "Productos Sin Gluten", precio: 3500, img: "imagenes/pan-singluten.jpg", personalizable: false,
      descripcion: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida." },
    { id: "PV001", nombre: "Torta Vegana de Chocolate", categoria: "vegana", categoriaLabel: "Productos Veganos", precio: 50000, img: "imagenes/torta-vegana-chocolate.png", personalizable: true,
      descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos." },
    { id: "PV002", nombre: "Galletas Veganas de Avena", categoria: "vegana", categoriaLabel: "Productos Veganos", precio: 4500, img: "imagenes/galletas-veganas-avena.jpg", personalizable: false,
      descripcion: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano." },
    { id: "TE001", nombre: "Torta Especial de Cumpleaños", categoria: "especiales", categoriaLabel: "Tortas Especiales", precio: 55000, img: "imagenes/torta-cumpleanos-especial.png", personalizable: true,
      descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos." },
    { id: "TE002", nombre: "Torta Especial de Boda", categoria: "especiales", categoriaLabel: "Tortas Especiales", precio: 60000, img: "imagenes/torta-boda-especial.jpg", personalizable: true,
      descripcion: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda." }
];

// 1b. Contenido de blog / noticias de la comunidad
const blogs = [
    {
        id: "record-mundial",
        titulo: "La torta más grande del mundo",
        resumen: "Descubre cómo un equipo de pasteleros logró marcar un hito para Pastelería Mil Sabores en 1995, al colaborar en la creación de la torta más grande del mundo.",
        imagen: "imagenes/torta-gigante.jpeg",
        cuerpo: [
            "En 1995, Pastelería Mil Sabores participó en un récord Guinness al colaborar en la creación de la torta más grande del mundo, un hito que hasta hoy forma parte central de nuestra historia y orgullo como marca chilena.",
            "Un equipo de maestros pasteleros trabajó de forma ininterrumpida para ensamblar una estructura colosal, utilizando toneladas de harina, azúcar y cientos de litros de crema. La hazaña requirió una coordinación logística tan grande como la propia torta.",
            "Treinta años después, seguimos celebrando ese espíritu de innovación y trabajo en equipo en cada torta que sale de nuestro obrador, sin importar su tamaño."
        ]
    },
    {
        id: "origen-manjar",
        titulo: "El origen del manjar",
        resumen: "Una mirada profunda a la historia de nuestro ingrediente estrella y su evolución en la repostería chilena.",
        imagen: "imagenes/blog-origen-manjar.svg",
        cuerpo: [
            "El manjar, también conocido como dulce de leche en otros países de Latinoamérica, es uno de los ingredientes más queridos de la repostería chilena. Su origen se remonta a la cocción lenta y paciente de leche con azúcar hasta lograr ese color dorado y textura cremosa tan característicos.",
            "En Pastelería Mil Sabores preparamos nuestro manjar siguiendo la receta tradicional que ha pasado de generación en generación, y lo incorporamos en clásicos como la Torta Circular de Manjar.",
            "Cada cucharada de manjar cuenta parte de nuestra historia: la de una pastelería que durante 50 años ha honrado los sabores tradicionales de Chile."
        ]
    }
];

function renderizarListadoBlogs() {
    const contenedor = document.getElementById("contenedor-blogs");
    if (!contenedor) return;
    contenedor.innerHTML = blogs.map(b => `
        <article class="tarjeta-blog">
            <img src="${b.imagen}" alt="${b.titulo}" width="200">
            <div class="contenido-blog">
                <h2>${b.titulo}</h2>
                <p>${b.resumen}</p>
                <a href="detalle_blog.html?id=${b.id}" class="btn-enlace">VER CASO</a>
            </div>
        </article>
    `).join("");
}

function inicializarDetalleBlog() {
    const contenedor = document.getElementById("detalle-blog-contenido");
    if (!contenedor) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || blogs[0].id;
    const blog = blogs.find(b => b.id === id) || blogs[0];

    document.title = `${blog.titulo} - Pastelería Mil Sabores`;
    contenedor.innerHTML = `
        <h1>${blog.titulo}</h1>
        <img src="${blog.imagen}" alt="${blog.titulo}" class="img-blog-detalle">
        <div class="cuerpo-blog">
            ${blog.cuerpo.map(parrafo => `<p>${parrafo}</p>`).join("")}
        </div>
    `;
}

const CATEGORIAS_LABEL = {
    cuadradas: "Tortas Cuadradas",
    circulares: "Tortas Circulares",
    individuales: "Postres Individuales",
    sin_azucar: "Productos Sin Azúcar",
    tradicional: "Pastelería Tradicional",
    sin_gluten: "Productos Sin Gluten",
    vegana: "Productos Veganos",
    especiales: "Tortas Especiales"
};

function formatoCLP(valor) {
    return `$${Math.round(valor).toLocaleString("es-CL")}`;
}

// 2. Lógica del Carrito con LocalStorage
let carrito = JSON.parse(localStorage.getItem("carritoTienda")) || [];

function guardarCarrito() {
    localStorage.setItem("carritoTienda", JSON.stringify(carrito));
}

function actualizarContador() {
    const contadores = document.querySelectorAll(".contador-carrito, #contador-carrito");
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contadores.forEach(c => c.textContent = totalItems);
}

function agregarAlCarrito(idProducto, mensajePersonalizado) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) {
        console.error("Producto no encontrado en la base de datos.");
        return;
    }

    const existe = carrito.find(item => item.id === idProducto && (item.mensaje || "") === (mensajePersonalizado || ""));
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, img: producto.img, cantidad: 1, mensaje: mensajePersonalizado || "" });
    }

    guardarCarrito();
    actualizarContador();
    alert(`¡${producto.nombre} añadido a tu carrito!`);
}

function cambiarCantidad(id, mensaje, delta) {
    const item = carrito.find(i => i.id === id && (i.mensaje || "") === (mensaje || ""));
    if (!item) return;
    item.cantidad += delta;
    if (item.cantidad <= 0) {
        carrito = carrito.filter(i => i !== item);
    }
    guardarCarrito();
    actualizarContador();
    renderizarCarrito();
}

function eliminarDelCarrito(id, mensaje) {
    carrito = carrito.filter(i => !(i.id === id && (i.mensaje || "") === (mensaje || "")));
    guardarCarrito();
    actualizarContador();
    renderizarCarrito();
}

function obtenerDescuentoUsuario() {
    // El descuento se calcula a partir de los datos guardados durante el registro
    const usuario = JSON.parse(localStorage.getItem("usuarioMilSabores"));
    if (!usuario) return { porcentaje: 0, motivo: "" };
    return { porcentaje: usuario.descuento || 0, motivo: usuario.motivoDescuento || "" };
}

function renderizarCarrito() {
    const contenedor = document.getElementById("items-carrito");
    const totalPrecio = document.getElementById("total-precio");

    // Si no estamos en la página del carrito, abortar
    if (!contenedor || !totalPrecio) return;

    contenedor.innerHTML = ""; // Limpia el contenido estático
    let subtotal = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p style='text-align:center; padding: 20px;'>Tu carrito está vacío. <a href='productos.html'>Ir a productos</a></p>";
        totalPrecio.textContent = "$0";
        const resumenDesc = document.getElementById("resumen-descuento");
        if (resumenDesc) resumenDesc.textContent = "";
        return;
    }

    carrito.forEach(item => {
        subtotal += item.precio * item.cantidad;
        const mensajeHTML = item.mensaje ? `<p class="mensaje-personalizado">Mensaje: "${item.mensaje}"</p>` : "";
        contenedor.innerHTML += `
            <article class="item-carrito">
                <img src="${item.img}" alt="${item.nombre}" width="80">
                <div class="info-item">
                    <h3>${item.nombre}</h3>
                    <p>${formatoCLP(item.precio)} c/u</p>
                    ${mensajeHTML}
                </div>
                <div class="controles-cantidad">
                    <button type="button" class="btn-cantidad" data-id="${item.id}" data-msg="${item.mensaje || ''}" data-delta="-1">−</button>
                    <span>${item.cantidad}</span>
                    <button type="button" class="btn-cantidad" data-id="${item.id}" data-msg="${item.mensaje || ''}" data-delta="1">+</button>
                    <button type="button" class="btn-eliminar" data-id="${item.id}" data-msg="${item.mensaje || ''}">Eliminar</button>
                </div>
            </article>
        `;
    });

    contenedor.querySelectorAll(".btn-cantidad").forEach(btn => {
        btn.addEventListener("click", () => cambiarCantidad(btn.dataset.id, btn.dataset.msg, parseInt(btn.dataset.delta)));
    });
    contenedor.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.addEventListener("click", () => eliminarDelCarrito(btn.dataset.id, btn.dataset.msg));
    });

    // Aplica el descuento del usuario registrado (edad 50+, código FELICES50, etc.)
    const { porcentaje, motivo } = obtenerDescuentoUsuario();
    const descuentoMonto = subtotal * (porcentaje / 100);
    const total = subtotal - descuentoMonto;

    const resumenDesc = document.getElementById("resumen-descuento");
    if (resumenDesc) {
        resumenDesc.textContent = porcentaje > 0
            ? `Descuento aplicado (${motivo}): -${formatoCLP(descuentoMonto)}`
            : "";
    }

    totalPrecio.textContent = formatoCLP(total);
}

// 3. Renderizado dinámico del catálogo (productos.html)
function renderizarCatalogo(filtroCategoria = "todas", textoBusqueda = "") {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    const texto = textoBusqueda.trim().toLowerCase();
    const listaFiltrada = productos.filter(p => {
        const coincideCategoria = filtroCategoria === "todas" || p.categoria === filtroCategoria;
        const coincideTexto = texto === "" || p.nombre.toLowerCase().includes(texto) || p.categoriaLabel.toLowerCase().includes(texto);
        return coincideCategoria && coincideTexto;
    });

    if (listaFiltrada.length === 0) {
        contenedor.innerHTML = "<p style='text-align:center; grid-column: 1/-1;'>No se encontraron productos con ese criterio.</p>";
        return;
    }

    contenedor.innerHTML = listaFiltrada.map(p => `
        <article class="producto-card">
            <a href="detalle_producto.html?id=${p.id}">
                <img src="${p.img}" alt="${p.nombre}">
            </a>
            <p class="etiqueta-categoria">${p.categoriaLabel}</p>
            <h3><a href="detalle_producto.html?id=${p.id}">${p.nombre}</a></h3>
            <strong>${formatoCLP(p.precio)}</strong>
            <button class="btn-anadir" data-id="${p.id}">Añadir al carrito</button>
        </article>
    `).join("");

    contenedor.querySelectorAll(".btn-anadir").forEach(boton => {
        boton.addEventListener("click", (e) => agregarAlCarrito(e.currentTarget.getAttribute("data-id")));
    });
}

function inicializarFiltrosCatalogo() {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    const selectCategoria = document.getElementById("filtro-categoria");
    const inputBusqueda = document.getElementById("buscador-productos");

    // Si la URL trae una categoría predefinida (ej. desde el home), se respeta
    const params = new URLSearchParams(window.location.search);
    const categoriaInicial = params.get("categoria") || "todas";
    if (selectCategoria) selectCategoria.value = categoriaInicial;

    function actualizar() {
        renderizarCatalogo(
            selectCategoria ? selectCategoria.value : "todas",
            inputBusqueda ? inputBusqueda.value : ""
        );
    }

    if (selectCategoria) selectCategoria.addEventListener("change", actualizar);
    if (inputBusqueda) inputBusqueda.addEventListener("input", actualizar);

    actualizar();
}

// 4. Renderizado de la página de detalle de producto (detalle_producto.html)
function inicializarDetalleProducto() {
    const contenedor = document.getElementById("detalle-producto-contenido");
    if (!contenedor) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "TC001";
    const producto = productos.find(p => p.id === id) || productos[0];

    document.title = `${producto.nombre} - Pastelería Mil Sabores`;

    const campoMensaje = producto.personalizable
        ? `<label for="mensaje-personalizado">Mensaje personalizado (opcional):</label>
           <input type="text" id="mensaje-personalizado" maxlength="60" placeholder="Ej: ¡Feliz Cumpleaños!">`
        : "";

    contenedor.innerHTML = `
        <div class="imagen-producto">
            <img src="${producto.img}" alt="${producto.nombre}">
        </div>
        <div class="info-producto">
            <p class="etiqueta-categoria">${producto.categoriaLabel}</p>
            <h1>${producto.nombre}</h1>
            <h2 class="precio-detalle">${formatoCLP(producto.precio)} CLP</h2>
            <p>${producto.descripcion}</p>
            <div class="acciones-compra">
                ${campoMensaje}
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" value="1" min="1">
                <button id="btn-anadir-carrito">Añadir al carrito</button>
            </div>
        </div>
    `;

    const breadcrumbCategoria = document.getElementById("breadcrumb-categoria");
    if (breadcrumbCategoria) {
        breadcrumbCategoria.textContent = producto.categoriaLabel;
        breadcrumbCategoria.href = `productos.html?categoria=${producto.categoria}`;
    }
    const breadcrumbNombre = document.getElementById("breadcrumb-nombre");
    if (breadcrumbNombre) breadcrumbNombre.textContent = producto.nombre;

    document.getElementById("btn-anadir-carrito").addEventListener("click", () => {
        const cantidad = parseInt(document.getElementById("cantidad").value) || 1;
        const campoMsg = document.getElementById("mensaje-personalizado");
        const mensaje = campoMsg ? campoMsg.value.trim() : "";
        for (let i = 0; i < cantidad; i++) {
            agregarAlCarrito(producto.id, mensaje);
        }
    });

    // Productos relacionados: misma categoría, excluyendo el actual
    const relacionadosContenedor = document.getElementById("grilla-relacionados");
    if (relacionadosContenedor) {
        const relacionados = productos.filter(p => p.categoria === producto.categoria && p.id !== producto.id).slice(0, 4);
        relacionadosContenedor.innerHTML = relacionados.map(p => `
            <article class="producto-card">
                <a href="detalle_producto.html?id=${p.id}">
                    <img src="${p.img}" alt="${p.nombre}">
                    <h3>${p.nombre}</h3>
                    <strong>${formatoCLP(p.precio)}</strong>
                </a>
            </article>
        `).join("") || "<p>No hay productos relacionados por el momento.</p>";
    }
}

// 5. Renderizado de destacados en Home (index.html)
function renderizarDestacadosHome() {
    const contenedor = document.getElementById("grilla-destacados");
    if (!contenedor) return;
    const destacados = ["TC001", "TE001", "PT002", "PV001"].map(id => productos.find(p => p.id === id));
    contenedor.innerHTML = destacados.map(p => `
        <article class="producto-card">
            <a href="detalle_producto.html?id=${p.id}">
                <img src="${p.img}" alt="${p.nombre}">
            </a>
            <h3><a href="detalle_producto.html?id=${p.id}">${p.nombre}</a></h3>
            <p>Categoría: ${p.categoriaLabel}</p>
            <strong>${formatoCLP(p.precio)}</strong>
            <button class="btn-anadir" data-id="${p.id}">Añadir al carrito</button>
        </article>
    `).join("");

    contenedor.querySelectorAll(".btn-anadir").forEach(boton => {
        boton.addEventListener("click", (e) => agregarAlCarrito(e.currentTarget.getAttribute("data-id")));
    });
}

// 6. Validaciones de Reglas de Negocio
const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

function validarCorreo(correo) {
    return dominiosPermitidos.some(dominio => correo.toLowerCase().endsWith(dominio));
}

function esCorreoDuoc(correo) {
    return correo.toLowerCase().endsWith("@duoc.cl") || correo.toLowerCase().endsWith("@profesor.duoc.cl");
}

function calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) return null;
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
    return edad;
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
    renderizarCarrito();
    renderizarDestacadosHome();
    inicializarFiltrosCatalogo();
    inicializarDetalleProducto();
    renderizarListadoBlogs();
    inicializarDetalleBlog();

    // Eventos para añadir al carrito desde catálogo estático (catalogo.html)
    document.querySelectorAll(".btn-anadir").forEach(boton => {
        boton.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-id");
            const contenedorProducto = e.currentTarget.closest(".producto");
            const campoMensaje = contenedorProducto ? contenedorProducto.querySelector("input[type='text']") : null;
            agregarAlCarrito(id, campoMensaje ? campoMensaje.value.trim() : "");
        });
    });

    // Filtro de catálogo estático (catalogo.html)
    const formFiltros = document.getElementById("formFiltros");
    if (formFiltros) {
        const selectCat = document.getElementById("categoria");
        function aplicarFiltroEstatico() {
            const valor = selectCat.value;
            document.querySelectorAll("#lista-productos .producto").forEach(art => {
                const cat = art.getAttribute("data-categoria");
                art.style.display = (valor === "todas" || cat === valor) ? "" : "none";
            });
        }
        formFiltros.querySelector("button").addEventListener("click", aplicarFiltroEstatico);
    }

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
            window.location.href = "index.html";
        });
    }

    // Validación y lógica de Registro (con reglas de descuento del enunciado)
    const formRegistro = document.getElementById("form-registro");
    if (formRegistro) {
        formRegistro.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value;
            const correoConf = document.getElementById("confirmar-correo").value;
            const pass = document.getElementById("contrasena").value;
            const passConf = document.getElementById("confirmar-contrasena").value;
            const fechaNac = document.getElementById("fecha-nacimiento") ? document.getElementById("fecha-nacimiento").value : "";
            const codigoPromo = document.getElementById("codigo-promocional") ? document.getElementById("codigo-promocional").value.trim().toUpperCase() : "";

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
            if (pass.length < 4 || pass.length > 10) {
                alert("Error: La contraseña debe tener entre 4 y 10 caracteres.");
                return;
            }

            // Reglas de negocio de descuentos
            let descuento = 0;
            let motivoDescuento = "";
            let tortaGratisCumple = false;

            const edad = calcularEdad(fechaNac);
            if (edad !== null && edad >= 50) {
                descuento = 50;
                motivoDescuento = "Mayor de 50 años";
            } else if (codigoPromo === "FELICES50") {
                descuento = 10;
                motivoDescuento = "Código FELICES50";
            }

            if (esCorreoDuoc(correo)) {
                tortaGratisCumple = true;
            }

            const usuario = { nombre, correo, descuento, motivoDescuento, tortaGratisCumple };
            localStorage.setItem("usuarioMilSabores", JSON.stringify(usuario));

            let mensajeFinal = "Registro completado con éxito.";
            if (descuento > 0) mensajeFinal += ` Obtuviste un ${descuento}% de descuento (${motivoDescuento}).`;
            if (tortaGratisCumple) mensajeFinal += " Además, por tu correo institucional Duoc tendrás una torta gratis en tu cumpleaños.";

            alert(mensajeFinal);
            window.location.href = "index.html";
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
            formContacto.reset();
        });
    }

    // Cupón de descuento en el carrito
    const btnCupon = document.getElementById("btn-aplicar-cupon");
    if (btnCupon) {
        btnCupon.addEventListener("click", () => {
            const codigo = document.getElementById("cupon").value.trim().toUpperCase();
            if (codigo === "FELICES50") {
                const usuario = JSON.parse(localStorage.getItem("usuarioMilSabores")) || {};
                usuario.descuento = Math.max(usuario.descuento || 0, 10);
                usuario.motivoDescuento = "Código FELICES50";
                localStorage.setItem("usuarioMilSabores", JSON.stringify(usuario));
                renderizarCarrito();
                alert("¡Cupón FELICES50 aplicado! 10% de descuento de por vida.");
            } else if (codigo === "") {
                alert("Ingresa un código de cupón.");
            } else {
                alert("Cupón no válido.");
            }
        });
    }

    // Botón de pago (simulación de checkout)
    const btnPagar = document.getElementById("btn-pagar");
    if (btnPagar) {
        btnPagar.addEventListener("click", () => {
            if (carrito.length === 0) {
                alert("Tu carrito está vacío.");
                return;
            }
            alert("¡Pedido confirmado! Te enviaremos la boleta y el seguimiento del pedido a tu correo.");
            carrito = [];
            guardarCarrito();
            actualizarContador();
            renderizarCarrito();
        });
    }

    // Validación de Nuevo Producto (Control de Stock Crítico)
    const formNuevoProducto = document.getElementById("form-nuevo-producto");
    if (formNuevoProducto) {
        formNuevoProducto.addEventListener("submit", (e) => {
            e.preventDefault();
            const stock = parseInt(document.getElementById("stock-prod").value);
            // Si el campo de stock crítico está vacío, se asume 0 para no romper la lógica
            const stockCritico = parseInt(document.getElementById("stock-critico").value) || 0;

            if (stock <= stockCritico) {
                alert("⚠️ ALERTA: El stock ingresado es igual o inferior al nivel crítico definido.");
            } else {
                alert("Producto guardado exitosamente en el catálogo.");
            }
        });
    }

    // Validación de Nuevo Usuario (Formato de RUN estricto)
    const formNuevoUsuario = document.getElementById("form-nuevo-usuario");
    if (formNuevoUsuario) {
        formNuevoUsuario.addEventListener("submit", (e) => {
            e.preventDefault();
            const run = document.getElementById("run-user").value;

            // Expresión regular: permite solo números y opcionalmente la letra K al final, bloqueando cualquier otro símbolo
            const regexRun = /^[0-9]+[kK]?$/;

            if (!regexRun.test(run)) {
                alert("Error: El RUN debe ingresarse estrictamente sin puntos ni guion (Ej: 19011022K).");
                return;
            }

            alert("Usuario creado y rol asignado correctamente en el sistema.");
        });
    }
});
