function carregar() {
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
var hora = 
msg.innerHTML = `Agora são ${hora} horas`;
if (hora >= 0 && hora < 12) {
    img.src = "./imagens/manha.png"
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    img.src = "./imagens/tarde.png"
    document.body.style.background = '#b9846f'
} else {
    img.src = "./imagens/noite.png"
    document.body.style.background = 'rgba(38, 58, 122, 0.963)'
}
}