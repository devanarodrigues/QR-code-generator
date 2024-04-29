const input = document.getElementById('floatingInputGrid')
const img = document.getElementById('QRimg')
const card = document.getElementById('card')
const cardText = document.getElementById('card-text')
const botaoNovoQR = document.getElementById('novoQR')
const botaoGerarQR = document.getElementById('gerar')
const label = document.getElementById('label')

function gerarQR() {
    if (input.value) {
        QRimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
        card.classList.remove('d-none')
        cardText.innerHTML = "Pronto para escanear."
        input.value = ''
        botaoNovoQR.classList.remove('d-none')
        input.classList.add('d-none')
        botaoGerarQR.classList.add('d-none')
        label.classList.add('d-none')
    } else {
        QRimg.src = ``
        QRimg.alt = `Inválido`
        card.classList.remove('d-none')
        cardText.innerHTML = "Inválido ou não preenchido. Tente novamente."
    }
}

function novoQR(){
    botaoNovoQR.classList.add('d-none')
    input.classList.remove('d-none')
    botaoGerarQR.classList.remove('d-none')
    label.classList.remove('d-none')
    QRimg.src = ``
    card.classList.add('d-none')
}