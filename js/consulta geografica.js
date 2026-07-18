// Data Configuration
const data = {
    'Córdoba': ['Montería', 'Lorica', 'Tierralta', 'San Pelayo', 'Cereté'],
};

// State Variables
let selectedDept = null;
let selectedMuni = null;
let activeSelectionType = null;

// DOM Elements
const deptTrigger = document.getElementById('dept-trigger');
const muniTrigger = document.getElementById('muni-trigger');
const submitBtn = document.getElementById('submit-btn');
const deptLabel = document.getElementById('dept-label');
const muniLabel = document.getElementById('muni-label');
const overlay = document.getElementById('modal-overlay');
const sheet = document.getElementById('bottom-sheet');
const list = document.getElementById('options-list');
const modalTitle = document.getElementById('modal-title');

// Event Listeners
deptTrigger.addEventListener('click', () => openModal('dept'));
muniTrigger.addEventListener('click', () => {
    if (!muniTrigger.disabled) {
        openModal('muni');
    }
});

overlay.addEventListener('click', closeModal);

// Modal Functions
function openModal(type) {
    activeSelectionType = type;
    list.innerHTML = '';
    
    const options = type === 'dept' ? Object.keys(data) : data[selectedDept];
    const currentSelection = type === 'dept' ? selectedDept : selectedMuni;
    modalTitle.textContent = type === 'dept' ? 'Seleccione Departamento' : 'Seleccione Municipio';

    options.forEach(opt => {
        const isSelected = opt === currentSelection;
        const div = document.createElement('div');
        div.className = `option-item ${isSelected ? 'selected' : ''}`;
        div.innerHTML = `<span class="font-body-lg text-on-surface ${isSelected ? 'font-bold' : ''}">${opt}</span>`;
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
            
            // Enable Municipio Trigger
            muniTrigger.disabled = false;
            muniTrigger.classList.remove('opacity-50', 'cursor-not-allowed');
            muniTrigger.classList.add('bg-surface');
        }
    } else {
        if (selectedMuni !== val) {
            selectedMuni = val;
            muniLabel.textContent = val;
            muniLabel.classList.remove('text-on-surface-variant');
            muniLabel.classList.add('text-on-surface', 'font-bold');
        }
    }

    validateForm();
    closeModal();
}

function validateForm() {
    if (selectedDept && selectedMuni) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-surface-dim', 'text-on-surface-variant/50', 'cursor-not-allowed');
        submitBtn.classList.add('bg-secondary', 'text-on-primary', 'shadow-lg', 'active:scale-[0.98]', 'active:opacity-80');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.add('bg-surface-dim', 'text-on-surface-variant/50', 'cursor-not-allowed');
        submitBtn.classList.remove('bg-secondary', 'text-on-primary', 'shadow-lg');
    }
}

// Submit Handler
submitBtn.addEventListener('click', () => {
    if (!submitBtn.disabled) {
        submitBtn.style.transition = 'all 0.5s ease-out';
        submitBtn.style.opacity = '0';
        submitBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            alert('Consulta iniciada para: ' + selectedDept + ', ' + selectedMuni);
            submitBtn.style.opacity = '1';
            submitBtn.style.transform = 'scale(1)';
        }, 600);
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize
validateForm();
