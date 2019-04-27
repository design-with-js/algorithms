import { ways } from "./CoinDenomination";

test(`Testing CoinDenomination on 
  input: [1,2,3], 4, 
  it should output: 4`, () => {
  expect(ways([1, 2, 3], 4)).toBe(4);
});
