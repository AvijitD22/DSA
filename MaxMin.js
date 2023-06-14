const MinMax = (array) => {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return `$Minimum Value: ${minValue}, Max Value:${maxValue}`;
};

console.log(
  MinMax([4965, 165, 6, 0, -51, 685, 3535, -461, 66515, -65165, 9, 10])
);
