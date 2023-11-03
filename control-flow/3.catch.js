// throw

function sayMyName(name = ''){
    if (name === ''){
        throw 'Nome é necessário' 
    }

    console.log(name);
}

// try...catch

try {
    sayMyName('Myke')
}  catch(e) {
    console.log(e);
}

console.log('após o try catch')