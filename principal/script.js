if (!localStorage.getItem('usuarios')) {
    window.location.href = 'login/login.html'; // Redireciona para a página de login se não estiver logado
}
document.getElementById('username').textContent = JSON.parse(localStorage.getItem('loggedUser')).username; // Exibe o nome do usuário logado na página