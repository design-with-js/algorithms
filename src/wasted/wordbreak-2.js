/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// var wordBreak = function(s, wordDict) {
//     let n = s.length;
//     let res = [];
//     let d = Array(n + 1)
//         .fill()
//         .map(() => []);
//     let dict = {};
//
//     wordDict.forEach(word => {
//         dict[word] = true;
//     });
//
//     d[0] = [0];
//
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < i; j++) {
//             let right = s.substring(j, i);
//             // console.log({ right });
//             if (dict[right] && d[j].length) {
//                 d[i].push(j);
//             }
//         }
//     }
//     console.log(d);
//     build(s.length, "");
//     return res;
//
//     function build(idx, suffix) {
//         if (!idx) return res.push(suffix);
//         d[idx].forEach(function(d) {
//             build(
//                 d,
//                 suffix === ""
//                     ? s.substring(d, idx)
//                     : s.substring(d, idx) + " " + suffix
//             );
//         });
//     }
//     // return d[n];
// };
//
//
//
//
const min = (a, b) => (a > b ? b : a);

function wordBreak(s, wordDict) {
    let n = s.length;
    let d = Array(n + 1)
        .fill()
        .map(() => []);
    let dict = {};

    wordDict.forEach(word => {
        dict[word] = true;
    });

    let minL = Number.MAX_SAFE_INTEGER;
    let maxL = Number.MIN_SAFE_INTEGER;

    wordDict.forEach(word => {
        maxL = word.length > maxL ? word.length : maxL;
        minL = word.length < minL ? word.length : minL;
    });

    for (let i = 0; i <= n; i++) {
        let low = min(i + minL, n);
        let hi = min(i + maxL, n);
        for (let j = low; j <= hi; j++) {
            let right = s.substring(i, j);
            if (dict[right]) {
                d[i].push(j);
            }
        }
    }

    let res = [];

    function build(prefix, index) {
        if (index == n) {
            res.push(prefix);
        } else {
            d[index].forEach(idx => {
                prefix == ""
                    ? build(s.substring(index, idx), idx)
                    : build(prefix + " " + s.substring(index, idx), idx);
            });
        }
    }

    // build("", 0);

    return JSON.stringify(d);
}

let s =
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

let wordDict = [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaa",
    "aaaaaaaa",
    "aaaaaaaaa",
    "aaaaaaaaaa"
];

s = "catsanddog";
wordDict = ["cat", "cats", "and", "sand", "dog"];

console.log(wordBreak(s, wordDict));
