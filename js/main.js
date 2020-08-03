/*
var nome = "Michael Nunes";
var n1 = 10;
var n2 = 20;
var idade2 = "10";
var frase1 = "Japão é o melhor time do mundo!"
//alert(nome + " você tem " + idade + " anos!");
//alert("O comando alert aciona um pop-up ao carregar a página");

console.log(nome);
console.log(idade + idade2);
console.log(frase1.replace("Japão", "Brasil"));


//alert(frase1.replace("melhor", "pior"));

// console.log(frase1.toLocaleLowerCase());
// console.log("Bom dia!".toLocaleLowerCase());

console.log(n1 + n2 * 2);
*/

//var lista_fruta = ["maçã", "pera", "mamão"];

//lista_fruta.pop("uva");
//lista_fruta.push("uva");

//console.log(lista_fruta.reverse());
//alert(lista_fruta[2]);

/*
console.log(lista_fruta.toString());
console.log(lista_fruta.join(" - "));
*/

/*var lista_fruta = {nome: "fruta", cor: "vermelha"};

console.log(lista_fruta);

var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "roxa"},{nome: "pera", cor: "verde"}];

console.log(frutas[0].cor);
*/

/*
var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("Você é maior de idade");
} else{
    alert("Você é menor de idade");
}


var count = 0;

while (count <= 5){
    console.log(count);
    count++;
}


var count
for (count = 0; count <= 5; count++){
alert(count);
}
*/

/*
var dia = new Date;

alert(dia.getMonth()+1);
*/
/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
function soma(n1, n2){

    return n1+n2

}alert(soma(5,10));

function troca_nome(frase, nome, novo_nome){
            return frase.replace(nome,novo_nome)
}
alert(troca_nome("Vai Japão","Japão","Brasil"));


function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
        return("Você é maior de idade");
    }else {
        validar = false
        return("Você é menor de idade");
    }
}

var idade = prompt("Digite a sua idade:");
alert(validaIdade(idade));

*/

function clicar(){
    document.getElementById("agradecimento").innerHTML="Muuuito obrigado!";
        //alert("Obrigado por clicar no botão!");
}

function redirecionar(){
    window.open("https://www.google.com.br");
}

function trocar(elemento){
    /* document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse aqui!";
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse aqui!"; */
    //alert("onmousemove abre um alert ao passar o mouse em cima!");

    elemento.innerHTML = "Obrigado por passar em cima";

}

function trocar2(elemento2){
    elemento2.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}