//map() = é um função callback que RETORNA VALOR, diferente da forReach.Assim a const notasAtualizadas recebe o retorno com o novo valor.
//obs: map() é usada apenas em arrays.

//Adicionar um ponto para cada nota
const notas = [10,9,8,7,6];

const notasAtualizadas = notas.map(item => 
    console.log(item == 10 ? item + 0 : ++item)) //no ternário p adicionar um no loop tem de ser ++ antes.
