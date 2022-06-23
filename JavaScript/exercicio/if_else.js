/*const estadoNascimento = "Bahia";
if (estadoNascimento == "Pernambuco"){
    console.log("É uma pessoa pernambucana: o/");}
else{ 
    console.log("Não é uma pessoa pernambucana.");
}*/

//Obtenha um valor numérico//
const valorNumerico = prompt("Digite aqui um número: ");
console.log(valorNumerico);

if(valorNumerico > 10){
    console.log(`${valorNumerico} é maior que 10`);
}
else if(valorNumerico == 10){
    console.log(`${valorNumerico} é igual a 10`);
}
else if(valorNumerico < 0 && valorNumerico < 10){ 
    console.log(`${valorNumerico} é menor do que 0`);
}
else{
    console.log(`${valorNumerico} é menor do que 10`);
}