// const mergeArrays = (arr1, arr2) => {
//   return [...arr1, ...arr2]
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// const removeDuplicates = (...rest) => {
//   return rest.filter((val, index) => rest.indexOf(val) === index);
// }

// console.log(removeDuplicates(1, 2, 2, 4, 3, 4));

// const getEvenNumber = (arr) => arr.filter(item => item % 2 === 0)
// console.log(getEvenNumber([1, 2, 3, 4, 5, 6]));

// const calculateAverage = (arr) => {
//   const sum = arr.reduce ((acc, item) => acc + item, 0)
//   return sum/ arr.length
// }
// console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

// const capitalize = (str) => {
//   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }

// console.log(capitalize('hello world'));

// const createCalculator = {
//   num: 5,
//   add: (i) => {
//     return this.num+i
//   },
//   subtrack: (i) => {
//     return this.num - i
//   }
// }

// console.log(createCalculator.add(2));

// const create = (name) => {
//   return 'Hello, ' + name
// }

// console.log(create('Nik'));


// const createPasswordChecker = (num) => {
//   return function(password){
//     return password.length <=num;
//   }
// }

// const passValid = createPasswordChecker(6);
// console.log(passValid('password'));
// console.log(passValid('secret'));

const sumDigits = (num) => {
  if(num < 10){
    return num;
  }
  return num % 10 + sumDigits(Math.floor(num / 10))
}
console.log(sumDigits(1234));