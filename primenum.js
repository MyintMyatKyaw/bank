// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function checkPrimeNum(num) {
    let prime = true;
    if (num < 2) {
        prime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
    }
    // Use messageFormatter to print the result
    messageFormatter(num, prime);
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.
function findPrimesInRange(start, end) {
    if (Array.isArray(start) && start.length === 2 && typeof start[0] === 'number' && typeof start[1] === 'number') {
        const primesInRange = [];
        for (let i = start[0]; i <= start[1]; i++) {
            let prime = true;
            if (i < 2) prime = false;
            else {
                for (let j = 2; j <= Math.sqrt(i); j++) {
                    if (i % j === 0) {
                        prime = false;
                        break;
                    }
                }
            }
            if (prime) primesInRange.push(i);
        }
        // Print primes in the range using messageFormatter
        messageFormatter(primesInRange);
    } else {
        console.log("Invalid input. Please provide a number or a valid range (array of two numbers).");
    }
}

// Polymorphic messageFormatter function
function messageFormatter(data, primeStatus) {
    if (Array.isArray(data)) {
        console.log(`Primes between ${data[0]} and ${data[1]}: [${data.join(', ')}]`);
    } else if (typeof data === 'number') {
        if (primeStatus) {
            console.log(data + " is a prime number.");
        } else {
            console.log(data + " is NOT a prime number.");
        }
    } else {
        console.log("Invalid input.");
    }
}

// Instructor's test cases
console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange('test'));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).
