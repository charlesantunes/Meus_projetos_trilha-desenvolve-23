//Calcular média entre os seguintes números: 10, 6.5, 8, 7.5

const num = [10, 6.5, 8, 7.5];

const calcMedia = () => {
    let valor = 0;
    for (let i = 0; i < num.length; i++) {
        valor += num[i];        
    };    
    return console.log(`A média dos números ${num} é ${valor / num.length}`);
};

calcMedia();