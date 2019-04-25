let t = 0

function partition(arr, l, r) {
  console.log(t++);
  let key = arr[l];
  let i = l;
  j = r;
  while (j > i) {
    if (arr[i] > key) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    } else if (arr[j] < key) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
    if (arr[i] < key) i++;
    if (arr[j] > key) j--;
  }
  return j;
}

arr = [10, 11, 12, 7, 8, 9, 13, 14];
// console.log(partition(arr, 0, 7));
// console.log(arr);

function quickSort(arr, l, r) {
  console.log({l, r}, t++);
  if(l >= r) return;
  let pivot = partition(arr, l, r);
  quickSort(arr, l, pivot);
  quickSort(arr, pivot + 1, r);
}

quickSort(arr, 0, 7);

console.log(arr);