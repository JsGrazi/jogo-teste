alert ('Bem vindes ao jogo secreto!');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

//variavel (enquanto)
while (chute != numeroSecreto) {
     chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao numero secreto (variavel SE e ENTÃO)
    if (chute == numeroSecreto)  { 
       break;
    } else { 
       if (chute > numeroSecreto) {
          alert(`O número secreto é menor que ${chute}`);
        } else {
          alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++; // sempre que quiser atribuir mais 1
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//  alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//   alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
