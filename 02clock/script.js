let hand = document.getElementsByClassName('hand')
let handHour = hand[0] //hand logo acima é um array, portanto podemos atribuir variáveis desde que saibamos seu index
let handMin = hand[1]
let handSec = hand[2]
let btn = document.querySelector('.btn')

console.log(hand, btn)

btn.addEventListener('click', function(e){
    console.log('ok')
    handHour.style.transform = 'rotate(0deg)'
    console.log('ok')
})