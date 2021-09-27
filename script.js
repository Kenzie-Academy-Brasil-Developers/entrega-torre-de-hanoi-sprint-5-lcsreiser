//CAPTURANDO OS DISCOS
const disco1 = document.querySelector('.d1')
const disco2 = document.querySelector('.d2')
const disco3 = document.querySelector('.d3')
const disco4 = document.querySelector('.d4')

const offset = document.querySelector('#offset')


//BUBBLING
const discos = document.querySelector('.disco')

discos.addEventListener('click', pegarDisco)


function pegarDisco(event){


    const jogo = event.target
    console.log(jogo.tagName)
    if(jogo.tagName === 'DIV'){

        offset.appendChild(discos)
    }
}

//ajoelha se prepara