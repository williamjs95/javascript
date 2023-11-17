const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let minutes;
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    getMinutes,
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes,
});

buttonPlay.addEventListener('click', function() {
    controls.play();
    timer.countdown();
})

buttonPause.addEventListener('click', function() {
    controls.pause();
    timer.hold();
})

buttonStop.addEventListener('click', function() {
    controls.reset();
    timer.reset();
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
})

buttonSet.addEventListener('click', function() {

})