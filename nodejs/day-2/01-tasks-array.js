
// 1. Take a Array of Number
// 2. Print the Numbers one by one
// 3. Sum the numbers

let sum = 0;
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log("element: " + array[i]);

    sum = sum + array[i];
}

console.log("sum: " + sum);
