/* 
split method converts the string to array
string.split(separator, limit);
const splitMethod1 = "hello world".split(" ");  
console.log(splitMethod1);

const splitMethod2 = "apple banana,grape".split(",");   
console.log(splitMethod2);

const splitMethod3 = "abcde".split("", 3);   
console.log(splitMethod3);


The .reduce() method in JavaScript is used to combine all elements of an array into
 a single value — like a total, a product, a string, or even an object. More actions

 acc = accumulator (starts as 0 here)
curr = current array item
It adds each item to the accumulator
The **0** at the end is the initial value of the accumulator (acc).

sort()
Mutates the original array (changes it).
toSorted()
Does NOT mutate the original array.
Returns a new sorted array, keeping the original unchanged.

A Set is a data structure that only allows unique values. If you pass an array into the
Set constructor, it will remove any duplicate values.
A Set is a built-in JavaScript object that only stores unique values — duplicates are 
removed automatically.

Object.values(counts)
This method returns all the values of an object in an array.

 */

const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
}

const getMode = (array) => {
  const counts = {};
  array.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);
  console.log("Keys =", Object.keys(counts));
console.log("Values =", Object.values(counts));
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  // const array = value.split(/,\s*/g);
  const array = value.split('');
  console.log(array);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
 console.log(numbers)
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  getMode(numbers);
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
}



