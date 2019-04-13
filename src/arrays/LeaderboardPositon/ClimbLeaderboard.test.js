import { climbingLeaderboard } from "./ClimbLeaderboard";

it(`checks ClimbLeadrboard sample testcase:
    score = [100, 100, 50, 40, 40, 20, 10],
    alice = [5, 25, 50, 120]`, () => {
  const scores = [100, 100, 50, 40, 40, 20, 10];
  const alice = [5, 25, 50, 120];
  expect(climbingLeaderboard(scores, alice)).toEqual([6, 4, 2, 1]);
});

it(`checks ClimbLeadrboard sample testcase:
    score = [100, 90, 90, 80, 75, 60],
    alice = [50, 65, 77, 90, 102]`, () => {
  const scores = [100, 90, 90, 80, 75, 60];
  const alice = [50, 65, 77, 90, 102];
  expect(climbingLeaderboard(scores, alice)).toEqual([6, 5, 4, 2, 1]);
});
