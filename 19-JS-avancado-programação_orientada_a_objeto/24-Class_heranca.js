class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositarCliente(valor){
        this.saldo+=valor;
    }
};

const michele = new Cliente('Michele','michele@email.com','699.555.555-55',100,200);
console.log(michele)

console.log('===================================================================')

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup;

    }
    depositarPoup(valor){
        this.saldoPoup+=valor;
    }
}

const charles = new ClientePoupanca('Charles','charles@email.com','785.555.555-55',800,900);
console.log(charles)

console.log('==========================fazendo um deposito de 300=============================')

charles.depositarPoup(300)
console.log(charles)
