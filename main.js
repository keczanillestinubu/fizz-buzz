/*
This script prints numbers from 1 to 100:
- "Fizz" for multiples of 3
- "Buzz" for multiples of 5  
- "FizzBuzz" for multiples of both 3 and 5

It counts occurrences of each type and prints the counts at the end.
*/

function isFizzBuzz(num) {
    return num % 3 === 0 && num % 5 === 0;
}

function isFizz(num) {
    return num % 3 === 0;
}

function isBuzz(num) {
    return num % 5 === 0;
}

function main() {
    let buzzCount = 0;
    let fizzBuzzCount = 0;
    let numberCount = 0;
    let fizzCount = 0;

    for (let i = 1; i <= 100; i++) {
        if (isFizzBuzz(i)) {
            console.log("FizzBuzz");
            fizzBuzzCount++;
        } else if (isBuzz(i)) {
            console.log("Buzz");
            buzzCount++;
        } else if (isFizz(i)) {
            console.log("Fizz");
            fizzCount++;
        } else {
            console.log(i.toString());
            numberCount++;
        }
    }

    console.log("Number of buzzes: ", buzzCount);
    console.log("Number of fizzbuzzes:", fizzBuzzCount);
    console.log("Number of unchanged numbers:", numberCount);
    console.log("Number of fizzes:", fizzCount);
}

main();