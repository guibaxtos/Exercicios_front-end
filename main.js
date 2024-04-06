function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novmente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','img')
        if (fsex [0].checked) {
            genero = 'Homem'
            if( idade >= 0 && idade < 10) {
                img.setAttribute('src','./imagens/menino-kid.png')
            } else if (idade < 21) {
                img.setAttribute('src','./imagens/menino-teen.png')
            } else if (idade < 50) {
                img.setAttribute('src','./imagens/homem-adult.png')
            } else {
                img.setAttribute('src','./imagens/homem-old.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if( idade >= 0 && idade < 10) {
                img.setAttribute('src','./imagens/menina-kid.png')
            } else if (idade < 21) {
                img.setAttribute('src','./imagens/menina-teen.png')
            } else if (idade < 50) {
                img.setAttribute('src','./imagens/mulher-adult.png')
            } else {
                img.setAttribute('src','./imagens/mulher-old.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}