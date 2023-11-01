// criar array com construtor

let myArray = ['a', 'b', 'c']
console.log(myArray)

// cada elemento torna-se argumento
let myArrayx = new Array(10)
console.log(myArrayx)

console.log("   ")

// counting arrays
console.log(['a', 'b', 'c'].length)

console.log([
    'a',
    {type: 'array'},
    function() { return "alô" },
][2]())

console.log('   ')

let techs =  ['html', 'css', 'js']

// adicionar item ao fim do array
techs.push('node.js')

// adicionar item no começo do array
techs.unshift('sql')

// remover item do final
techs.pop()

// remover item do começo
techs.shift()

// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 2)

console.log(techs)

// encontrar a posição de um elemento no array
let index = techs.indexOf('js')
techs.splice(index, 1)

console.log(index)
console.log(techs)
