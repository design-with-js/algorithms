/**
 * https://www.geeksforgeeks.org/greedy-algorithm-egyptian-fraction/
 * Every positive fraction can be represented as sum of unique unit fractions.
 * A fraction is unit fraction if numerator is 1 and denominator is a positive integer,
 * for example 1/3 is a unit fraction. Such a representation is called Egyptian Fraction as
 * it was used by ancient Egyptians.
 */

/**
 * Testcases:
 *  Egyptian Fraction Representation of 2/3 is 1/2 + 1/6
    Egyptian Fraction Representation of 6/14 is 1/3 + 1/11 + 1/231
    Egyptian Fraction Representation of 12/13 is 1/2 + 1/3 + 1/12 + 1/156
 */

function egyptianFractions(n, d) {
    let list = [];

    // finding gcd using euclids algorithm

    function gcd(a, b) {
        // its provided that b < a
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    let f = gcd(d, n);

    n = parseInt(n / f);
    d = parseInt(d / f);

    function egyptfract(n, d) {
        if (n == 1) {
            list.push(d);
            return;
        }
        let p = Math.ceil(d / n);
        list.push(p);
        egyptfract(p * n - d, d * p);
    }

    egyptfract(n, d);

    console.log({ list });

    return list;
}

egyptianFractions(6, 14);
