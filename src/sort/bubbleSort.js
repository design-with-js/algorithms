function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // console.log(arr);
}

var arr = [4, 3, 5, 1, 2, 8, 3];
bubbleSort(arr);
console.log(arr);
