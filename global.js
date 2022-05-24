// console.log(global)


setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int)
}, 3000);

setInterval(() => {
    console.log('in the interval')
}, 1000);