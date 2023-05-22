export default class User{
    //encapsulamento, deixar as propriedades privadas e so pode mudar ou adicionar os dados na hora de instanciar
   #nome
   #email
   #nascimento
   #role
   #ativo
    constructor(nome,email,nascimento,role,ativo = true){ //usada para quem quiser ter acesso as propriedades, precisa instaciar em um obj com new. obj instaciado em privado não pode ser alterado, apenas ser usar getters e setters.
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role =  role || 'estudante';    
        this.#ativo = ativo;
    }
    //metodos assessores servem para ENCAPSULAR(só pode ser manipulada por dentro da classe), para acessar os parametros e propriedades do construtor e manipular seus valores, são get setters
    get nome(){ //para chamar o método nome(), por ser get não precisa usar () no final, ou seja, apenas nome.
        //pode ter lógica se quiser para acessar
        return this.#nome
    }

    //setters
    set nome(novoNome){
        return this.#nome = novoNome;
    };

    //método montaObj(){} será criado apenas para demostrar o privado nos métodos.
    #montaObj(){ //Como é privado, só pode ser acessado de dentro da propria classe, no caso User.
        return ({ //usa essa sintaxe para returnar um obj
        nome: this.#nome,
        email: this.#email,
        nascimento: this.#nascimento,
        role: this.#role,    
        ativo: this.#ativo 
        })
    }
    exibirInfo(){ //quando usa o setters, a chamada do objetos não tem mais #, será tira na classe limpa criada.
        const objMontaObj = this.#montaObj();
        return `${this.#nome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}
    =========== função privada de User ===========
    ${objMontaObj.nome},${objMontaObj.email},${objMontaObj.nascimento},${objMontaObj.role},${objMontaObj.ativo}`;
    }    
}
