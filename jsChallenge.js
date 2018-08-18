//---------JavaScript Coding Challenges---------//

//Challenge 1 (reverseArray())
/* Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order. Do not use built-in methods (e.g., .reverse()). */

const sentence = ['sense.','make', 'all', 'will', 'This'];

function reverseArray(array){
    let reversedArray = [];
    for(let i=array.length-1; i >= 0; i--){
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

console.log(reverseArray(sentence));


//Challenge 2 (greetAliens())
/* Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array. Do not use .forEach(). */

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(array){
    for(let name of array){
        console.log("Oh powerful " +  name + " we humans offer our unconditional surrender!");
    }
}

greetAliens(aliens);


//Challenge 3 (convertToBaby())
/* Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '. Do not use .map(). */

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];


function convertToBaby(array){
    let returnArray = [];
    array.forEach(function(item, index, array){
        returnArray.push("baby " + item);
    },this);
    return returnArray;
}

console.log(convertToBaby(animals));


//Challenge 4 (Fix The Broken Code!)
const numbers = [5, 3, 9, 30];

 const smallestPowerOfTwo = arr => {
       let results = [];
       // The 'outer' for loop - loops through each element in the array
       for (let i = 0; i < arr.length; i++) {
             let number = arr[i];

             // The 'inner' while loop - searches for smallest power of 2 greater than the given number
             let smallestPower = 1;
             while (smallestPower < number) {
                smallestPower = smallestPower * 2;
             }
             results.push(smallestPower);
       }
       return results;
 }

 console.log(smallestPowerOfTwo(numbers)); 


 //Challenge 5(declineEverything() and acceptEverything())
 const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
 
 const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
 }
//PART 1
 function declineEverything(array){
    array.forEach(function(veg,index, array){
        politelyDecline(veg);
    },this);
 }

 declineEverything(veggies);

//PART 2
function acceptEverything(array){
    array.forEach(function(veg,index,array){
        console.log('Ok, I guess I will eat some ' + veg +'.');
    },this);
}

acceptEverything(veggies);



//Challenge 6 (squareNums())
/* Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array. */
const numbersTest = [2, 7, 9, 171, 52, 33, 14];
const toSquare = num => num * num;

const squareNums = array => array.map(toSquare);
console.log(squareNums(numbersTest));


//Challenge 7 (shoutGreetings())
/* Write a function, shoutGreetings(), that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!' */

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const transform = greeting => greeting.toUpperCase() + '!';
const shoutGreetings = greetings => greetings.map(transform);
console.log(shoutGreetings(greetings));

//Challenge 8 (sortYears())
/* Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order. */

const years = [1993, 1998, 2001, 1997, 2003, 2018];
const sortYears = years => years.sort(function(a, b){return b - a});

console.log(sortYears(years));

