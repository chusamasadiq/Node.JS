let x = 20;

/* Double Equals (==): Check the Value : 
The double equals (==) is known as the "loose equality" operator.*/

if (x == 20) {
    console.log('Matched');
}

/* Triple Equals (===): Check the value & variable type
The triple equals (===) is known as the "strict equality" operator.*/

if (x === 20) {
    console.log('Matched');
}


// Loops

for (i = 0; i <= 10; i++) {
    console.log(i);
}

// Array

const data = [2, 4, 6, 8, 10, 2, 4, 6, 8, 10];
console.log(data);
console.log(data[3]);

// Filter
data.filter((item) => {
    console.log(item);
})

let result = data.filter((item) => {
    return item === 10;
});

console.log(result);