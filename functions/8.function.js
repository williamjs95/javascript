// function() constructor

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + ' está andando'
    }
}
const mike = new Person('Mike')
const joao = new Person('João')

console.log(mike.walk())
console.log(joao.walk())