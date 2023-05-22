os princípios da orientação a objetos, que são o conceito de classe, objeto, no objeto vamos trazer o que já sabemos do JavaScript, herança, polimorfismo e encapsulamento.

Mas antes de começarmos a meter a mão na massa, meter a mão no código, vamos entender um pouco melhor o que são esses paradigmas de programação, o que queremos dizer exatamente quando falamos de programação orientada a objetos. Então vamos lá.

O que são paradigmas de programação? Abordagens sobre como resolver problemas de programação, baseadas em uma teoria ou um conjunto de princípios definidos. Então vamos lá, vamos traduzir isso. Um paradigma de programação se baseia normalmente em alguma teoria matemática ou computacional ou os dois, desenvolvida para resolver determinados problemas de programação de determinada forma.

Cada paradigma de programação tem o seu conjunto de regras, podemos dizer assim, e essas regras cobrem a forma como os dados são tratados, a organização do sistema, a forma como o código é escrito, a arquitetura, entre vários outros aspectos. Existem mais de 20 paradigmas de programação estudados até hoje, e eles funcionam de forma isolada ou em combinação, combinados uns com os outros.

Por exemplo, temos paradigma imperativo, paradigma relacional, declarativo, alguns deles, o orientação a objetos, o objetos é um deles, mas também o que chamamos de programação estruturada, eles derivam do mesmo, que é o imperativo. Já a programação funcional deriva de outro, que é o declarativo.

O relacional, nós o relacionamos muito a estruturas de bancos de dados, por exemplo os bancos de dados relacionais. Então, os paradigmas são como guarda-chuvas. Então temos o imperativo, com alguns outros paradigmas de programação embaixo dele.

Nesse curso, vamos falar especificamente de orientação a objetos, mas vamos deixar um material extra sobre outros paradigmas de programação para você dar uma olhada.

Então vamos lá, orientação a objetos. “Princípio de espelhar o mundo real através de uma estrutura de objetos com características e ações, que interagem uns com os outros”. Traduzindo, a programação orientada a objetos, que é o que vamos ver durante o curso, ela parte da premissa de aproximar a modelagem de código, uma modelagem dos nossos produtos de softwares, dos nossos projetos, com um “mundo real”.

Ou seja, as partes do sistema são estruturadas como objetos, esses objetos tem características e tem comportamentos, que vamos chamar de propriedades, que são as características de um objeto, por exemplo, uma caneta, uma caneta tem cor da tinta, uma caneta tem cor, tem tipo da ponta e ações, que vamos chamar durante o código, de métodos, que é uma caneta pode fazer, ela escreve, algumas delas podem apagar a tinta, não, podemos inventar.

E esses objetos, assim como na vida real, eles interagem uns com os outros. A estrutura central da orientação a objetos é o que chamamos de classe, classe é um modelo para criação de objetos, ou seja, é um molde, a classe caneta é um molde de onde saem todas as canetas, sai caneta azul que escreve de ponta cabeça, sai a caneta verde com ponta fina. Essa é a base da programação orientada a objetos e vamos ver bastante isso durante o curso, vamos ver com um pouco de detalhe como esse lance de classes e moldes de objetos funcionam.

Quando falamos em objeto, em código, temos que realmente abstrair coisas da vida real. Então, por exemplo, temos um gato, o gato ele existe no mundo real, ele não é uma coisa, é um ser, mas você deve ter pegado a ideia. Qual o propósito da orientação a objetos nesse caso? De transformar esses aspectos da vida real, ou seja, um produto, uma pessoa, um processo, uma doença, um animal, e transformar isso em software.

Então, essa abordagem visa aproximar o software, que é uma abstração lógica do mundo, dos problemas que o software tem que resolver. Como assim?

Para abstrairmos um gato, por exemplo, transformar um gato em código, seguindo os princípios da orientação a objetos, começamos dividindo em duas grandes partes, as primeiras são as características desse gato, ou seja, o que chamamos de propriedades.

E essas propriedades descrevem normalmente um objeto, o que o objeto é, então pensando em um gato, o gato tem pelagem, tem um peso, tem idade, tem o nome que damos para ele, tem se é fêmea ou se é macho e o status de saúde, se é castrado, se é vacinado, se tem algum problema de saúde. Então, basicamente, descrevemos o que faz um gato, quais são as características dele.

E a outra grande parte são os comportamentos de um gato. Então, assim como um objeto pode ser descrito de acordo com as suas características, com as suas propriedades, ele também tem comportamentos. Então, no caso do gato, o gato mia, o gato come alguma coisa, podemos definir o que o gato come, o gato dorme, ele se limpa, se lambe, ele brinca com bolinha, brinca com laser, brinca com fitinha. Esses são os comportamentos de um gato. Assim como um gato tem comportamentos, pessoas, por exemplo, tem comportamentos.

E produtos, podem ter comportamentos? É uma coisa que vamos pensar na abstração, quando formos pensar o nosso produto, o que o nosso produto tem que fazer quando falamos em código, que é um pouco diferente da vida real, na vida real é um produto sozinho, não faz muita coisa, mas no código vamos ver que às vezes eles fazem.

