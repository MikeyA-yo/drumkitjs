function handClick() {
    let buttonClass=this.innerHTML;

    playSound(buttonClass);
    buttonEffect(buttonClass);
    
}
function keyboardClick(event) {
  playSound(event.key) ;
  buttonEffect(event.key);
}

for (let index = 0; index < document.querySelectorAll('.drum').length; index++) {
    document.querySelectorAll('button')[index].addEventListener('click',handClick)
   
}
document.addEventListener('keypress', keyboardClick);
function playSound(key){
    switch (key) {
        case 'w':
            let sound1=new Audio('sounds/tom-1.mp3')
            sound1.play();
            break;
        case 'a'  :
            let sound2= new Audio('sounds/tom-2.mp3')  
            sound2.play();
            break;
        case 's'  :
            let sound3=new Audio('sounds/tom-3.mp3')  
            sound3.play();
        case 'd' :
            let sound4=new Audio('sounds/tom-4.mp3')  
            sound4.play();
            break;
        case 'j' :
            let sound5= new Audio('sounds/crash.mp3')    
            sound5.play();
            break;
        case 'k'    :
            let sound6= new Audio('sounds/kick-bass.mp3')
            sound6.play();
            break;
            case 'l' :
                let lastSound= new Audio('sounds/snare.mp3')
                lastSound.play();
                break;
        default:
            alert('an err occured');
            break;
    }
}
function buttonEffect(current) {
    document.querySelector('.' + current).classList.add('pressed')
    setTimeout(function (){
        document.querySelector('.' + current).classList.remove('pressed')
    }, 300);
} 