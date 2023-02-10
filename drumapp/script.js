// var width = window.innerWidth;
// var height = window.innerHeight;

// console.log("Window width: " + width + " pixels");
// console.log("Window height: " + height + " pixels");


//creat a function to the document that will revel what key is being presed
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
        shirinkIt()
    }else if(event.key.toLowerCase() == 's'){
        playSomething('sounds/hihat.wav')
        expandIt(key_s)
    }else if(event.key.toLowerCase() == 'd'){
        console.log('ok')
        expandIt(key_d)
        playSomething('sounds/kick.wav')
    }else if(event.key.toLowerCase() == 'f'){
        playSomething('sounds/openhat.wav')
        expandIt(key_f)
    }else if(event.key.toLowerCase() == 'g'){
        playSomething('sounds/boom.wav')
        expandIt(key_g)
    }else if(event.key.toLowerCase() == 'h'){
        playSomething('sounds/ride.wav')
        expandIt(key_h)
    }else if(event.key.toLowerCase() == 'j'){
        playSomething('sounds/snare.wav')
        expandIt(key_j)
    }else if(event.key.toLowerCase() == 'k'){
        playSomething('sounds/tom.wav')
        expandIt(key_k)
    }else if(event.key.toLowerCase() == 'l'){
        playSomething('sounds/tink.wav')
        expandIt(key_l)
    }else{
        alert('The key that you pressed is not a musical note')
    }
})



//Esqueleto
//Verificação de qual tela deixou de ser precionada (keyupa)
document.addEventListener("keyup", function(event){
    if(event.key.toLocaleLowerCase() == 'a'){
        shirinkIt(key_a)
    }
}
)

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