const Trie = require("./Trie");

console.log("============================");

function wordBreak(str, dict) {
    let trie = new Trie();
    dict.forEach(word => {
        trie.add(word);
    });

    return Break(str, trie);
}

function Break(str, trie) {
    if (str == "") {
        return true;
    }
    for (let i = 0; i < str.length; i++) {
        if (
            trie.search(str.substring(0, i + 1)) &&
            Break(str.slice(i + 1), trie)
        ) {
            return true;
        }
    }
    return false;
}

console.log(
    wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", [
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
    ])
);
