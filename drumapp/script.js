

//creat a function to the document that will revel what key is being presed
document.addEventListener("keydown", function(event){
    if(event.key.toLocaleLowerCase() == 'a'){
        playSomething('sounds/clap.wav')
    }else if(event.key.toLowerCase() == 's'){
        playSomething('sounds/hihat.wav')
    }else if(event.key.toLowerCase() == 'd'){
        playSomething('sounds/kick.wav')
    }else if(event.key.toLowerCase() == 'f'){
        playSomething('sounds/openhat.wav')
    }else if(event.key.toLowerCase() == 'g'){
        playSomething('sounds/boom.wav')
    }else if(event.key.toLowerCase() == 'h'){
        playSomething('sounds/ride.wav')
    }else if(event.key.toLowerCase() == 'j'){
        playSomething('sounds/snare.wav')
    }else if(event.key.toLowerCase() == 'k'){
        playSomething('sounds/tom.wav')
    }else if(event.key.toLowerCase() == 'l'){
        playSomething('sounds/tink.wav')
    }else{
        alert('The key that you pressed is not a musical note')
    }
})

  function playSomething(musicalNote){
    var sound = new Audio(`${musicalNote}`)
    sound.play()
  }