function imprimeNomeEmail(tipoCliente, agencia,digito){
 console.log(`
   ${tipoCliente} da agência ${agencia} - ${digito}:
   - nome: ${this.nome}, email: ${this.email}
   `)
}

const cliente10 = {
 nome: "Carlos",
 email: "c@email.com"
}

const cliente20 = {
 nome: "Fred",
 email: "f@email.com"
}

const michele = ['Michele', 1111,0]
const ana = ['Ana Liz',2222,7]

imprimeNomeEmail.apply(cliente10,['Charles',1213,9]) // array direto
imprimeNomeEmail.apply(cliente10,michele) // obj já carrega o array
imprimeNomeEmail.apply(cliente10,ana) // obj já carrega o array