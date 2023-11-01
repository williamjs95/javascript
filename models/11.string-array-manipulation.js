// tranforma string em array, separado por espaço
let phrase = "Eu quero viver o Amor."
let myArray = phrase.split(" ")
console.log(myArray)

// tranforma array em string, separado por -
let myPhraseWithUnderscore = myArray.join("-")
console.log(myPhraseWithUnderscore.toLowerCase())

console.log("   ")

// tranformar cadeia de caracteres em elementos de um array
let word = 'manipulação'
console.log(Array.from(word))