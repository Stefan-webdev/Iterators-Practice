/*const numbers = [1, 2, 3];
const numbersIterator = numbers[Symbol.iterator]();

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

//console.log(numbersIterator);

for (const n of numbers) {
    console.log(n);
}

// in javascript arrays are iteratble by default
// what makes and object iterable?
//Object is iterable if it provides a means for you to return
// retrieve an iterator for that object.   
// In this case the for of loop is requesting an iterator from the numbers array,
// it is then using the iterator to loop through the block of code
//for each value in the array.

*/


// 1, 4, 9, 16, 25
/* function squared() {
    let n = 0; 
    return {
        next() {
            n++;

            if (n <= 5) {
                return {
                    value: n * n,
                    done: false
                };
            }

            return {
                value: undefined,
                done: true
            }

        

        }
    };
}

const squaredIterator = squared();

console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());

*/

// 1, 4, 9, 16, 25
function squared(max) {
    return {
        [Symbol.iterator]() {
            let n = 0; 
    return {
        next() {
            n++;

            if (n <= max) {
                return {
                    value: n * n,
                    done: false
                };
            }

            return {
                value: undefined,
                done: true
            }

        }

    };
    

        

        }
    };
}

//const squaredIterator = squared();

for (const n of squared(10)) {

    console.log(n);




}

// array destructuring

/*const [a, b, c] = [4, 5, 6];

console.log(a)
console.log(b)
console.log(c)

*/

/* const [a, b, c, d, e, f, g, h, i, j] = squared(10);

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(j)

*/

class Numberlist {
    constructor() {
        this.numbers = [1, 2, 3, 4];
    }

    [Symbol.iterator]() {
        const numbers = this.numbers;
        let currentIndex = -1;

        return {
            next() {
                return {
                    value: numbers[++currentIndex],
                    done: currentIndex >= numbers.length
                }
            }

        }
    }
}

const numListIterator = new Numberlist()[Symbol.iterator]();

console.log(numListIterator.next());
console.log(numListIterator.next());
console.log(numListIterator.next());
console.log(numListIterator.next());
console.log(numListIterator.next());











