//usamos o this nesse caso como construtor para proteger os dados que seram passados pelo parametro, no caso nome e email.
function User(nome,email) { //função com Classe e this é chamada de função construtora.
    this.nome = nome; // 'nome' que veio no parametro sera protegido e construida/criada uma nova propriedade com o mesmo nome, no caso 'this.nome' e o 'nome' ficara intacto/protegido para não ser modificado.
    this.email = email; // quando for manipular nome e email, será passado o this.nome e this.email que foram criados para ser manipulado e deixando o nome e email original intacto.

    this.exibirInfo = function() {
        console.log(`${this.nome}, ${this.email}`) //repare que estamos usando o this.nome e this.email para ser manipulado.
        console.log(typeof(this.nome)) //quando usamos o this, construimos uma propriedade e o tipo que veio passado por parâmetro.
    }
}

const objUser = new User('Charles',256)
objUser.exibirInfo();

console.log('===========outro exemplo herdando as propriedades de User===========')
function Admin(role) {
    User.call(this, 'Charles','Michele'); //Usei as propriedades this.nome e this.email de User como prototipo, apenas para inserir os valores.
    this.role = role || 'estudante' // criei a propriedade role e disse que se não receber nada como parametro, vai ser usado 'estudante'.
}
Admin.prototype = Object.create(User.prototype) //estou informando que vou criar como prototipo em Admin as propriedades de User.

const objAdmin = new Admin('Admin')
objAdmin.exibirInfo()
console.log(objAdmin.role) //essa propriedade foi criada depois de User e não será exibida na função exebirInfo();

console.log('=========== exemplo novo obj será prototipo para outro obj, sem a segurança do construtor===========')
const user2 = { //criei um objeto sem ter construtor, mas será prototipo para proximos objs. coloquei apenas uma função p/ ser rápido
    exibeInfo(nome){
        return nome;
    }
};

const novoUser2 = Object.create(user2); // como estamos usando apenas obj, não precisa usar o .prototype
console.log(novoUser2.exibeInfo('Ana Liz'));
console.log(user2.isPrototypeOf(novoUser2));//verifica se user2 é um prototipo em novoUser2.


console.log('=========== exemplo de cima obj será prototipo para outro obj com o construtor===========')
const user3 = {
    init: function(nome,email){ //construtor será a função init:(){}
        this.nome = nome,
        this.email = email
    },
    exibeInfo: function(){
        return `${this.nome}, ${this.email}`;
    }
};

const novoUser3 = Object.create(user3); // como estamos usando apenas obj, não precisa usar o .prototype
novoUser3.init('ANTUNES','antunes@email')
console.log(novoUser3.exibeInfo());