function max(...arr) {
  var m = 0;
  arr.forEach(a => {
    m = a > m ? a : m;
  });
  return m;
}

function sum(arr) {
  var s = 0;
  if (arr.length == 0) return 0;
  if (arr.length == 1) return arr[0];
  for (var i = 1; i < arr.length; i++) {
    s += Math.abs(arr[i] - arr[i - 1]);
  }
  return s;
}


function cost(B) {
  var N = B.length;
  if(N==1) return B[0];
  var hi=0, lo=0;
  for(var i=1; i<N-1; i++){
    var high_to_low_diff = Math.abs(B[i-1] - 1)
    var low_to_high_diff = Math.abs(B[i] - 1)
    var high_to_high_diff = Math.abs(B[i] - B[i-1])
    lo = low_next
    hi = hi_next
    var lo = max(low, hi+high_to_low_diff)
    var hi = max(hi+high_to_high_diff, low+low_to_high_diff)
  }
  
  return max (hi,low)
}
