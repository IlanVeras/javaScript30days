const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = []

fetch(endpoint)
    .then(blob => blob.json())
    //aqui juntamos o obj data e o obj cities em apenas um com '...'
    .then(data => cities.push(...data))



//crie uma função que por meio de uma expressão regular calcule
function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        //se a palavra passada no 'wordToMatch' corresponde a cidade ou estado do lugar retorne ela
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

const search = document.querySelector(".search")
const suggestions = document.querySelector(".suggestions")

function displayMatches(){
    //Usei o this aqui pois assim ele pode ser empregado em outros lugares no futuro, mas eu basicamente estou pegando o valor de 'search'
    let result = findMatches(this.value, cities)
    
    //agora que já temos o resultado vamos usar o map:
    let htmlString = result.map(place => {
        //criamos outra expressão regular
        const regex = new RegExp(this.value, 'gi')
        //com a expressão regular pegamos o nome da cidade e xolocamos ele dentro de um span com uma hl ('hight-light)
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        //fazemos o mesmo com a cidade
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`)
        //retornamos uma string
        return `
            <li>
                <span class="name">${cityName} - ${stateName}</span>
                <span class="population">${place.population}</span>
            </li>`
    }).join('') //juntamos tudo isso como uma grande string
    //adicionamos isso ao HTML de suggestions
    suggestions.innerHTML = htmlString
}

//primeiro colocamos o evento de change
search.addEventListener('change', displayMatches)
//depois o evento keyUp
search.addEventListener('keyup', displayMatches)
//Pois só assim teremos uma tela atualizando automáticamente


