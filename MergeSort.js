var merge = (a, b) => {
  let i = 0, j = 0;
  var output = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      output.push(a[i]);
      i++;
    } else if (a[i] >= b[j]) {
      output.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    output.push(a[i]);
    i++;
  }
  while (j < b.length) {
    output.push(b[j]);
    j++;
  }
  return output;
}

var mergeSort = (arr) => {
  if (arr.length <=1 ) {
    return arr;
  }
  let half = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,half));
  let right = mergeSort(arr.slice(half));
  return merge(left, right);

}