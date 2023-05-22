import User from "./User.js";

export default class Docente extends User{
    constructor(nome,email,nascimento,role='Docente',ativo = true){
        super(nome,email,nascimento,role,ativo)
    }
    aprovarEstudante(nomeEstudante,nota1,nota2){
        let media = (nota1 + nota2) /2
        return media >= 5 ? `O estudante ${nomeEstudante}, for Aprovado com a media ${media}`: `O estudante ${nomeEstudante}, for reprovado com a media ${media}`
        
        /*
        //forma menos eficiente em casos de códigos pequenos
        if(media >= 5){
           return `O estudante ${nomeEstudante}, foi Aprovado com a media ${media}`
        }else{
           return `O estudante ${nomeEstudante}, foi reprovado com a media ${media}`
        }
        */
    }
    /*
    //static = essa função não precisa ser estanciada e pode ser executada direto da função, como no exemplo02
    static aprovarEstudante2(nomeEstudante,nota1,nota2){
        let media = (nota1 + nota2) /2
        return media >= 5 ? `O estudante ${nomeEstudante}, foi Aprovado com a media ${media}`: `O estudante ${nomeEstudante}, foi reprovado com a media ${media}`
    }
    */
}
/*
//exemplo02 - usando static sem precisar instaciar
console.log(Docente.aprovarEstudante2('Ana Liz',8,9)) //aprovado
*/