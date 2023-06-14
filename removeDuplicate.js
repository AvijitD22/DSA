const removeDuplicate = (array) => {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(removeDuplicate([1, 2, 3, 1, 4, 2, 5, 3, 6, 7, 8]));
