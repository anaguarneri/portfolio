let pessoa = prompt("Digite aqui seu nome: ");
let idade = parseInt(prompt("Digite aqui sua idade: "));
function dados ( pessoa, idade){
    if(idade >18) {
        return(` ${pessoa} é de maior e tem ${idade} anos.`)
    }
    else{ return(`${pessoa} é menor de idade e tem ${idade} anos.`);}
}
console.log(dados( pessoa, idade));