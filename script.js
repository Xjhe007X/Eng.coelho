document.addEventListener('DOMContentLoaded', function() {
    // Formulário de orçamento
    const budgetForm = document.getElementById('budget-form');
    
    if (budgetForm) {
        budgetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar valores do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Criar mensagem para WhatsApp
            const whatsappMessage = `Olá, gostaria de solicitar um orçamento!\n\n` +
                                   `*Nome:* ${name}\n` +
                                   `*Email:* ${email}\n` +
                                   `*Telefone:* ${phone}\n` +
                                   `*Serviço:* ${service}\n` +
                                   `*Detalhes:* ${message}\n\n` +
                                   `Aguardo seu retorno!`;
            
            // Codificar mensagem para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Redirecionar para WhatsApp
            window.open(`https://wa.me/5519996655399?text=${encodedMessage}`, '_blank');
            
            // Limpar formulário
            budgetForm.reset();
            
            // Feedback para o usuário
            alert('Você será redirecionado para o WhatsApp para concluir sua solicitação. Obrigado!');
        });
    }
    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adicionar classe ativa ao menu de navegação
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});