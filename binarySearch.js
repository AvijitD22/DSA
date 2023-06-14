const array = [1, 2, 3, 4, 5, 6];

const binarySearch = (target, start, end) => {
  const middle = Math.floor((start + end) / 2);
  if (start > end) {
    return -1;
  }
  if (array[middle] === target) {
    return middle;
  }
  if (array[middle] < target) {
    return binarySearch(target, middle + 1, end);
  }
  if (array[middle] > target) {
    return binarySearch(target, start, middle - 1);
  }
};

console.log(binarySearch(3, 0, 6));
