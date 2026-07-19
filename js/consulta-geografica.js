// ============================================ //
// CONSULTA-GEOGRAFICA.JS - JAVASCRIPT         //
// ============================================ //

/**
 * CIMHA - Consulta Territorial
 * Selección de departamento y municipio
 */

// ============================================ //
// 1. DATOS DE DEPARTAMENTOS Y MUNICIPIOS      //
// ============================================ //

const data = {
    'Atlántico': ['Sabanalarga', 'Campo de la Cruz', 'Santa Lucía', 'Suan'],
    'Bolívar': ['Magangué', 'Mompox', 'Pinillos', 'San Cristóbal'],
    'Cesar': ['Gamarra', 'La Gloria', 'Chimichagua', 'Tamalameque'],
    'Córdoba': ['Montería', 'Lorica', 'Tierralta', 'San Pelayo', 'Cereté'],
    'La Guajira': ['Riohacha', 'Distracción', 'Fonseca', 'Barrancas'],
    'Magdalena': ['El Banco', 'Plato', 'Santa Ana', 'Tenerife'],
    'Sucre': ['Majagual', 'Guaranda', 'San Marcos', 'Sucre']
};

// ============================================ //
// 2. VARIABLES DE ESTADO                       //
// ============================================ //

let selectedDept = null;
let selectedMuni = null;
let activeSelectionType = null;

// ============================================ //
// 3. REFERENCIAS A ELEMENTOS DOM              //
// ============================================ //

const deptTrigger = document.getElementById('dept-trigger');
const muniTrigger = document.getElementById('muni-trigger');
const submitBtn = document.getElementById('submit-btn');
const deptLabel = document.getElementById('dept-label');
const muniLabel = document.getElementById('muni-label');
const overlay = document.getElementById('modal-overlay');
const sheet = document.getElementById('bottom-sheet');
const list = document.getElementById('options-list');
const modalTitle = document.getElementById('modal-title');
const main = document.querySelector('main');

// ============================================ //
// 4. EVENT LISTENERS                          //
// ============================================ //

deptTrigger.addEventListener('click', () => openModal('dept'));
muniTrigger.addEventListener('click', () => openModal('muni'));
overlay.addEventListener('click', closeModal);

// ============================================ //
// 5. FUNCIONES DEL MODAL                      //
// ============================================ //

function openModal(type) {
    activeSelectionType = type;
    list.innerHTML = '';
    
    const options = type === 'dept' ? Object.keys(data) : data[selectedDept];
    const currentSelection = type === 'dept' ? selectedDept : selectedMuni;
    modalTitle.textContent = type === 'dept' ? 'Seleccione Departamento' : 'Seleccione Municipio';

    if (!options) {
        console.warn('No hay opciones disponibles');
        return;
    }

    options.forEach(opt => {
        const isSelected = opt === currentSelection;
        const div = document.createElement('div');
        div.className = `px-gutter py-5 flex items-center cursor-pointer border-b border-surface-container transition-colors ${
            isSelected ? 'bg-secondary-container/10 border-l-[6px] border-l-secondary' : 'hover:bg-surface-container-low'
        }`;
        div.innerHTML = `<span class="font-body-lg text-on-surface ${isSelected ? 'font-normal' : ''}">${opt}</span>`;
        div.onclick = () => selectOption(opt);
        list.appendChild(div);
    });

    overlay.classList.add('open');
    sheet.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.classList.remove('open');
    sheet.classList.remove('open');
    document.body.style.overflow = '';
}

function selectOption(val) {
    if (activeSelectionType === 'dept') {
        if (selectedDept !== val) {
            selectedDept = val;
            deptLabel.textContent = val;
            deptLabel.classList.remove('text-on-surface-variant');
            deptLabel.classList.add('text-on-surface', 'font-bold');
            
            // Reset Municipio
            selectedMuni = null;
            muniLabel.textContent = 'Seleccione un municipio';
            muniLabel.classList.add('text-on-surface-variant');
            muniLabel.classList.remove('text-on-surface', 'font-bold');
            
            // Habilitar Municipio Trigger
            muniTrigger.disabled = false;
            muniTrigger.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-surface-container-low');
            muniTrigger.classList.add('bg-surface');
        }
    } else {
        selectedMuni = val;
        muniLabel.textContent = val;
        muniLabel.classList.remove('text-on-surface-variant');
        muniLabel.classList.add('text-on-surface', 'font-bold');
    }

    validateForm();
    closeModal();
}

// ============================================ //
// 6. VALIDACIÓN DEL FORMULARIO                //
// ============================================ //

function validateForm() {
    if (selectedDept && selectedMuni) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-surface-dim', 'text-on-surface-variant/50', 'cursor-not-allowed');
        submitBtn.classList.add('bg-secondary', 'text-on-primary', 'shadow-lg', 'active:scale-[0.98]', 'active:opacity-80');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.add('bg-surface-dim', 'text-on-surface-variant/50', 'cursor-not-allowed');
        submitBtn.classList.remove('bg-secondary', 'text-on-primary', 'shadow-lg', 'active:scale-[0.98]', 'active:opacity-80');
    }
}

// ============================================ //
// 7. ENVÍO DEL FORMULARIO                     //
// ============================================ //

submitBtn.addEventListener('click', () => {
    if (!submitBtn.disabled) {
        // Guardar selección en localStorage
        localStorage.setItem('selected_location', JSON.stringify({
            dept: selectedDept,
            muni: selectedMuni
        }));
        
        // Efecto de salida
        submitBtn.style.transition = 'all 0.5s ease-out';
        submitBtn.style.opacity = '0';
        submitBtn.style.transform = 'scale(0.95)';
        
        // Redirigir después de 600ms
        setTimeout(() => {
            console.log('📍 Ubicación seleccionada:', selectedDept, '→', selectedMuni);
            window.location.href = 'dashboard.html'; // Cambia por la pantalla destino
        }, 600);
    }
});

// ============================================ //
// 8. CERRAR MODAL CON TECLA ESC               //
// ============================================ //

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================ //
// 9. INICIALIZACIÓN                           //
// ============================================ //

console.log('🚀 Consulta Geográfica - Iniciado correctamente');
console.log('📍 Departamentos disponibles:', Object.keys(data).length);
