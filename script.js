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
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  console.log('keys: ', Object.keys(counts));
  console.log('Values: ', Object.values(counts));
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
  console.log(mode)
  return mode.join(', ');
}

const getRange = (array) => {
  const lowest = Math.min(...array); // spread operator to use array, to convert to individual arguments
  const highest = Math.max(...array);
  return highest - lowest;
}

const getVariance = (array) => {
  /*  const mean = getMean(array);
   const differences = array.map(
     el => el - mean
   );
   const squaredDifferences = differences.map(
     el => el ** 2
   );
   const sumSquaredDifferences = squaredDifferences.reduce(
     (acc, el) => acc + el, 0
   ); */

  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}

const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  // const standardDeviation = Math.pow(variance, 1/2);
   const standardDeviation = Math.sqrt(variance);
   return standardDeviation;
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  // const array = value.split('');
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
}