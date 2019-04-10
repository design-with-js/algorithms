const MOD = 1000000007;

const exponent = (k, n) => {
  var exp = new Array(n + 1).fill(0);
  exp[0] = 1;
  for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      exp[i] = ((exp[i / 2] % MOD) * (exp[i / 2] % MOD)) % MOD;
    } else {
      exp[i] = ((k % MOD) * (exp[i - 1] % MOD)) % MOD;
    }
  }
  return exp[n];
};

function countArray(n, k, x) {
  return (((exponent(k - 1, n - 3) % MOD) * (k - 2)) % MOD) % MOD;
}
