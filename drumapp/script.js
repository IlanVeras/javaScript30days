// var width = window.innerWidth;
// var height = window.innerHeight;

// console.log("Window width: " + width + " pixels");
// console.log("Window height: " + height + " pixels");


//creat a function to the document that will revel what key is being presed
var isShaddowed = false
var key_a, key_s, key_d, key_f, key_g, key_h, key_j, key_k, key_l;
key_a = document.querySelector('.a_')
key_s = document.querySelector('.s_')
key_d = document.querySelector('.d_')
key_f = document.querySelector('.f_')
key_g = document.querySelector('.g_')
key_h = document.querySelector('.h_')
key_j = document.querySelector('.j_')
key_k = document.querySelector('.k_')
key_l = document.querySelector('.l_')

document.addEventListener("keydown", function(event){
    if(event.key.toLocaleLowerCase() == 'a'){
        expandIt(key_a)
        playSomething('sounds/clap.wav')
        // shirinkIt()
        key_a.classList.add('shadowed')
        // console.log(key_a)
    }else if(event.key.toLowerCase() == 's'){
        playSomething('sounds/hihat.wav')
        expandIt(key_s)
        key_s.classList.add('shadowed')
    }else if(event.key.toLowerCase() == 'd'){
        console.log('ok')
        expandIt(key_d)
        playSomething('sounds/kick.wav')
        key_d.classList.add('shadowed')
    }else if(event.key.toLowerCase() == 'f'){
        playSomething('sounds/openhat.wav')
        expandIt(key_f)
        key_f.classList.add('shadowed')
    }else if(event.key.toLowerCase() == 'g'){
        playSomething('sounds/boom.wav')
        expandIt(key_g)
        key_g.classList.add('shadowed')
    }else if(event.key.toLowerCase() == 'h'){
        playSomething('sounds/ride.wav')
        expandIt(key_h)
        key_h.classList.add('shadowed')
    }else if(event.key.toLowerCase() == 'j'){
        playSomething('sounds/snare.wav')
        expandIt(key_j)
        key_j.classList.add('shadowed')
    }else if(event.key.toLowerCase() == 'k'){
        playSomething('sounds/tom.wav')
        expandIt(key_k)
        key_k.classList.add('shadowed')
    }else if(event.key.toLowerCase() == 'l'){
        playSomething('sounds/tink.wav')
        expandIt(key_l)
        key_l.classList('shadowed')
    }else{
        alert('The key that you pressed is not a musical note')
    }
})

//mesmo principio do de cima porém utilizando funções
composicao('a', key_a)
composicao('s', key_s)
composicao('d', key_d)
composicao('f', key_f)
composicao('g', key_g)
composicao('h', key_h)
composicao('j', key_j)
composicao('k', key_k)
composicao('l', key_l)


//Esqueleto
//Verificação de qual tela deixou de ser precionada (keyupa) e qual letraela se refere
function composicao(letter, key_what){
    document.addEventListener("keyup", function(event){
        if(event.key.toLocaleLowerCase() == letter){
            shirinkIt(key_what)
            key_what.classList.remove('shadowed')
            // console.log(key_what)
        }
    })
}


//toca música
function playSomething(musicalNote){
    var sound = new Audio(`${musicalNote}`)
    sound.play()
}

//aumenta o botão
function expandIt(something){
    something.style.transform = `scale(1.14)`
}

//diminui o botão
function shirinkIt(something){
    something.style.transform = 'scale(1)'
}

function borderIt(something){
    something.style.boxShadow = 's'
}