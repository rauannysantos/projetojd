// "FAQ" (Accordion)
document.querySelectorAll('.duvida-item-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            document.querySelectorAll('.duvida-item-conteudo').forEach(item => item.style.display = 'none');
            content.style.display = 'block';
        }
    });
});

// Formulário de Contato
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;
    const nameField = document.querySelector('input[type="text"]');
    const emailField = document.querySelector('input[type="email"]');
    const messageField = document.querySelector('textarea');
    
//  Nome
    if (nameField.value.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        valid = false;
    }

// Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value.trim())) {
        alert('Por favor, insira um e-mail válido.');
        valid = false;
    }

// Mensagem
    if (messageField.value.trim() === '') {
        alert('Por favor, preencha o campo Mensagem.');
        valid = false;
    }

    if (valid) {
        alert('Mensagem enviada com sucesso!');
        this.submit();
    }
});