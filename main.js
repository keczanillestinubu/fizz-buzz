/*
This script logs the numbers from 0 to 100, replace every multiple of 3 by Fizz,
every multiple of 5 by Buzz, and every multiple of both 3 and 5 by FizzBuzz!

It also counts the number of "Fizz"-es, "Buzz"-es, "FizzBuzz"-es, and plain numbers,
and prints the counts at the end.
*/
a=0, b=0, c=0, d=0;
var z=0
while (z<100) {
    if (z+1 == Math.floor((z+1)/5)*5 && z+1 != Math.floor((z+1)/3)*3) {
    console.log("Buzz");
    a=a+1;
    z=z+1;
    continue;
    }
    if (z+1 == Math.floor((z+1)/3)*3 && z+1 == Math.floor((z+1)/5)*5) {
        console.log("FizzBuzz");
        b=b+1;
        z=z+1;
        continue;
    }
if (z+1 != Math.floor((z+1)/5)*5 && z+1 != Math.floor((z+1)/3)*3) {
console.log((z+1).toString());
c+=1;
z+=1;
    continue;
}
    console.log("Fizz");
    z++;
    d++;
}
console.log("Number of buzzes: ", a)
console.log("Number of fizzbuzzes:", b)
console.log("Number of unchanged numbers:", c)
console.log("Number of fizzes:", d)