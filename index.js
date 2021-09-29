let torres = [ [ ], [ ], [ ] ]
let movimento = null
let referenciaVitoria = 0
let count = 0

criarTorre()

//BOTÕES DE DIFICULDADE
document.getElementById('facil').addEventListener('click', nivel)
document.getElementById('medio').addEventListener('click', nivel)
document.getElementById('dificil').addEventListener('click', nivel)
document.getElementById('reset').addEventListener('click', reset)

//BOTÃO RESET
document.getElementById('reset').style.display = 'none';

//
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

function nivel(event) {
   
    for(let i = parseInt(event.target.value); i >= 1; i--){
        let torre = document.querySelector('.t1')
        let disco = document.createElement('div')
        disco.setAttribute('id', 'd' + i)
        disco.setAttribute('class', 'disco d' + i)
        torre.appendChild(disco)

        torres[0].push(i)
    }

    document.getElementById('facil').style.display = 'none';
    document.getElementById('medio').style.display = 'none';
    document.getElementById('dificil').style.display = 'none';
    document.getElementById('reset').style.display = 'inline';

}

function jogada(event){

    let t = event.currentTarget.id
  
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
        contador()
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

//FUNÇÃO DE VERIFICAR A VITÓRIA
function verificaVitoria(){
    if (torres[0].length ==  referenciaVitoria && torres[1].length ==  referenciaVitoria){
        document.getElementById('msg').innerHTML = "Vitória!!!!!!!"
    }
}


//FUNÇÃO DE CONTAGEM DE MOVIMENTOS
function contador(){
    count ++
    console.log(count)
}

function reset(){
   
    let number = torres[0].length + torres[1].length + torres[2].length

    


    for(let i = number; i >= 1; i--){
        let limparTorre = document.querySelector('.t'+number)
        limparTorre.removeChild




        let torre = document.querySelector('.t1')
        let disco = document.createElement('div')
        disco.setAttribute('id', 'd' + i)
        disco.setAttribute('class', 'disco d' + i)
        torre.appendChild(disco)

        torres[0].push(i)
}
}