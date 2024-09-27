document.querySelector ('button');
const botao = document.querySelector ('button');
botao.onclick = function () {
    alert ("você clicou no botão");
}

function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(5,3));

function areaQuadrado(lado){
    return lado**2;
}
console.log(areaQuadrado(6));

let notas=parseInt(prompt('insira o valor 1'));
let notas2=parseInt(prompt('insira o valor 2'));
let notas3=parseInt(prompt('insira o valor 3'));

let media = function(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

console.log(media(1,2,3));
console.log(media(notas,notas2,notas3));
document.write(notas);