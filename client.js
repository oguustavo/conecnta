// Manipulação de habilidades
const skillInput = document.getElementById('skill-input');
const skillsContainer = document.querySelector('.skills-container');

skillInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const skillText = this.value.trim();
        if (skillText) {
            addSkill(skillText);
            this.value = '';
        }
    }
});

function addSkill(text) {
    const skillTag = document.createElement('div');
    skillTag.className = 'skill-tag';
    skillTag.innerHTML = `${text} <i class="fas fa-times"></i>`;
    
    skillTag.querySelector('i').addEventListener('click', function() {
        skillTag.remove();
    });
    
    skillsContainer.insertBefore(skillTag, skillInput);
}

// Manipulação do formulário e modal
const form = document.querySelector('.problem-form');
const modal = document.getElementById('successModal');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você adicionaria a lógica para enviar os dados para o servidor
    // Por enquanto, apenas simulamos o sucesso
    showModal();
});

function showModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Previne rolagem enquanto modal estiver aberto
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restaura rolagem
    
    // Limpa o formulário
    form.reset();
    
    // Remove todas as skills
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        if (tag !== skillInput) {
            tag.remove();
        }
    });
}

// Fecha o modal se clicar fora dele
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Fecha o modal com a tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
}); 