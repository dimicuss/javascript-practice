let elapsed, start
let count = 20

function assert (condition, message) {
    return !condition ? message : null
}


start = new Date().getTime()

for(let i = 0; i < count; i++) {
    console.info('Shit')
}


elapsed = new Date().getTime() - start;



console.log(assert(false, `Measured time: ${elapsed}`))
