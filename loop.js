//Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//---------------------------------//
console.log("-----------------------------")
//---------------------------------//

//Part 2: Prime Time

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findNextPrime(n) {
    while (true) {
        if (isPrime(n)) {
            return n;
        }
        n++;
    }
}

let n = 4; // Arbitrary number
console.log("Next prime number after", n, "is:", findNextPrime(n));

//---------------------------------//
console.log("-----------------------------")
//---------------------------------//

//Part 3: Feeling Loopy

const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let currentCell = "";
let rowData = [];
for (let i = 0; i < csvData.length; i++) {
    const char = csvData[i];
    if (char === ",") {
        rowData.push(currentCell);
        currentCell = "";
    } else if (char === "\n") {
        rowData.push(currentCell);
        console.log(...rowData);
        currentCell = "";
        rowData = [];
    } else {
        currentCell += char;
    }
}

