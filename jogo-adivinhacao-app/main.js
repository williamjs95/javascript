const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const randomNumber = Math.round(Math.random() * 10);
let  xAttempts = 1;

// eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', function(e) {
    if (e.key == 'Enter') {
        handleResetClick();
    }
})

// funções
function handleTryClick(event) {
    event.preventDefault(); // não faça o padrão

    const inputNumber =  document.querySelector('#inputNumber');

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen();
        document.querySelector('.screen2 h2').innerText = `acertou em ${xAttempts} tentativas`;
    }

    inputNumber.value = ''
    xAttempts++
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1;
}

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

