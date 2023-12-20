let a = 100;
let b = 50;

// Synchronous Execution

console.log('Start exe...');

console.log('Logic exe...');

console.log('end exe...');


// With Delay Execution

console.log('Start exe...');

setTimeout(() => {
    console.log('Logic exe...');
}, 2000);

console.log('end exe...');
