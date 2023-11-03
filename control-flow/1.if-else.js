// if...else

let teperature = 36;
let highTemperature = teperature >= 37.5;
let mediumTemperature = teperature < 37.5 && teperature >= 37;

if (highTemperature){
    console.log('Febre alta')
} else if (mediumTemperature){
    console.log('Febre moderada')
} else{
    console.log('Suadável')
};