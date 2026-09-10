document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formularioRegistro");

    formulario.addEventListener("submit", function(evento) {
        // Previene el envío automático de datos para ejecutar validaciones locales
        evento.preventDefault(); 

        const nombre = document.getElementById("nombre").value.trim();
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;
        const correo = document.getElementById("correo").value.trim();
        const codigoPromocional = document.getElementById("codigoPromocional").value.trim();

        // 1. Prevención de envío de información incompleta
        if (nombre === "" || fechaNacimiento === "" || correo === "") {
            alert("Error: Por favor, completa todos los campos obligatorios (Nombre, Fecha de Nacimiento y Correo).");
            return;
        }

        let mensajesExito = [`¡Registro exitoso, ${nombre}! Bienvenido a la comunidad de Pastelería Mil Sabores.`];

        // 2. Cálculo dinámico de la edad para descuento del 50%
        const fechaNac = new Date(fechaNacimiento);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
            edad--;
        }

        if (edad >= 50) {
            mensajesExito.push("Sugerencia aplicada: Tienes 50 años o más. ¡Se ha activado tu 50% de descuento automático en todas tus compras!");
        }

        // 3. Validación de dominio para beneficio estudiantil
        if (correo.toLowerCase().endsWith("@duocuc.cl")) {
            mensajesExito.push("Sugerencia aplicada: Hemos detectado tu correo Duoc UC. ¡Tienes una torta gratis asegurada durante el mes de tu cumpleaños!");
        }

        // 4. Validación estricta de código promocional vitalicio
        if (codigoPromocional !== "") {
            if (codigoPromocional.toUpperCase() === "FELICES50") {
                mensajesExito.push("Sugerencia aplicada: Código FELICES50 validado correctamente. ¡Obtuviste un 10% de descuento vitalicio!");
            } else {
                alert("Error: El código promocional ingresado no es válido. Revisa la ortografía o deja el campo en blanco.");
                return;
            }
        }

        // Despliegue de mensajes en el contexto adecuado del formulario
        alert(mensajesExito.join("\n\n"));
        
        // formulario.submit(); // Línea comentada: Se activaría al integrar un backend real.
    });
});