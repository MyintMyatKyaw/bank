class NumberChecker {
    constructor() { }

    // Function to check if numbers are odd or even
    checkOddEven(input) {
        // Check if input is a number
        if (typeof input === 'number') {
            return input % 2 === 0 ? "Even" : "Odd";
        }

        // Check if input is an array
        else if (Array.isArray(input)) {
            let results = [];
            for (let i = 0; i < input.length; i++) {
                if (typeof input[i] !== 'number') {
                    return "Invalid input";
                }
                results.push(input[i] % 2 === 0 ? "Even" : "Odd");
            }
            return results;
        }

        // If input is neither a number nor an array of numbers
        return "Invalid input";
    }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));          // Expected Output: "Odd"
console.log(numberChecker.checkOddEven(10));         // Expected Output: "Even"
console.log(numberChecker.checkOddEven([3, 5, 7, 10])); // Expected Output: ["Odd", "Odd", "Odd", "Even"]
console.log(numberChecker.checkOddEven('Hello'));    // Expected Output: "Invalid input"
