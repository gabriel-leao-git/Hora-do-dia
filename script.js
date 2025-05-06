function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 13
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 5 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#5270ff'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#ff5757'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#8c52ff '
    }
}