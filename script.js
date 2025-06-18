// Script para adicionar interatividade à página

document.addEventListener('DOMContentLoaded', function() {
    // Animação suave para links de navegação interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adiciona classe para animação quando elementos entram na viewport
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card, .profile-image, .profile-text').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Função para validar e enviar formulário de contato (se for adicionado no futuro)
function validateForm() {
    // Código para validação de formulário pode ser adicionado aqui
    return true;
}

// Adiciona animação de entrada para elementos
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});