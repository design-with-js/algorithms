import { wiggleMaxLength } from "./LongestWiggleSequence";

it(`Should test wiggleMaxLength
  input: [1,17,5,10,13,15,10,5,16,8]
  output: [1,17,10,13,10,16,8]'s length => 7`, () => {
  expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toBe(7);
});
