// Em scripts mais antigos, você também pode encontrar outra palavra-chave: var em vez de let:

let message;
message = 'Hello!';
message = 'World!';
alert(message);

// Quando o valor é alterado, os dados antigos são removidos da variável:

// Também podemos declarar duas variáveis ​​e copiar dados de uma para a outra. 

let hello = 'Hello World!';
let message;

message = hello;

// agora duas variáveis ​​armazenam os mesmos dados

alert(hello);
alert(message);

// Declarar duas vezes aciona um erro.
// Uma declaração repetida da mesma variável é um erro;
// 'let' repetido leva a um erro

let message = 'This';
let message = 'That';   // SyntaxError: 'mensagem' já foi declarada


