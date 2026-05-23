const loggedUser = JSON.parse(localStorage.getItem('loggedUser')); // Obtém o usuário logado do localStorage
if (!loggedUser) {
    window.location.href = 'principal/login/login.html'; // Redireciona para a página de login se não houver usuário logado
}
document.getElementById('username').textContent = loggedUser.username; // Exibe o nome do usuário logado na página