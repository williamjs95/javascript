<<<<<<< HEAD:focus-timer-app/js/index.js
import Controls from './controls.js';
import Timer from './timer.js';

=======
>>>>>>> parent of 00af27e (timerfocus refactory):focus-timer-app/script.js
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let minutes;
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
<<<<<<< HEAD:focus-timer-app/js/index.js

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
=======

function resetControls() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function countdown() {
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);

        updateTimerDisplay(minutes, 0);

        if (minutes <= 0) {
            resetControls();
            return;
        }

        if (seconds <= 0) {
            seconds = 2;
            --minutes;
        }

        updateTimerDisplay(minutes, String(seconds - 1));

        countdown();
    }, 1000)
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');

    countdown();
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
})

buttonStop.addEventListener('click', function() {
    resetControls();
>>>>>>> parent of 00af27e (timerfocus refactory):focus-timer-app/script.js
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
<<<<<<< HEAD:focus-timer-app/js/index.js
    let newMinutes = controls.getMinutes();
    
    if (!newMinutes) {
        timer.reset();
        return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
=======
    minutes = prompt('Quantos minutos?');
    updateTimerDisplay(minutes, 0);
>>>>>>> parent of 00af27e (timerfocus refactory):focus-timer-app/script.js
})