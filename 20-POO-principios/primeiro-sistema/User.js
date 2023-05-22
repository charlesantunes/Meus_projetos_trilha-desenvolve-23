export default class User{
   #nome
   #email
   #nascimento
   #role
   #ativo
    constructor(nome,email,nascimento,role,ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role =  role || 'estudante';    
        this.#ativo = ativo;
    }
    //getters
    get nome(){
        return this.#nome;
    };
    get email(){
        return this.#email;
    };
    get nascimento(){
        return this.#nascimento;
    };
    get role(){
        return this.#role;
    };
    get ativo(){
        return this.#ativo;
    };

    //setters
    set nome(novoNome){
        if (novoNome === '') {
            throw new Error('Formato inválido'); //throw é para mostrar o erro no terminal
        }
        return this.#nome = novoNome;
    };
    set email(novoEmail){
        return this.#email = novoEmail;
    };
    set nascimento(novoNascimento){
        return this.#nascimento = novoNascimento;
    };
    set role(novoRole){
        return this.#role = novoRole;
    };
    set ativo(novoAtivo){
        return this.#ativo = novoAtivo;
    }; 

    //métodos
    exibirInfo(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }   
}
