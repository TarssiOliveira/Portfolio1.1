function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //fullyear representa os 4 digitos do ano. 2022
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {   
             genero = 'Homem'
            if (idade >= 0 && idade <1) {
                //Bebe
                img.setAttribute('src','bebe-masc.png')
            } else if (idade <10) {
                //Criança
                img.setAttribute('src','crian-masc.png')
            } else if (idade <19) {
                //Adolescente
                img.setAttribute('src','adol-masc.png')
            } else if (idade <35) {
                //Jovem
                img.setAttribute('src','jov-masc.png')
            } else if (idade <55) { 
                //Adulto
                img.setAttribute('src','adul-masc.png')
            } else {
                //Idoso
                img.setAttribute('src','ido-masc.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <1) {
                //Bebe
                img.setAttribute('src','bebe-fem.png')
            } else if (idade <10) {
                //Criança
                img.setAttribute('src','crian-fem.png')
            } else if (idade <16) {
                //Adolescente
                img.setAttribute('src','adol-fem.png')
            } else if (idade <35) {
                //Jovem
                img.setAttribute('src','jov-fem.png')
            } else if (idade <55) { 
                //Adulto
                img.setAttribute('src','adul-fem.png')
            } else {
                //Idoso
                img.setAttribute('src','ido-fem')
            }
        }
        res.style.textAltgn = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}