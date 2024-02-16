// Define a function to print all unequal numbers from 1 to 20
function printUnequalNumbers() {
    // Loop through numbers from 1 to 20
    for (let i = 1; i <= 20; i++) {
        // Check if the number is unequal
        if (i % 2 !== 0) {
            // Print the unequal number
            console.log(i);
        }
    }
}

// Call the function to print the unequal numbers
printUnequalNumbers();
