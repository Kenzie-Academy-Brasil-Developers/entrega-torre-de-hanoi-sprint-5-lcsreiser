let torres = [ [ ], [ ], [ ] ]
let movimento = null
let referenciaVitoria = 0

criarTorre()


document.getElementById('facil').addEventListener('click', nivel)
document.getElementById('medio').addEventListener('click', nivel)
document.getElementById('dificil').addEventListener('click', nivel)
document.querySelector('.t1').addEventListener('click', jogada)
document.querySelector('.t2').addEventListener('click', jogada)
document.querySelector('.t3').addEventListener('click', jogada)

function criarTorre(){
    for(let t = 1; t <= 3; t++){
        let divPai = document.getElementById('Div'+t)
        let torre = document.createElement('div')
        torre.setAttribute('id', t-1)
        torre.setAttribute('class', 'torre t'+t)
        divPai.appendChild(torre)
    }
}

function nivel(e) {
   
    for(let i = parseInt(e.target.value); i >= 1; i--){
        let torre = document.querySelector('.t1')
        let disco = document.createElement('div')
        disco.setAttribute('id', 'd' + i)
        disco.setAttribute('class', 'disco d' + i)
        torre.appendChild(disco)

        torres[0].push(i)
    }
}

function jogada(e){

    let t = e.currentTarget.id
  
    if ( movimento == null ){
        movimento = torres[t].pop()
    }else {
        document.getElementById('msg').innerHTML = ""
        verificaPossibilidade(t)
    }
}

function verificaPossibilidade(proxTorre){

    if(torres[proxTorre].length === 0){
        torres[proxTorre].push(movimento)
        movimentarDisco(proxTorre)
        verificaVitoria()
    }else {
        if( movimento < torres[ proxTorre ][ torres[proxTorre].length-1 ] ){
            torres[proxTorre].push(movimento)
            movimentarDisco(proxTorre)
            verificaVitoria()
        }else{
            document.getElementById('msg').innerHTML = "Movimento inválido. Tente novamente!"
        }
    }
}

function movimentarDisco(proxTorre){
    let disco = document.getElementById('d'+movimento)
    disco.remove()
    disco.setAttribute('id', 'd' + movimento)
    disco.setAttribute('class', 'disco d' + movimento)
    document.getElementById(proxTorre).appendChild(disco)

    movimento = null
}

function verificaVitoria(){
    if ( torres[2].length ==  referenciaVitoria){
        document.getElementById('msg').innerHTML = "Vitória!!!!!!!"
    }
}


