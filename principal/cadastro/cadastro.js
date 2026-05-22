document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    const user = {
        id: Date.now(), // Gera um ID único baseado no timestamp
        username: usuario,
        password: senha
    }
    if (users.some(u => u.username === usuario)) {
        alert('Usuário já existe. Por favor, escolha outro nome de usuário.');
        return;
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro bem-sucedido! Agora você pode fazer login.');
    window.location.href = '../login/login.html';
});