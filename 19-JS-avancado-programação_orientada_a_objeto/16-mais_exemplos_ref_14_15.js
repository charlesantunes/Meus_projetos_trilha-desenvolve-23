/**
 * No vídeo anterior vimos um exemplo de uso do spread operator, ou sintaxe de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Vamos ver mais alguns exemplos:
 */
const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}

console.log('===========sem espalhamento===============')
//juntando os dois com um obj guerreiros
const guerreiro1 = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro1)
/*
  O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados; o nome de cada variável agora é uma chave e o valor da chave é cada um dos objetos:
 */

  console.log('===========com espalhamento===============')
  //Agora vamos usar o a tecnica de ESPALHAMENTO ou spread operator.
const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro2)