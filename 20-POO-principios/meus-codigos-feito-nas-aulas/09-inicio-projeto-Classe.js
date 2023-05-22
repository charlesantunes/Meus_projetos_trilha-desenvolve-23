console.log('==============criação da classe herança====================')
class User{
    #nome
    constructor(nome,email,nascimento,role,ativo = true){
        this.#nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role =  role || 'estudante';    
        this.ativo = ativo;
    }
    get nome(){
        this.#nome = nome;
    }
    exibirInfo(){
        console.log(`${this.nome}, ${this.email}`)
    }
}
let char = new User('Charles','email@email','1983-19-09');
char.exibirInfo()

//console.log(User.prototype.isPrototypeOf(char)); //true, mostra que as classes são prototipos por de baixo dos panos