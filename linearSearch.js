const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(numbers, 1));
