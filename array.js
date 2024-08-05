

// array declaration 

const arr = [0, 1, 2, 3, 4, 5];
const arr2 = new Array(0, 1, 2, 3, 4, 5);
const arr3 = ['Shakiman', 'Bankelal', 'Doga']

// console.log(`arr ${arr}`)
// console.log(`arr2 ${arr2}`)
// console.log(`arr3 ${arr3}`)


/**
 * Array methods
 */


// push/pop

arr.push(9);
// console.log(arr);
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);


// unshift & shift

// arr.unshift(10)
// console.log(`unshift arr ${arr}`);
// console.log(arr);

// arr.shift()
// console.log(arr);



// includes & indexOf
// console.log(arr.includes(9))
// console.log(arr.indexOf(9));


// join
// const newArray=arr.join('1111')
// console.log(newArray, typeof newArray);
// console.log(newArray.length)


// slice & splice

console.log(arr.slice(1, 3))
console.log(arr)

console.log(arr.splice(1, 3))
console.log(arr)


