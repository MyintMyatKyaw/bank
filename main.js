// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Mock Data 
let balance = 5000;
let transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];

function getBalance() {
    // Write function description 
    // TO SHOW THE BALANACE 
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    console.log('The total balance is :', balance);



    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function deposit(amount) {
    // Write function description 
    //  TO DEPOSIT THE AMOUNT TO TOTAL BALANCE 
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    balance += amount;
    // console.log(balance)
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function withdraw(amount) {
    // Write function description 
    // TO WITHDRAW THE AMOUNT FROM THE BALANCE
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    balance -= amount;
    // console.log(balance)
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function getTransactionHistory() {
    // Write function description 

    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    transactionHistory.push('Deposited 4000 into Savings Account');
    transactionHistory.push('Withdrawn 3000 from Savings Account');
    // console.log(transactionHistory[1]);
    console.log('Transaction History');
    for (let i = 0; i < transactionHistory.length; i++) {
        console.log(`${i + 1}) ${transactionHistory[i]}`);
    }
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

// console.log(getBalance());
getBalance();
// Expected Output: 5000

let depositAmount = 4000;
deposit(depositAmount);
console.log('The total balance after deposting', depositAmount, ' is :', balance);
// Expected Output: 9000

let withdrawAmount = 3000;
withdraw(withdrawAmount);
console.log('The total balance after withdrawing', withdrawAmount, ' is :', balance);
// Expected Output: 6000

// console.log(getTransactionHistory());
getTransactionHistory();
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/
