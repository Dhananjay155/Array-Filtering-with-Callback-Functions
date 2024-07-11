const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArray(arr, callback) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

function isEven(element) {
    return element % 2 === 0;
}

const filteredNumbers = filterArray(numbers, isEven);

console.log("Original array:", numbers);
console.log("Filtered array (even numbers):", filteredNumbers);
