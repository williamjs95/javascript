

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    minutes,
    minutesCount,
    minutesUp
}) {
    
    let timerTimeOut;
    let minutesDisplayNumber =  Number(minutesDisplayNumber.textContent);

    function updateDisplay(minutes, seconds) {
        minutesDisplayNumber.textContent = String(minutes).padStart(2, '0');
        secondsDisplayN.textContent = String(seconds).padStart(2, '0');
        updateMinutes(minutes);
    }

    function reset() {
        updateDisplay(minutes, 0);
        clearTimeout(timerTimeOut);
    }

    function countdown() {
        timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent);
            let minutesCount = Number(minutesDisplay.textContent);

            updateDisplay(minutesCount, 0);

            if (minutesCount <= 0) {
                resetControls();
                return;
            }

            if (seconds <= 0) {
                seconds = 3;
                --minutesCount;
            }

            updateDisplay(minutesCount, String(seconds - 1));

            countdown();
        }, 1000)
    } 

    function updateMinutes(newMinutes) {
        minutesUp = newMinutes;
    }

    function hold() {
        clearTimeout(timerTimeOut);
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold,
        minutesDisplay,
        minutes,
        minutesCount,
        minutesUp,
    }
}