Então, se transferíssemos esse exemplo do gato para o JavaScript, podemos usar um objeto literal. Lembrando, um objeto literal é um objeto único, tem seus próprios valores dentro dele, que são dados, dados do tipo string, dados do tipo booleano, tipo número, etc. Então, um objeto gato tem uma propriedade nome, damos um nome para o nosso gato, tem uma data de nascimento, que definimos qual é a idade dele, tem um tipo de pelagem, podemos dizer se é castrado, se é vacinado, se é vermifugado, podemos colocar o telefone de contato de quem é o tutor.

E esses valores dessas propriedades são dados, isso é muito importante, são dados literais, no sentido computacional da palavra. Valores como número, que então, se o gato e castrado, é true, um booleano, que é o true ou false. O resto no meu exemplo são strings, uma string de texto com o nome, o string de texto com a pelagem, o string com a data de nascimento.

E além das características, tem aquela parte do tal do comportamento. Então o gato faz coisas, o gato mia, o gato brinca. E traduzimos isso em código, utilizando o JavaScript, assim como as propriedades podem guardar características de qualquer coisa da vida real, para determinarmos comportamentos, fazemos isso através de funções. Então o nosso gosto pode ter uma função, a função miar, dentro do nosso objeto, e essa função faz um console.log. Gato não faz isso na vida real, mas o nosso gato de código vai fazer.

Então, quando determinamos as funções dentro de um objeto, elas servem justamente para dizer quais são os comportamentos desse objeto que estamos descrevendo. E elas são executadas dentro do contexto desse objeto. Qualquer função que é executada dentro do contexto de um objeto, nós chamamos de método. E é dessa forma que vamos nos referir durante o curso, sempre que falarmos de métodos, estamos falando de funções que são executadas no contexto de um objeto.

Então, a função miar, que devolve um console.log(“miau”) é executada no contexto do meu objeto literal gato, que então tem as outras características, nome, nascimento.

E já começamos a ver como abstraímos conceitos da vida real em objetos e criamos aqui na tela mesmo um objeto literal que descreve um gato e tem características e comportamentos. Mas e se temos mais de um gato, pensando, por exemplo, em uma clínica veterinária que vai atender vários gatos, vários cachorros, papagaios, não dá para termos um modelo como um objeto literal que tem um nome, meu objeto gato só pode ter uma propriedade nome, só pode chamar churrumina, só pode chamar chuchu.

E como fazemos, então? Criamos modelos de objetos. Então, por exemplo, se eu tenho dois gatos, eu tenho que criar dois objetos diferentes, um para cada gato. Poderia fazer da seguinte forma, poderia ter um objeto que eu chamo de gato 1, que é a gata Churrumina, e eu tenho o objeto chamado gato 2, e eu tenho outro gato, que é o Enim, que nasceu no dia 25/01/2021, que é creme, que também está vacinado.

Porém, uma das primeiras coisas que aprendemos em programação é a importância de não repetir e de reaproveitar código. Então já sabemos que se começarmos a criar um monte de variável para guardar informação de vários gatos, não é viável, não é prático e não faz nem sentido, se formos parar pra pensar em como que um suposto sistema de uma clínica veterinária ou qualquer lugar funciona. Ou qualquer sistema que gerencia usuários, não é viável, não faz muito sentido criar um objeto para cada usuário, um objeto para cada gato e ser um objeto literal.

Como resolvemos? O ideal é termos esse modelo que estamos falando, que se reflete no objeto ou na entidade, que é o que queremos criar. Então, se fossemos criar um objeto modeloGato, ele teria um nome, que seria do tipo string, ele teria um nascimento, que ia ser um outro tipo string, a pelagem que seria outro tipo string. O status é um objeto, dentro desse objeto temos 3 outras propriedades, a propriedade castrado, que é booleano, vacinado, que é booleano, vermifugado, que é booleano, e por aí vai, com as características do objeto que você quer criar.

Então, essa é a base da estrutura da orientação a objetos, que é abstrair conceitos da vida real e transformar esses conceitos da vida real em estruturas de código, que combinamos depois umas com as outras, reaproveita vários contextos e vai criando nossos objetos. E cada objeto vai refletir. Eu posso ter um modelo para criar gatos, que a partir dele eu crio vários gatos, quantos gatos minha clínica veterinária precisar.

E eu também posso fazer isso com regras de negócio e com aspectos mais abstratos também da vida, por exemplo, uma clínica veterinária, poderíamos criar uma classe, que é um modelo, poderíamos criar um modelo doença. A partir dele, conseguimos tirar vários objetos que são doenças de gato, doenças de cachorro, o que a doença faz, qual é o cadastro da doença, qual é o remédio.

Então, não apenas coisas do mundo físico, mas também coisa do mundo abstrato. Então, tudo isso no final, na orientação a objeto, assim como as regras de negócio também do seu sistema, vira objeto.

Então, a partir de um modelo, criamos dois gatos. Então nosso modelo gato, que tinha a string nome, a string data e a string pelagem, a partir desse modelo conseguimos extrair dois objetos diferentes, para dois gatos diferentes, e agora temos uma lista de objetos gato. Essa lista pode crescer, minha clínica veterinária pode ter mil clientes gatos, podemos criar a partir desse modelo uma lista com um monte de objetos que tem a mesma estrutura, que tem as mesmas propriedades, e todos se referem a gatos diferentes.

Cada uma dessas cópias que criamos a partir de um modelo, a partir de uma classe, nós chamamos de instâncias, então toda vez que criamos um novo objeto, estamos instanciando um novo objeto, criamos uma nova instância de uma classe.