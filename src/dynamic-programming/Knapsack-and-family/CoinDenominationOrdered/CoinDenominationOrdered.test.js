import { orderedWays } from "./CoinDenominationOrdered";

test(`Testing Ordered CoinDenomination on 
  input: [1,2,3], 4, 
  it should output: 7`, () => {
  expect(orderedWays([1, 2, 3], 4)).toBe(7);
});
