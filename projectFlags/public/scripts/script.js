console.log('Script Public')
const numIndex = Math.floor(Math.random() * 10)


function returnRandom(){
    return Math.floor(Math.random() * 10)
}

let numR = returnRandom()

document.addEventListener("DOMContentLoaded", () =>{
    showoFlag(numR)
})


function showoFlag(index){
    fetch(`http://localhost:3000/${index}`)
    .then(r => {
        console.log(r)
        return r.json()
    }).then(objC => {
        console.log(objC)
        console.log(objC.nameC)
        let container = document.querySelector('.container')
        let divFlag = document.getElementById('flag')
        divFlag.innerHTML = `<img src="${objC.url}" alt="" width="50px">`
        container.innerHTML += '<button type="submit" onclick="verify(numR)">Tentar</button>'
    })
}

function verify(index){
    fetch(`http://localhost:3000/${index}`)
    .then(r => {
        console.log(r)
        return r.json()
    }).then(objC => {
        let guessText = document.querySelector('#guessText').value
        if(guessText != ''){
            if(guessText.toLowerCase() === objC.nameC.toLowerCase()){
                alert('Acertou')
                //como fazer para que quando acerte o numR mude e todo o código acompanhe
                location.reload()
            }else{
                alert('Errou')
            }
        }else{
            console.log('Vazio')
        }
    })
}



