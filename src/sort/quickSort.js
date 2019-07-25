let t = 0;

function partition(arr, l, r) {
  let key = arr[Math.floor((l + r) / 2)];
  let i = l,
    j = r;

  while (i <= j) {
    while (arr[i] < key) i++;
    while (arr[j] > key) j--;
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}

arr = [10, 11, 12, 7, 8, 9, 14, 13];
// console.log(partition(arr, 0, 7));
// console.log(arr);

function quickSort(arr, l, r) {
  console.log({ l, r }, t++);
  if (l >= r) return;
  let pivot = partition(arr, l, r);
  quickSort(arr, l, pivot - 1);
  quickSort(arr, pivot, r);
}

quickSort(arr, 0, 7);

quickSort([1, 1], 0, 1);
console.log(arr);
