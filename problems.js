const sentence = 'alchemy rocks gold';

function reverseWord(sentence){
  return sentence
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');  
}

const result = reverseWord(sentence);

console.log(result);


const partTwo = 'alchemy ROCKS goLD';
function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .split(' ')
    .map((resp) => resp.charAt(0).toUpperCase() + resp.substring(1))
    .join(' ');
}

const two = titleCase(partTwo);
console.log(two);

const odd = 41;
const isOddish = (odd, sum = 0) => {
  if (odd) {
    return isOddish(Math.floor(odd / 10), sum + (odd % 10));
  }
  return sum % 2 === 1;
};
console.log(isOddish(odd));


const even = 121;
const isEven = (even, sum = 0) => {
  if (even) {
    return isEven(Math.floor(even / 10), sum + (even % 10));
  }
  return sum % 2 === 0;
};
console.log(isEven(even));

// Fizzbuzz problem
for (let i = 1; i <= 16; i++) {
  i % 15 === 0 ? console.log('FizzBuzz') :
    i % 5 === 0 ? console.log('Buzz') :
      i % 3 === 0 ? console.log('Fizz') :
        console.log(i);
}


function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
  
function cleanString(str) {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join();
}
  
const ana = anagrams('superintended', 'unpredestined');
  
console.log(ana);
