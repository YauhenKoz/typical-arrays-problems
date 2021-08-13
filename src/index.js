exports.min = function min (array) {
  if (array == null || array.length == 0) return 0;
  let minNum = array.sort((a, b) => a - b);
  return minNum[0];
};

exports.max = function max (array) {
  if (array == null || array.length == 0) return 0;
  let maxNum = array.sort((a, b) => b - a);
  return maxNum[0];
};

exports.avg = function avg (array) {
   if (array == null || array.length == 0) return 0;
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
      sum += array[i];
   };
   return sum / array.length;
};