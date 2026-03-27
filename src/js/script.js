//DECLARAÇÕES E VARIAVEIS
// VAR, LET E CONST
//VAR: PERMITE ALTERAÇÃO NA MESMA VARIAVEL --- O LET E CONST NAO

const nome="Fiap";
console.log(nome);
let nome2="Dev";
console.log(nome);

if(true){
    var avatar = "Fiapinho";//se fosse let, nao deixaria acessar os dados da variavel fora, daria erro
} 

console.log(avatar)