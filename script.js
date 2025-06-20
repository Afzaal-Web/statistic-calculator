/* The .reduce() method in JavaScript is used to combine all elements of an array into
 a single value — like a total, a product, a string, or even an object. 

 acc = accumulator (starts as 0 here)
curr = current array item
It adds each item to the accumulator
The **0** at the end is the initial value of the accumulator (acc).

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
  array.forEach(el => {
if(counts[el]){
  counts[el] += 1;
}
else{
  counts[el] = 1;
}
  })
  return counts;
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  console.log(getMode(numbers));

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
}

