function sortedMerge(arrX, arrY) {
  // console.log({ arrX, arrY });
  let m = arrX.length;
  let n = arrY.length;
  let arr = Array(m + n).fill(0);
  let i, j, k;
  for (i = 0, j = 0, k = 0; i < m, j < n; ) {
    if (arrX[i] < arrY[j]) {
      arr[k] = arrX[i];
      i++;
    } else {
      arr[k] = arrY[j];
      j++;
    }
    k++;
  }
  if (i < m) {
    for (; i < m; i++) {
      arr[k] = arrX[i];
      k++;
    }
  }
  if (j < n) {
    for (; j < n; j++) {
      arr[k] = arrY[j];
      k++;
    }
  }
  return arr;
}

function mergeSort(arr, l, r) {
  // console.log({ arr, l, r });
  l = typeof l != "undefined" ? l : 0;
  r = typeof r != "undefined" ? r : arr.length - 1;

  if (l == r) {
    return Array(1).fill(arr[l]);
  }
  let mid = Math.floor((l + r) / 2);
  return sortedMerge(mergeSort(arr, l, mid), mergeSort(arr, mid + 1, r));
}

arr = [4, 3, 5, 1, 2, 8, 3];

console.log(mergeSort(arr));
console.log({ arr });
