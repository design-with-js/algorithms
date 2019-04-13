/*
https://www.hackerrank.com/challenges/prime-xor/problem
*/

const MOD = 1000000007;

/*
  3500 <= arr[i] <= 4500      -> 1001 numbers
  XOR will result in any value between 0 to 8191  -> 8192 numbers
*/

const primes = [];
const store = Array(8191).fill(0);

for (let i = 2; i <= 8191; i++) {
  if (!store[i]) {
    primes.push(i);
    for (let j = i << 1; j <= 8191; j += i) {
      store[j] = true;
    }
  }
}

// Complete the primeXor function below.
export function primeXor(arr) {
  const countArr = Array(1001);
  let sum = 0;

  for (let i = 3500; i <= 4500; i++) {
    countArr[i - 3500] = 0;
  }
  arr.forEach(a => {
    countArr[a - 3500]++;
  });

  const d = Array(1001)
    .fill()
    .map(() => Array(8192).fill(0));
  /*
      d[i][j] = number of ways at i + 3500 position whose XOR will be j
    */
  d[0][0] = Math.floor((countArr[0] + 2) / 2);
  d[0][3500] = Math.floor((countArr[0] + 1) / 2);

  for (let i = 1; i < 1001; i++) {
    for (let j = 0; j < 8192; j++) {
      /*
              d[i][j] can be produced either by taking even number of x = (i + 3500) and produce 
              same result as d[i - 1][j] -> d[i][j] = d[i - 1][j] + countArr[i]/2 * d[i - 1][j]
              or d[i][j] can be produced by odd number of x = (i + 3500) and produce same result as
              d[i - 1][j ^ x], as j ^ x ^ x = j, -> d[i - 1][j ^ x] + d[i - 1][j ^ x]*(countArr[i] - 1)/ 2 
            */

      d[i][j] =
        ((d[i - 1][j] * Math.floor((countArr[i] + 2) / 2)) % MOD) +
        ((d[i - 1][j ^ (i + 3500)] * Math.floor((countArr[i] + 1) / 2)) % MOD);
    }
  }

  for (let k = 0; k < primes.length; k++) {
    // console.log(d[1000][primes[k]]);
    sum = (sum + d[1000][primes[k]]) % MOD;
  }

  return sum % MOD;
}
