let a = 7

function factorial(number){
    arr = Array.from(Array(number+1).keys())
    fact = arr.slice(1,).reduce((a,b)=> a*b)
    return fact
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))