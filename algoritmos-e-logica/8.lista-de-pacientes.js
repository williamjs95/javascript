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

function printPatientIMC(patients) {
    return `
    Paciente ${patients.name} tem o IMC de ${(patients.weight / ((patients.height / 100) ** 2)).toFixed(2)}.
    `
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}




