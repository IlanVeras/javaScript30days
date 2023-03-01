let hand = document.getElementsByClassName('hand')
let handHour = hand[0] //hand logo acima é um array, portanto podemos atribuir variáveis desde que saibamos seu index
let handMin = hand[1]
let handSec = hand[2]



function relogio(){
    const d = new Date()
    //Do jeito abaixo podemos mostrar as horas como nos EUA
    // let hour = d.getHours() % 12 || 12
    //unidadeDeTempo * graus
    //apesar de termos contado em formato de rológio 24 horas o correto é conrtarmos como 12 horas, portanto a divisão de hora por grau será 360/12 = 30 NÃO 360/24 = 12
    let hour = d.getHours() % 12 || 12
    let minutes = d.getMinutes()
    let secondes = d.getSeconds()


    //Para saber quantos graus algo deve rodar basta seguir a fómula
        //360/unidadeDeTempo = graus
        //depois: unidadeDeTempo * graus

    grausHora = (360 / 12) * hour
    grausMinutos = (360 / 60) * minutes
    grausSegundos = (360 / 60) * secondes

    
    let hDeg = grausHora 
    let mDeg = grausMinutos
    let sDeg = grausSegundos


    //console.log(`${hour}:${minutes}:${secondes}`)


    handHour.style.transform = `rotate(${hDeg}deg)`
    handMin.style.transform = `rotate(${mDeg}deg)`
    handSec.style.transform = `rotate(${sDeg}deg)`
}

relogio()
setInterval(relogio, 1000)
