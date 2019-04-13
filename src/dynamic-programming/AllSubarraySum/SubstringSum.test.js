import { substrings } from "./SubstringSum";

it(`should test SubstringSum:
    str: "16"
    out should be: 1 + 6 + 16 = 23
  `, () => {
  expect(substrings("16")).toBe(23);
});
