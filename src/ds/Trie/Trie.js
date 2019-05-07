let LOWER = "abcdefghijklmnopqrstuvwxyz";

let lower = {};

for (ch of LOWER) {
  lower[ch] = true;
}

class Trie {
  /**
   * Trie data structure to store word dictionary
   * Trie class has 3 methods add, search and autoSuggest
   */
  constructor() {
    this.head = {};
  }

  /**
   * Add a word to the dictionary: O(W); W is the length of word
   * @param {[type]} word [description]
   */
  add(word) {
    let curr = this.head;

    for (let char of word) {
      if (!curr[char]) curr[char] = {};
      curr = curr[char];
    }
    curr["*"] = true;
  }

  /**
   * Searches for a word in the dictionary
   * @param  {string!} given word
   * @return {boolean}
   */
  search(word) {
    let curr = this.head;

    for (let char of word) {
      if (!curr[char]) return false;
      curr = curr[char];
    }
    return !!curr["*"];
  }

  /**
   * autosuggest <= k number of words matching the given word
   * @param  {string!} word given word
   * @param {number} k word limit for suggestion
   * @return {string[]}      array of words from the dict that matches the given word, array size less than k
   */
  autoSuggest(word, k) {
    let words = [];
    let curr = this.head;

    for (let char of word) {
      if (!curr[char]) {
        return [];
      }
      curr = curr[char];
    }

    function makeWords(curr, str) {
      if (words.length == k) {
        return;
      }
      if (curr["*"]) {
        words.push(str);
      }

      for (let char in curr) {
        if (lower[char]) makeWords(curr[char], str + char);
      }
    }

    makeWords(curr, word);

    return words;
  }

  /**
   * Modifies the Trie data structure to store like words on a Trie node
   * For example in a Trie: {"head":{"h":{"i":{"*":true},"e":{"l":{"l":{"o":{"*":true}}},"y":{"*":true}}}}}
   * like words at h are hello, hi, hey
   * like words at he are hello and hey
   * Note: function returns nothing, it modifies the original trie and store like words at every node
   * @param {string} [str=""] string formed so far
   * @param  {number} k word limit
   */
  buildSuggestions(curr = this.head, str = "") {
    console.log({ curr, str });
    curr.suggest = [];
    if (curr["*"]) {
      curr.suggest = curr.suggest.concat(str);
    }
    for (let char in curr) {
      let temp = [];
      if (lower[char]) {
        curr.suggest = curr.suggest.concat(
          this.buildSuggestions(curr[char], str + char)
        );
      }
    }
    return curr.suggest;
  }

  autoDP(word, k) {
    let curr = this.head;
    for (let char of word) {
      if (!curr[char]) {
        return [];
      }
      curr = curr[char];
    }
    return curr.suggest.slice(0, k);
  }

  sort() {
    let words = [];
    function lexiographic(curr, str) {
      if (curr["*"]) {
        words.push(str);
      }
      for (let ch of LOWER) {
        if (curr[ch]) {
          lexiographic(curr[ch], str + ch);
        }
      }
    }
    lexiographic(this.head, "");
    return words;
  }
}

let dict = new Trie();

dict.add("hey");
dict.add("hi");
dict.add("hello");
dict.add("has");
dict.add("his");
dict.add("hat");
dict.add("help");

console.log(dict.search("hi"));
console.log(dict.search("hello"));
console.log(dict.search("hel"));
console.log(dict.autoSuggest("", 2));
dict.buildSuggestions();
console.log(dict.autoDP("", 2));
// console.log(JSON.stringify(dict));
//
//
let benchmark = require("../../../benchmark");

console.log(
  benchmark(1000, dict.autoSuggest, dict, "", 3) -
    benchmark(1000, dict.autoDP, dict, "", 3)
);

[
  "Porphyrin",
  "joinery",
  "listener",
  "ina",
  "nonparishioner",
  "genouillre",
  "outmerchant",
  "copiap",
  "turina",
  "haskalah",
  "predesert",
  "brassie",
  "noninformational",
  "albuminuric",
  "Vallation",
  "melchior",
  "lovably",
  "hexahydrate",
  "agonal",
  "romanus",
  "subgovernor",
  "regle",
  "intermigrated",
  "victoriano",
  "preinterpretation",
  "dallier",
  "gonglike",
  "beethoven",
  "Tuareg",
  "histomorphological",
  "shyest",
  "satanically",
  "lucky",
  "labelled",
  "steepleless",
  "overintellectualized",
  "kindertotenlieder",
  "suffragist",
  "postprandial",
  "distressfully",
  "merwin",
  "zoï¿¥ï¾¡grafting",
  "Ewer",
  "nonpertinent",
  "brinksmanship",
  "somber",
  "muddleheaded",
  "menderes",
  "diores",
  "cozy",
  "retabulate",
  "give",
  "intergossiping",
  "pachuco",
  "madwowomen",
  "ratskeller",
  "Cerography",
  "sluiceway",
  "chivalric",
  "unhypothecated",
  "superaffiliation",
  "glucagon",
  "immoderately",
  "irelander",
  "numerical",
  "thymoetes",
  "reemigrating",
  "brooklet",
  "exemplarism",
  "sprout"
].forEach(w => dict.add(w));

console.log(dict.sort());

module.exports = Trie;
