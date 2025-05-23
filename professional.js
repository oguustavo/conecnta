// Elementos do DOM
const applyModal = document.getElementById('applyModal');
const successModal = document.getElementById('successModal');
const applicationForm = document.getElementById('applicationForm');
const applyButtons = document.querySelectorAll('.opportunity-card .btn.primary');

// Adiciona evento de clique em todos os botões de candidatura
applyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.opportunity-card');
        const jobTitle = card.querySelector('h3').textContent;
        const budget = card.querySelector('.budget').textContent;
        
        // Preenche o valor sugerido no campo de valor pretendido
        const expectedValueInput = document.getElementById('expectedValue');
        const suggestedValue = parseInt(budget.replace(/[^0-9]/g, ''));
        expectedValueInput.value = suggestedValue;
        
        showApplyModal();
    });
});

// Funções para controlar os modais
function showApplyModal() {
    applyModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeApplyModal() {
    applyModal.classList.remove('show');
    document.body.style.overflow = '';
    applicationForm.reset();
}

function showSuccessModal() {
    successModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    successModal.classList.remove('show');
    document.body.style.overflow = '';
}

// Manipulação do formulário de candidatura
applicationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você adicionaria a lógica para enviar os dados para o servidor
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    console.log('Dados da candidatura:', data);
    
    // Fecha o modal de candidatura e mostra o modal de sucesso
    closeApplyModal();
    showSuccessModal();
});

// Fecha os modais ao clicar fora deles
[applyModal, successModal].forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            if (modal === applyModal) {
                closeApplyModal();
            } else {
                closeModal();
            }
        }
    });
});

// Fecha os modais com a tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (applyModal.classList.contains('show')) {
            closeApplyModal();
        }
        if (successModal.classList.contains('show')) {
            closeModal();
        }
    }
});

// Melhoria visual no botão de candidatura
applyButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
