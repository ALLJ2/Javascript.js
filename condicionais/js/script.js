// if (se condição = true)
const numerico = 10;

if(numerico > 8){
console.log("O numero informado é maior do que 8")
}

const nomeAluno = "Juliano";
if(nomeAluno === "Juliano"){
    console.log("O nome do aluno é Juliano");
}

if(nomeAluno === "Maria"){
 console.log("Olá, Maria");   
}

// else  (condição = falsa)
const estaLogado = false;
if(estaLogado){
    console.log("está logado");
}
else{
    console.log("não está logado");
}

const altura = 1.70;
if(altura > 1.80){
    console.log("Essa pessoa tem mais de 1.80 de altura");
}
else{
    console.log("Essa pessoa tem menos de 1.80 de altura");
}

const maioridade = "18 anos";
const habilitacao = true;

if(maioridade === 18 && habilitacao === false){
    console.log("Não habilitada");
}
else{
    console.log("habilitada");
}

// else if(verificar varias condições)

const cachorro = "pastor alemao";
const nomeDoCachorro = "Zeca";

if (cachorro === "dalmata"){
    console.log("é um dalmata");
} else if(nomeDoCachorro === "Zeca"){
    console.log("se chama zeca");
} else{
    console.log("é um poodle");
}

// Else if verificando varias condições por numero

if (1 > 2){
    console.log("teste um é verdadeiro");
} else if (2 > 4){
    console.log("teste dois é verdadeiro");
} else if (4 < 7){
    console.log("teste tres é verdadeiro");
}
else {
    console.log("não há condição verdadeira");
}

// while (enquanto)

let x = 1;

while(x <= 10){
    console.log(x);
    x = x + 1; //x++;
}

let y = 10;

while(y >= 5){
    console.log(y);
    y--; //y = y-1
}

// do while (fazer enquanto)

let m = 15; 

do{
    console.log(`${m}`);
    m = m + 2;
}while(m <= 21);
