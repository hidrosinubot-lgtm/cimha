// ============================================ //
// ENVIO-EXITOSO.JS - JAVASCRIPT               //
// ============================================ //

/**
 * CIMHA - Envío Exitoso
 * Pantalla de confirmación de envío de reporte
 */

// ============================================ //
// 1. ESPERAR A QUE EL DOM ESTÉ LISTO          //
// ============================================ //

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Envío Exitoso - Pantalla cargada');
    
    // Aplicar transición de entrada
    aplicarTransicionEntrada();
    
    // Inicializar interacciones
    initInteracciones();
});

// ============================================ //
// 2. TRANSICIÓN DE ENTRADA                     //
// ============================================ //

function aplicarTransicionEntrada() {
    const body = document.body;
    
    // Agregar clase para animación de entrada
    setTimeout(() => {
        body.classList.add('loaded');
    }, 50);
}

// ============================================ //
// 3. INTERACCIONES DEL BOTÓN                   //
// ============================================ //

function initInteracciones() {
    const btnVolver = document.getElementById('btn-volver-inicio');
    const icono = document.querySelector('.material-symbols-outlined');
    
    // Agregar animación al ícono
    if (icono) {
        icono.classList.add('icon-success');
    }
    
    // Efecto hover en el botón
    if (btnVolver) {
        btnVolver.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        btnVolver.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Transición de salida antes de redirigir
        btnVolver.addEventListener('click', function(e) {
            e.preventDefault();
            
            const body = document.body;
            body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 400);
        });
    }
}

// ============================================ //
// 4. FUNCIÓN DE REDIRECCIÓN CON TRANSICIÓN    //
// ============================================ //

function navegarConTransicion(destino) {
    const body = document.body;
    body.classList.add('fade-out');
    
    setTimeout(() => {
        window.location.href = destino;
    }, 400);
}

console.log('✅ Envío Exitoso - Script cargado correctamente');
