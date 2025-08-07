// Controle de Temas
const themes = [
    { name: "light", icon: "fa-sun", label: "Amarelo Claro" },
    { name: "default", icon: "fa-moon", label: "Amarelo Original" }, 
    { name: "dark", icon: "fa-moon", label: "Modo Noturno" }
];

let currentThemeIndex = 0;

// Modifique a função rotateTheme para:
function rotateTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];
    
    document.body.setAttribute('data-theme', theme.name);
    localStorage.setItem('siteTheme', theme.name);
    
    const icon = document.querySelector('.theme-toggle i');
    icon.className = `fas ${theme.icon}`;
    icon.title = theme.label;
    
    // Forçar redesenho para garantir a aplicação do tema
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
}
// Carrega tema salvo
function loadTheme() {
    const savedTheme = localStorage.getItem('siteTheme') || 'light';
    const themeIndex = themes.findIndex(t => t.name === savedTheme);
    currentThemeIndex = themeIndex >= 0 ? themeIndex : 0;
    
    const theme = themes[currentThemeIndex];
    document.body.setAttribute('data-theme', theme.name);
    
    const icon = document.querySelector('.theme-toggle i');
    icon.className = `fas ${theme.icon}`;
    icon.title = theme.label;
}

// Inicializa
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    document.querySelector('.theme-toggle').addEventListener('click', rotateTheme);
});

// Formulário WhatsApp
document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `Olá, gostaria de solicitar um orçamento para:%0A%0A*Serviço:* ${service}%0A*Nome:* ${name}%0A*Detalhes:* ${message}`;
    window.open(`https://wa.me/5519996655399?text=${whatsappMessage}`, '_blank');
});

// Animação para todos os ícones
document.querySelectorAll('.service-card i, .contact-item i, .social-links i').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});