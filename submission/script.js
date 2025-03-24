// "use strict"; // This will fail the strict mode test

// This will pass the test for declaring variables with let or const
let counter = 0;
const maxLimit = 100;

// This will fail the test for using eval()
eval("console.log('This is eval!');");

// This will pass the modularity test by using a function
function incrementCounter() {
    counter++;
}

// This will fail the test for async handling (missing async/await or Promises)
function fetchData() {
    // Missing async/await or Promise for async operations
    console.log("Fetching data...");
}

// This will pass the event handling test by using addEventListener
document.querySelector('button').addEventListener('click', function() {
    alert("Button clicked!");
});

// This will pass the DOM manipulation test (using querySelector)
document.querySelector('#myElement').textContent = 'Hello, World!';

// This will fail the async error handling test (no .catch or try/catch)
async function fetchDataAsync() {
    let data = await fetch('https://example.com/data');
    console.log(data);
}

// This will pass the memory leak test by cleaning up event listeners
document.querySelector('button').addEventListener('click', function onClick() {
    alert("Button clicked!");
    document.querySelector('button').removeEventListener('click', onClick);
});

// This will pass the meaningful function names test
function calculateSum(a, b) {
    return a + b;
}

// This will pass the no deeply nested code test
if (counter < maxLimit) {
    incrementCounter();
}

// This will pass the array methods test (using map)
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(num => num * num);

// This will pass the proper use of const and let test
const MAX_VALUE = 100;
let currentValue = 0;
