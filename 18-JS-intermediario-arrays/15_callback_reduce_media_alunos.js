//reduce() = redus calculos que precisam criar variaveis para guardar valores.
const java = [10,9,8,7,6];
const javascript = [9.5,8.5,7.5,6.5,5.5];
const python = [7.1,7.2,7.3,7.4,7.5];

function mediaTurma(turmaNotas) {
    //acum é onde os calculos depois de somados seram armazenados, evita de criar variavel.atual é o valor atual do loop, zero é quando o acum inicia.
    const somador = turmaNotas.reduce((acum,atual) => atual+acum,0);
    return somador / turmaNotas.length;
}

console.log(`Média do javascript é ${mediaTurma(javascript)}`);

//outra implantação do reduce()
const notas = [6.5,7.5,9,10];

const media = notas.reduce((a,b) => b+a,0) / notas.length;
console.log(`A média das notas é ${media}`);



