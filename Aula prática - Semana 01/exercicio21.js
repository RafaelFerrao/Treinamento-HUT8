function calculate(op, numA, numB){
   switch(op){
      case 'soma':
         return numA + numB
      case 'subtrai':
         return numA - numB
      case 'multiplica':
         return numA * numB
      case 'divide': 
         return numA / numB
   }
}

console.log(calculate('divide', 3, 5))