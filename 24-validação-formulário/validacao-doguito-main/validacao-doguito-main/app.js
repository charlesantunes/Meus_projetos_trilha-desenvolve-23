
import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    //==========add o código da mascara aqui. =============
    if (input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
        //Esse codigo abaixo, veio do git hub do codermarcos, vamos deixar só o que vamos usar

        //afterFormat(e) { console.log('afterFormat', e); }, //não serve ver no console.log()
        //allowNegative: false, //valores negativos
        //beforeFormat(e) { console.log('beforeFormat', e); },
        //negativeSignAfter: false, //não vamos trabalhar com valor negativo
        prefix: 'R$ ', //vamos colocar R$ que indica que mesmo se não colocar R$ ele aparece automático
        //suffix: '',   //não vamos usar, pq não tem nada apara aparecer depois do valor
        fixed: true,
        fractionDigits: 2,  //vamos usar 2 números decimais
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'end' //estava 'move', vamos mudar para 'end'
        })
    }
    //==========FIM add o código da mascara aqui. =============

    input.addEventListener('blur', e =>{
        valida(e.target)
    })
})