document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users'));
    
    if (users) {
        const user = users.find(u => u.username === usuario && u.password === senha);
        if (user) {
            localStorage.setItem('loggedUser', JSON.stringify(user)); // Armazena o usuário logado
            window.location.href = '../index.html'; // Redireciona para a página principal
        } else {
            alert('Usuário ou senha incorretos. Por favor, tente novamente.');
        }
    } else {
        alert('Nenhum usuário registrado. Por favor, registre-se primeiro.');
    }
});