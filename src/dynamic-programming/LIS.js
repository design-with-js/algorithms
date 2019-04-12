var max = (a, b) => (a > b ? a : b);

// function longestIncreasingSubsequence(arr) {
//   var lis = new Array(arr.length).fill(1);
//   for (var i = 0; i < arr.length; i++) {
//     for (var k = 0; k < i; k++) {
//       if (arr[k] < arr[i]) {
//         lis[i] = max(lis[i], lis[k] + 1);
//       }
//     }
//   }
//   var m = 0;
//   lis.forEach(l => {
//     if (m < l) m = l;
//   });
//   return m;
// }

function longestIncreasingSubsequence(arr) {
  var n = arr.length;
  var K = new Array(n).fill([]);
  
}