var name = 'nueng'
let userName = 'rungnueng'
const IP = '127.0.0.1'

function hello() {
    console.log('Hello World!!')
}

const hi = function () {
    console.log('hi')
}

const hiFunction = () => {
    console.log('hi function')
}

const hiUser = username => {
    console.log('Hi, ' + username)
}

const plus = (a, b) => {
    return a + b
}

const plus2 = (a, b) => a + b

console.log('function************')
hello()
console.log('********************')
console.log('constant function***')
hi()
console.log('********************')
console.log('arrow function******')
hiFunction()
hiUser('Rungnueng')
console.log('********************')
console.log(plus(1, 2))
console.log(plus2(5,6))
console.log('********************')