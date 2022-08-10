// Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho pela 
// CLT (Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica). 
// Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de benefício
// e 8% mensal referente ao FGTS. Faça um programa que receba como entrada os 
// dois valores mensais oferecidos e tome a decisão informando qual proposta a pessoa deve aceitar.

const calculaCoeficienteCLT = sal => sal * 13 + sal * 12 * 0.08 + 12 * 700;

const calculaCoeficientePJ = sal => sal * 12;

let salarioPJ = 3300;
let salarioCLT = 2000;

console.log(`O ganho anual via CLT é de R$ ${calculaCoeficienteCLT(salarioCLT).toFixed(2)}`);
console.log(`O ganho anual via PJ é de R$ ${calculaCoeficientePJ(salarioPJ).toFixed(2)}`);

calculaCoeficienteCLT(salarioCLT) >= calculaCoeficientePJ(salarioPJ) ? console.log("Opte por CLT") : console.log("Opte por PJ")