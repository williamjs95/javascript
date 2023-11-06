let option;
let items = [];

while(option != 3){

    let option = Number(prompt(`
    Olá uruário! Digite o número da opção desejada:
    
    1. Cadastrar um item na lista
    2. Mostrar intens cadastrados
    3. Sair do programa
    `));
    
    switch(option) {
        case 1:
            let item = prompt('Digite o nome do item:');
            items.push(item);
            break;
        case 2:
            if (items.length == 0){
                alert("Não existem intens cadastrados.");
            } else{
                alert(items);
            }
            break;
        case 3:
            alert('Tchau');
            break;
        default:
            alert('Opção inválida. Tente novamente.');    
    }    
    console.log(option, items);
}