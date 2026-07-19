// ============================================ //
// PRINCIPAL.JS - JAVASCRIPT                    //
// ============================================ //

/**
 * CIMHA - Pantalla Principal
 * Interacciones y funcionalidades
 */

// ============================================ //
// 1. ESPERAR A QUE EL DOM ESTÉ LISTO          //
// ============================================ //

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Pantalla Principal - Iniciada correctamente');
    initCardInteractions();
});

// ============================================ //
// 2. INTERACCIÓN DE TARJETAS                  //
// ============================================ //

function initCardInteractions() {
    // Seleccionar todas las tarjetas con la clase .card-item
    const cards = document.querySelectorAll('.card-item');
    
    cards.forEach(card => {
        // Efecto al presionar (mousedown)
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.97)';
            card.style.transition = 'transform 0.1s ease-out';
        });
        
        // Efecto al soltar (mouseup)
        card.addEventListener('mouseup', () => {
            card.style.transform = 'scale(1)';
        });
        
        // Efecto al salir (mouseleave)
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
        
        // Efecto táctil para móviles (touch)
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.97)';
            card.style.transition = 'transform 0.1s ease-out';
        });
        
        card.addEventListener('touchend', () => {
            card.style.transform = 'scale(1)';
        });
        
        // Click en la tarjeta - Redirección
        card.addEventListener('click', function(e) {
            // Evitar que el click se dispare si el usuario solo está tocando
            if (!e.target.closest('a')) {
                const title = this.querySelector('h3')?.textContent || 'Tarjeta';
                console.log('📱 Tarjeta seleccionada:', title);
                // Aquí puedes agregar redirecciones según la tarjeta
                // Ejemplo:
                // if (title.includes('Reportes')) {
                //     window.location.href = 'reportes.html';
                // }
            }
        });
    });
}

// ============================================ //
// 3. FUNCIONES DE UTILIDAD                     //
// ============================================ //

/**
 * Función para redirigir a una pantalla específica
 */
function irA(destino) {
    window.location.href = destino;
}

/**
 * Función para obtener el título de una tarjeta
 */
function getCardTitle(cardElement) {
    const title = cardElement.querySelector('h3');
    return title ? title.textContent : 'Sin título';
}

console.log('✅ Pantalla Principal - Script cargado correctamente');
