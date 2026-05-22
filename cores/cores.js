let r = Math.floor(Math.random() * 255) + 1;
let g = Math.floor(Math.random() * 255) + 1;
let b = Math.floor(Math.random() * 255) + 1;

document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

document.getElementById("color-btn").addEventListener("click", function() {
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById("color").textContent = `Hex aqui: #${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    document.getElementById("color-display").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});