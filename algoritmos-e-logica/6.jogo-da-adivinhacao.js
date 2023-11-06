let result = prompt('Adivinhe o múmero que estou pensando? Está entre 0 e 10.');
const randomNumber = Math.round(Math.random() * 10);
let  xAttempts = 1;

console.log(result, randomNumber, xAttempts);

while(Number(result) != randomNumber){
    result = prompt('Erro, tente novamente:')
    xAttempts++;
    console.log(result, randomNumber, xAttempts)
}

if (xAttempts > 1){
    alert(`Parabéns! Você adivinhou em número em ${xAttempts} tentativas.`);
} else {
    alert(`Parabéns! Você adivinhou em número em ${xAttempts} tentativa.`);
}
