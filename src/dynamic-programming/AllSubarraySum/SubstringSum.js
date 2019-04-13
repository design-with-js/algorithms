/*
https://www.hackerrank.com/challenges/sam-and-substrings/problem
find the sum of all posible substrings(as number) of a string(as number). 
*/

const MOD = 1000000007;

export function substrings(str) {
    // 42 => 4 + 2 + 42 = 48
    const n = str.length;
    const d = Array(n).fill(0);

    let sum = d[0] = Number(str[0]);

    for (let i = 1; i < n; i++) {
        d[i] = ((10 * d[i - 1]) % MOD + ((i + 1) * Number(str[i])) % MOD) % MOD;
        sum = ((sum % MOD) + (d[i] % MOD)) % MOD;
    }
    return sum;
}
