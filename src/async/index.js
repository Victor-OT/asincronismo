const timeFunction = () => {
    return new Promise((result, reject) =>{
        (true)
        ? setTimeout(() => result('Async'), 2000)
        : reject(new Error('Error'))
    })
}

const asyncFunction = async () => {
    const time = await timeFunction()
    console.log(time)
    console.log('Hello')
}

console.log('Before')
asyncFunction()
console.log('After')