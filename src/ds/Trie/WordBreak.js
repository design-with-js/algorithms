const Trie = require("./Trie");

console.log("============================");

function wordBreak(str, dict) {
    let trie = new Trie();
    dict.forEach(word => {
        trie.add(word);
    });

    return search(str, trie.head, trie.head);
}

function search(str, head, curr) {
    // console.log({ str, branch });

    let i = 0;

    if (!str) {
        return true;
    }

    for (let ch of str) {
        // console.log({ ch, curr }, str.slice(i + 1));

        if (!curr[ch]) {
            return false;
        }

        curr = curr[ch];

        if (curr["*"]) {
            return (
                search(str.slice(i + 1), head, curr) ||
                search(str.slice(i + 1), head, head)
            );
        }

        i++;
    }
    return false;
}

console.log(wordBreak("catsanddog", ["cat", "cats", "sand", "dogs"]));

console.log(wordBreak("samsung", ["sam", "sung"]));

// console.log(
//     wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaab", [
//         "a",
//         "aa",
//         "aaa",
//         "aaaa",
//         "aaaaa",
//         "aaaaaa",
//         "aaaaaaa",
//         "aaaaaaaa",
//         "aaaaaaaaa",
//         "aaaaaaaaaa"
//     ])
// );
