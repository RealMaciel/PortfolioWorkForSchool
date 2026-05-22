document.getElementById("username").textContent = "Nome de usuário: " + JSON.parse(localStorage.getItem('loggedUser')).username; // Exibe o nome do usuário logado na página
document.getElementById('save').addEventListener('click', function() {
    const nome = document.getElementById('text-input').value;
    if (nome) {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        const users = JSON.parse(localStorage.getItem('users')) || [];
        loggedUser.username = nome; // Atualiza o nome do perfil
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser)); // Salva as alterações no localStorage
        // Atualiza o nome no array de usuários
        const userIndex = users.findIndex(user => user.id === loggedUser.id);
        if (userIndex !== -1) {
            users[userIndex].username = nome;
            localStorage.setItem('users', JSON.stringify(users));
        }
        document.getElementById('username').textContent = "Nome de usuário: " + nome; // Atualiza o nome exibido na página
        console.log('Informações salvas com sucesso!');
    }
});