let salCLT = 1200
let salPJ = 2100

salCLT = salCLT + salCLT * 0.08 + 700
salCLT = salCLT * 12 + salCLT

salPJ *= 12

if (salCLT >= salPJ)
   console.log('Opte pelo CLT')
else
   console.log('Opte pelo PJ')
