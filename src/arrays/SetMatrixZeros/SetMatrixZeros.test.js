import { setZeroes } from "./SetMatrixZeros";

it(`checks setMatrixZeroes on 
  [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]\nand output to be
  [
    [0,0,0,0],
    [0,4,5,0],
    [0,3,1,0]
  ]
  `, () => {
  const arr = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
  setZeroes(arr);
  expect(arr).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
});
