/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let d = Array(n + 1).fill().map(() => []);
    d[0] = [""];
    for(let i = 0; i<n; i++) {
        for(let j = i + 1; j <= n; j++) {
            if(wordDict.indexOf(s.substring(i, j)) > -1 && d[i].length) {
                d[j] = d[j].concat(d[i].map(str => str.concat(" " + s.substring(i, j))))
            }
        }
    }
    // console.log(d);
    return d[n].map(d => d.replace(" ", ""));
};