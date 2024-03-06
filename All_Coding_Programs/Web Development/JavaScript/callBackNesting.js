// Function with a nested callback
function outerFunction(callback) {
    console.log("Outer function started");

    // Simulating an asynchronous operation with setTimeout
    setTimeout(function () {
        console.log("Outer function completed");

        // Call the nested callback
        callback();
    }, 1000);
}

// Function to be used as a nested callback
function innerFunction() {
    console.log("Inner function completed");
}

// Call the outer function with the nested callback
outerFunction(function () {
    innerFunction();
});
