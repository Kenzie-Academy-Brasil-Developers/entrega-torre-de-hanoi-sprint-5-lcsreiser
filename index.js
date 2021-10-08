let torres = [[], [], []]
let movimento = null
let referenciaVitoria = 0
let count = 0

criarTorre()

//BOTÕES DE DIFICULDADE
document.getElementById('facil').addEventListener('click', nivel)
document.getElementById('medio').addEventListener('click', nivel)
document.getElementById('dificil').addEventListener('click', nivel)
document.getElementById('reset').addEventListener('click', reset)



//


document.querySelector('#Div1').addEventListener('click',jogada)
document.querySelector('#Div2').addEventListener('click',jogada)
document.querySelector('#Div3').addEventListener('click',jogada)




function criarTorre() {
    for (let t = 1; t <= 3; t++) {
        let divPai = document.getElementById('Div' + t)
        let torre = document.createElement('div')
        torre.setAttribute('id', t - 1)
        torre.setAttribute('class', 'torre t' + t)
        divPai.appendChild(torre)
    }
}

function nivel(event) {

    torres = [[], [], []]
    document.querySelector('.t1').innerHTML = ''
    document.querySelector('.t2').innerHTML = ''
    document.querySelector('.t3').innerHTML = ''

    for (let i = parseInt(event.target.value); i >= 1; i--) {
        let torre = document.querySelector('.t1')
        let disco = document.createElement('div')
        disco.setAttribute('id', 'd' + i)
        disco.setAttribute('class', 'disco d' + i)
        torre.appendChild(disco)

        torres[0].push(i)
    }
}

function jogada(event) {

    let t = event.currentTarget.id.slice(-1)-1
    
    console.log(t)
    if (movimento == null) {
        movimento = torres[t].pop()
    } else {
        document.getElementById('msg').innerHTML = ""
        verificaPossibilidade(t)
    }
   
}

function verificaPossibilidade(proxTorre) {

    if (torres[proxTorre].length === 0) {
        torres[proxTorre].push(movimento)
        movimentarDisco(proxTorre)
        contador()
        verificaVitoria()
    } else {
        if (movimento < torres[proxTorre][torres[proxTorre].length - 1]) {
            torres[proxTorre].push(movimento)
            movimentarDisco(proxTorre)
            contador()
            verificaVitoria()
        } else {
            document.getElementById('msg').innerHTML = "Movimento inválido. Tente novamente!"
            document.getElementById('msg').style.background = 'red'
        }
    }
}

function movimentarDisco(proxTorre) {
    let disco = document.getElementById('d' + movimento)
    disco.remove()
    disco.setAttribute('id', 'd' + movimento)
    disco.setAttribute('class', 'disco d' + movimento)
    document.getElementById(proxTorre).appendChild(disco)

    movimento = null
}

//FUNÇÃO DE VERIFICAR A VITÓRIA
function verificaVitoria() {
    if (torres[0].length == referenciaVitoria && torres[1].length == referenciaVitoria) {
        document.getElementById('msg').style.color = 'green'
        document.getElementById('msg').innerHTML = "Vitória!!!!!!!"
        document.getElementById('msg').style.background = 'lightgreen'
    }
}

length
//FUNÇÃO DE CONTAGEM DE MOVIMENTOS
function contador() {
    count++
    document.querySelector('.contador').innerHTML = ' Movimentos ' + count
}

function reset() {

    let number = torres[0].length + torres[1].length + torres[2].length
    console.log(number)

    document.querySelector('.t1').innerHTML = ''
    document.querySelector('.t2').innerHTML = ''
    document.querySelector('.t3').innerHTML = ''
    document.querySelector('.contador').innerHTML = ''
    document.getElementById('msg').innerHTML = ''

    for (let i = number; i >= 1; i--) {
        let torre = document.querySelector('.t1')
        let disco = document.createElement('div')
        disco.setAttribute('id', 'd' + i)
        disco.setAttribute('class', 'disco d' + i)
        torre.appendChild(disco)

        torres[0].push(i)
    }
    
    
}