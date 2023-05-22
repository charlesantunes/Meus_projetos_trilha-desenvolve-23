//essa é a função construtora, pode fazer outros objetos com as propriedades dela.
//obs: ela serve como segurança para não ter acesso as propriedades do objetos, pq elas estão na função contrutora, no caso vamos fazer um objeto chamado objCharles da função construtora.
function Cliente(nome,cpf,email,saldo) {
    this.nome=nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.deposito = function deposito(valor) {
        this.saldo += valor;
    }
    
}

//Esse objeto objCharles, foi criado e herdado as propriedades do construtor Clientes()
const objCharles = new Cliente('Charles','78555555534','charles@gmail.com',500);

objCharles.deposito(400);

console.log(objCharles);

