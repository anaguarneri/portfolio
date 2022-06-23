/*let soma = 0;
let numero = -1;
do {
    numero= parseInt(prompt("Digite um número: "));
    soma = soma + numero;
    alert("A soma é: "+ soma);
}
while(numero !== -1);*/
const numero2= [];
let numero;
do{
    numero = parseInt(prompt("Digite um número: "));
    numero2.push(numero);
}
while(numero > 0 )
alert("Você digitou: " + numero2.length + "numeros");
const quantNum = numero2.length;
let somaNum = 0;
for(let i=0; i<quantNum; i++){
    somaNum += numero2[i];
}
const mediaNum= somaNum/ quantNum;

console.log(`${quantNum} números foram digitados: ${numero2}`);
console.log(`A média é igual a ${mediaNum}`);