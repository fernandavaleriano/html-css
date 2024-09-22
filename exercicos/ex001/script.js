document.getElementById('themeToggle').addEventListener('click', function() {
    // Alterna entre os temas
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    // Muda o texto do botão conforme o tema
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = 'Alternar para Tema Claro';
    } else {
        this.textContent = 'Alternar para Tema Escuro';
    }
});
