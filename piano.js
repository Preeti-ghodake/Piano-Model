let keyCheck = document.querySelector('.keys-checkbox input');
let pianoKeys = document.querySelectorAll('.piano-keys .key');

let allKeys = [];
let audio = new Audio('tunes/a.wav');

// to hide and display the key charecters
keyCheck.addEventListener('click', function(e){
    pianoKeys.forEach(key => {
        key.classList.toggle("hide");
    })
});

//handler to identify the key event
pianoKeys.forEach(item => {
    //console.log(item.dataset.key);
    allKeys.push(item.dataset.key);
    //console.log('allKey =', allKeys);
    item.addEventListener('click',() => {
        //console.log('clicked key =', item.dataset.key);
        playTune(item.dataset.key)
    });
});

function playTune(key) {
    //console.log('tune key =', key);
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey =document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    },150);
}

//keyboard keys
document.addEventListener('keydown', function(e) {
    if(allKeys.includes(e.key)) {
        playTune(e.key);
    }
})