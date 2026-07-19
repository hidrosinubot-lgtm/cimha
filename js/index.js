// ============================================ //
// INDEX.JS - JAVASCRIPT PRINCIPAL              //
// ============================================ //

/**
 * CIMHA - Sistema de Precisión Hidrológica
 * Este archivo maneja toda la interactividad de la página
 */

// ============================================ //
// 1. ESPERAR A QUE EL DOM ESTÉ LISTO          //
// ============================================ //

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 CIMHA - Sistema iniciado correctamente');
    
    // Inicializar todas las funciones
    initLogoAnimation();
    initResponsiveBehavior();
    initPerformanceOptimizations();
});

// ============================================ //
// 2. ANIMACIÓN DEL LOGO                        //
// ============================================ //

function initLogoAnimation() {
    const logoContainer = document.getElementById('logo-container');
    
    if (logoContainer) {
        // Pequeña mejora: añadir clase para activar animación
        // La animación ya está en CSS con fadeInLogo
        console.log('✅ Logo animado correctamente');
        
        // Si quieres control adicional, puedes hacer:
        // logoContainer.style.animation = 'fadeInLogo 0.8s ease forwards';
    } else {
        console.warn('⚠️ No se encontró #logo-container');
    }
}

// ============================================ //
// 3. COMPORTAMIENTO RESPONSIVE                 //
// ============================================ //

function initResponsiveBehavior() {
    // Detectar cambios de tamaño
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleResponsive(e) {
        if (e.matches) {
            // Estamos en móvil
            document.documentElement.style.setProperty('--space-container', '16px');
            console.log('📱 Modo móvil activado');
        } else {
            // Estamos en escritorio
            document.documentElement.style.setProperty('--space-container', '32px');
            console.log('💻 Modo escritorio activado');
        }
    }
    
    // Ejecutar al cargar
    handleResponsive(mediaQuery);
    
    // Escuchar cambios
    mediaQuery.addEventListener('change', handleResponsive);
}

// ============================================ //
// 4. OPTIMIZACIONES DE RENDIMIENTO             //
// ============================================ //

function initPerformanceOptimizations() {
    // Detectar si el usuario está en una conexión lenta
    if ('connection' in navigator) {
        const connection = navigator.connection;
        
        if (connection.saveData) {
            // Modo de ahorro de datos activado
            console.log('🔋 Modo ahorro de datos activado');
            // Aquí puedes cargar imágenes de menor calidad
            // o reducir animaciones
        }
        
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            console.log('🐢 Conexión lenta detectada');
            // Reducir animaciones o carga de recursos pesados
            document.querySelectorAll('.animate-pulse').forEach(el => {
                el.style.animationDuration = '2s';
            });
        }
    }
    
    // Observer de intersección para lazy loading (si es necesario)
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================ //
// 5. UTILIDADES ADICIONALES                    //
// ============================================ //

/**
 * Función para verificar si un elemento está visible en pantalla
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Función para debounce (limitar ejecución de eventos)
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Función para throttle (limitar ejecución de eventos)
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================ //
// 6. REGISTRO DE ERRORES                      //
// ============================================ //

window.addEventListener('error', function(e) {
    console.error('❌ Error capturado:', e.message);
    // Aquí puedes enviar errores a un servicio de monitoreo
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ Promesa rechazada sin manejar:', e.reason);
});

// ============================================ //
// 7. MODO OSCURO (opcional - basado en DESIGN.MD) //
// ============================================ //

// Si quieres implementar modo oscuro en el futuro
// const darkModeToggle = document.getElementById('dark-mode-toggle');
// 
// if (darkModeToggle) {
//     darkModeToggle.addEventListener('click', function() {
//         document.body.classList.toggle('dark-mode');
//         console.log('🌙 Modo oscuro:', document.body.classList.contains('dark-mode'));
//     });
// }

console.log('✅ CIMHA - Todo listo');
