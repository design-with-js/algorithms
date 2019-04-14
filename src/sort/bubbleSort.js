
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) [a[i], a[j]] = [a[j], a[i]];
    }
  }
  console.log(arr);
}
