const patients = [
    {
        name: 'Luiz',
        age: 30,
        weight: 88,
        height: 190,
    },
    {
        name: 'Jorge', 
        age: 33,
        weight: 90,
        height: 188
    }, 
    {
        name: 'João',
        age: 34,
        weight: 69,
        height: 170,
    },
];

let patientsName = [];
let patientsAge = [];
let patientsWeight = [];
let patientsHeight =  [];

for (let patient of patients){
    patientsName.push(patient.name);
}

alert(patientsName);




