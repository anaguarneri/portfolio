const familia= [
    {nome: "Zilene",
        papelNaFamilia: "Mãe",
        idade: 51,},
    {nome: "Lourenço",
        papelNaFamilia: "Pai",
        idade:54,},
    {nome: "Victoria",
        papelNaFamilia: "Filha",
        idade: 29,},
    {nome: "Ana",
        papelNaFamilia: "Filha",
        idade: 24,},
    {nome: "Guilherme",
        papelNaFamilia: "Genro",
        idade: 29,}
]
console.log(familia.length);
const familiaIdade= familia.filter((nome) => nome.idade.length >30);
console.log(familiaIdade);