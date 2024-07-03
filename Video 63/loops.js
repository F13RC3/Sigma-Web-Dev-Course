let a = [1, 93, 5, 6, 88]


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }
console.log('FOREACH LOOP\n')
a.forEach((value, index, arr)=>{
    console.log(`value: ${value}, at index: ${index} of array: ${arr}`)
})

console.log('\nFOR IN LOOP\n')
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key, element)
    }
}

console.log('\nFOR OF LOOP\n')
for (const value of a) {
    console.log(value)
}