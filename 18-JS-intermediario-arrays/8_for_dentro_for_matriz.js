//for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for [][], um dentro do outro.
//                                          [i][j]
const notas1 = [10 , 6.5, 8 ,7.5] //linha1 [0][i], no caso o 8 está, linha1 [0][2]
const notas2 = [9  , 6  , 6]    //linha1 [1][i]
const notas3 = [8.5, 9.5]   //linha1 [3][i]

const notasGerais = [notas1,notas2,notas3]

let somaNotas = 0;
let media = somaNotas / notasGerais.length

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

console.log(media)