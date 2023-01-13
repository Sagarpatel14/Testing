const sumNumbers = function (...a){
    let sum=0;
    for(let i=0; i<a.length; i++){
        sum+=a[i]
    }
    return sum 
}

console.log(sumNumbers(1,2,3,4));

const isPrime = function(num){
    for(let i=2; i<num; i++){
        if(num%i===0) return false;
    }
    return true
}

console.log(isPrime(19))

module.exports = {sumNumbers,isPrime}