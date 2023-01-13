const {sumNumbers, isPrime} = require("../index")

test("sumNumbers", ()=>{
    expect(sumNumbers(1,2,3,4)).toBe(10)
})


test("sumNumbers", ()=>{
    expect(isPrime(7)).toBe(true)
})