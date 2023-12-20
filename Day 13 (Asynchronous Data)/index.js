let a = 8;
let b = 6;

setTimeout(() => {
    console.log(a + b);
}, 2000);

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(91);
    }, 2000);
});

waitingData.then((data) => {
    let d = data;
    console.log(a + d);
});

console.log('Without Permises');
