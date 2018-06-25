



function playSound () {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    console.log(audio);
    
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    
    console.log(key);
    
    // jQuery = key.addClass('playing);
    key.classList.add('playing');
    
}

function removeTransition(e) {
    // skip if not a transform
    if (e.propertyName !== 'transform') return;

    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);