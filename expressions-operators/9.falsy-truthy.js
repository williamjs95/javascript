// falsy
// quando um valor é considerado false, em contextos onde um boolean é obrigatório (condicionais e loops)

console.log(false ? 'verdadeiro': 'falso');
console.log(0 ? 'verdadeiro': 'falso');
console.log("" ? 'verdadeiro': 'falso');
console.log(null ? 'verdadeiro': 'falso');
console.log(undefined ? 'verdadeiro': 'falso');
console.log(NaN ? 'verdadeiro': 'falso');

console.log('   ');

// truthy
// quando um valor é considerado true, em contextos onde um boolean é obrigatório (condicionais e loops)
console.log(true ? 'verdadeiro': 'falso');
console.log( {} ? 'verdadeiro': 'falso');
console.log( [] ? 'verdadeiro': 'falso');
console.log(1 ? 'verdadeiro': 'falso');
console.log(3.23 ? 'verdadeiro': 'falso');
console.log('a' ? 'verdadeiro': 'falso');
console.log(Infinity ? 'verdadeiro': 'falso');

