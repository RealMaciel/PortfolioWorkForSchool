let math = Math.floor(Math.random() * 100) + 1;
let tries = 0;

document.getElementById("btn").addEventListener("click", function() {
    let tentativa = document.getElementById("guess").value;
    if (tries >= 10) {
        document.getElementById("message").textContent = "Você perdeu! O número era " + math;
        document.getElementById("message").style.color = "red";
        tries = 0;
        math = Math.floor(Math.random() * 100) + 1;
        return;
    }
    if (tentativa == math) {
        document.getElementById("message").textContent = "Parabéns! Você acertou!";
        document.getElementById("message").style.color = "green";
        tries = 0;
        math = Math.floor(Math.random() * 100) + 1;
    } else if (tentativa < math) {
        document.getElementById("message").textContent = "Tente um número maior!";
        document.getElementById("message").style.color = "red";
        tries++;
        
    } else {
        document.getElementById("message").textContent = "Tente um número menor!";
        document.getElementById("message").style.color = "red";
        tries++;
    }
    document.getElementById("tries").textContent = tries;
});
document.getElementById("reset").addEventListener("click", function() {
    tries = 0;
    math = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "Jogo reiniciado! Digite um número para começar";
    document.getElementById("message").style.color = "black";
    document.getElementById("tries").textContent = tries;
});