console.log('Script Public')
document.addEventListener("DOMContentLoaded", () =>{
    showoFlag()
})
function showoFlag(){
    fetch('http://localhost:3000/api')
    .then(r => {
        console.log(r)
        return r.json()
    }).then(objC => {
        console.log(objC)
        console.log(objC.countrie)
        let divFlag = document.getElementById('flag')
        divFlag.innerHTML = `<img src="${objC.url}" alt="" width="50px">`
    })
}

function verify(){
    console.log(typeof(showoFlag))
}

