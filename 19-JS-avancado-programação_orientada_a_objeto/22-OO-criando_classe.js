
class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo;
    }
        
        //criei arrow function e uma function normal por opção mesmo.poderia ser tudo normal.
        saldo = (valor) =>{
            this.saldo+=valor;
        }

        exibirSaldo(){
            console.log(this.saldo);
        }
};

const charles = new Cliente('Charles', 'charles@gmail.com', '78555574444', 500)

//verificar pq apareceu um array function
charles.exibirSaldo()

console.log(charles);