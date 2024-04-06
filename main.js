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

            } else if (idade < 21) {

            } else if (idade < 50) {

            } else {

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if( idade >= 0 && idade < 10) {

            } else if (idade < 21) {

            } else if (idade < 50) {

            } else {
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}