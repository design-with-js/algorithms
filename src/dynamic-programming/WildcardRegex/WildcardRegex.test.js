import { isMatch } from "./WildcardRegex";

describe("Checks wildcard problem https://leetcode.com/problems/wildcard-matching", () => {
  let cases = [
    { s: "acdcb", p: "a*c?b", o: false },
    { s: "adceb", p: "*a*b", o: true },
    { s: "cb", p: "?a", o: false },
    { s: "aa", p: "*", o: true },
    { s: "aa", p: "a", o: false }
  ];

  cases.forEach(({ s, p, o }) => {
    it(`testing against s: ${s} and p: ${p}, output should be: ${o}`, () => {
      expect(isMatch(s, p)).toBe(o);
    });
  });
});
