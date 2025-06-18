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

    // Proteções básicas do website
    // Desabilitar teclas de atalho do desenvolvedor (mantendo Ctrl+C)
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
        
        // Ctrl+Shift+E (DevTools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 69) {
            e.preventDefault();
            return false;
        }
    });
    
    // Desabilitar arrastar elementos
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Proteger contra inspeção via console
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200) {
            document.body.innerHTML = 'Acesso não autorizado detectado.';
        }
    }, 1000);
    
    // Desabilitar DevTools via console
    function detectDevTools() {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;"><h1>Acesso Negado</h1><p>Ferramentas de desenvolvedor não são permitidas neste site.</p></div>';
        }
    }
    
    // Verificar periodicamente
    setInterval(detectDevTools, 500);
    
    // Proteger contra debugger
    setInterval(function() {
        debugger;
    }, 100);
    
    // Desabilitar console
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
    console.info = function() {};
    
    // Proteger contra modificação do DOM
    const observerDOM = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Restaurar conteúdo original se detectar modificações suspeitas
                location.reload();
            }
        });
    });
    
    observerDOM.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Proteção adicional contra inspeção
(function() {
    function ban() {
        document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;"><h1>⚠️ Acesso Bloqueado</h1><p>Ferramentas de desenvolvedor detectadas.</p></div>';
    }
    
    // Verificar se DevTools está aberto
    let devtools = {
        open: false,
        orientation: null
    };
    
    setInterval(() => {
        const threshold = 160;
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                ban();
            }
        } else {
            devtools.open = false;
        }
    }, 500);
})();

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