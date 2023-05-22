//Adicionar informações importantes que ainda estão faltando, como telefone e tambem seus valores

console.log('====================exemplo01========================')
const cliente = {
    nome:'Charles',
    idade:39,
    cpf: '78588874234',
    email: 'charles@gmail.com'
};

cliente.telefone = 32318044;
console.log(cliente);

console.log('====================exemplo02========================')
const familia = [
 {
     nome:'Charles',
     idade:39,
     cpf: '78588874234',
     email: 'charles@gmail.com'

 },{
     nome:'Michele',
     idade:41,
     cpf: '85274185285',
     email: 'michele@gmail.com',
     telefone: '(91)_ _ _ _ - _ _ _ _'
 },{
     nome:'Ana Liz',
     idade:01,
     cpf: '12345698732',
     email: 'analiz@gmail.com',
     telefone: '(91)_ _ _ _ - _ _ _ _'
 }];
console.log(familia)

 familia[0].telefone = '(91)_ _ _ _ - _ _ _ _';
 console.log(familia)