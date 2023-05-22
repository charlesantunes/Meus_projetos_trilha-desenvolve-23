//imprimir o índice uma lista de números: 100,200,300,400,500,600.
const num = [100,200,300,400,500,600]

const exibirNum = () => {
    for (let i = 0; i < num.length; i++) {
        //const element = array[i];
        console.log(`O indice ${i} é o número ${num[i]}`)
    }
}

exibirNum()