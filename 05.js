const findSecondLargestNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid";

  const max = Math.max(...arr);
  const secondMax = arr.reduce(
    (secondMax, el) => (el === max ? secondMax : Math.max(secondMax, el)),
    -Infinity
  );

  return secondMax === -Infinity ? null : secondMax;
};

console.log(findSecondLargestNumber([1, 2, 3, 4, 5]));
console.log(findSecondLargestNumber([1, 1, 1, 1]));
console.log(findSecondLargestNumber([9, 1, 2, 1]));
console.log(findSecondLargestNumber([0, -1, -2, -3, -4]));
console.log(findSecondLargestNumber([-4, -3, -2, -1, 0]));
console.log(findSecondLargestNumber([1]));
console.log(findSecondLargestNumber([]));
console.log(findSecondLargestNumber([2, 52, 5, 78, 91, 22, 123, 59]));
console.log(findSecondLargestNumber([2, 52, -5, 78, -91, 22, -123, 59]));
