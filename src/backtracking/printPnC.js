function printPermutations(list) {
    let res = [];

    function perms(prefix, arr) {
        if (arr.length == 0) {
            res.push(prefix);
        }
        arr.forEach((a, i) => {
            perms(
                prefix.concat(a),
                arr.slice(0, i).concat(arr.slice(i + 1, arr.length))
            );
        });
    }

    perms([], list);

    console.log(res);
}

function printCombinations(list) {
    let res = [];
    let n = list.length;
    console.log(n);

    for (let i = 0; i < 1 << n; i++) {
        let comb = Array(list.length).fill(null);
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) > 0) {
                comb[j] = list[j];
            }
        }
        res.push(comb.filter(c => c));
    }
    console.log(res);
}

printPermutations([1, 2, 3, 4]);
printCombinations([1, 2, 3, 4]);
