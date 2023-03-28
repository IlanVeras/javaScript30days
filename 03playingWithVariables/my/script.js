
let slider1 = document.querySelector('.slider1')
let slider2 = document.querySelector('.slider2')
let img = document.querySelector('#montain')
let cover = document.querySelector('.coverIt')
console.log(img)

function showIt(){
    let transparency = (slider1.value/1000) * 10
    cover.style.backgroundColor = `rgb(0, 0, 0, ${transparency})`
}

function moveIt(){
    let y = slider2.value
    img.style.transform = `translateY(${y}%)`
}

slider1.addEventListener('input', showIt)
slider2.addEventListener('input', moveIt)

console.log(cover)
