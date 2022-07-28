let a = 1
let b = 2
let c = 3

if(b < a)
    [a, b] = [b, a]

if(c < a)
    [c, a] = [a, c]
    
if(c < b)
    [b, c] = [c, b]

console.log(a, b, c)
