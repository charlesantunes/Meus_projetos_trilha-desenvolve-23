function Cliente(nome,cpf,email,saldo) {
    this.nome=nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.deposito = function deposito(valor) {
        this.saldo += valor;
    };
    
};

function ClientePoup(nome,cpf,email,saldo, saldoPoup) {
    Cliente.call(this,nome,cpf,email,saldo); //call serve para herdar as propriedades de outra function construtora.
    this.saldoPoup = saldoPoup;
};

const ju = new ClientePoup('Charles','78555555555','chaaa@gmail.com',500,300)

console.log(ju);

console.log('=============================================')

//criando uma function depositaPoup() dentro do obj lu e adicionando valor de R$ 900
ClientePoup.prototype.depositaPoup = function (valor) {
    this.saldoPoup += valor;
}

ju.depositaPoup(900)
console.log(`novo saldo da poupança é R$ ${ju.saldoPoup}`);


