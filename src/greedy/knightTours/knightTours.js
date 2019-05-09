/**
 * Print all Possible Knight’s Tours in a chessboard

    Given a chess board, print all sequences of moves of a knight on a chessboard such that the knight visits every square only once.

    For example, for standard 8 × 8 chessboard below is one such tour. We have started the tour from top-leftmost of the board (marked as 1) and consecutive moves of the knight are represented by the next number.

    1 50 45 62 31 18  9 64
    46 61 32 49 10 63 30 17
    51 2 47 44 33 28 19  8
    60 35 42 27 48 11 16 29
    41 52  3 34 43 24  7 20
    36 59 38 55 26 21 12 15
    53 40 57  4 23 14 25  6
    58 37 54 39 56  5 22 13
 */

function knightTours(n) {
    let list = [];

    let c = 0;

    function tours(grid, count, x, y) {
        if (count == n * n) {
            console.log(c++);
            // list.push(grid);
            return;
        }

        // console.log(grid, count);

        // 8 cases:
        ng = grid;
        // let ng = grid.map(g => g.slice());

        // console.log({ ng });

        if (x + 2 < n && y + 1 < n && !ng[x + 2][y + 1]) {
            ng[x + 2][y + 1] = count + 1;
            tours(ng, count + 1, x + 2, y + 1);
            ng[x + 2][y + 1] = 0;
        }

        if (x + 2 < n && y - 1 >= 0 && !ng[x + 2][y - 1]) {
            ng[x + 2][y - 1] = count + 1;
            tours(ng, count + 1, x + 2, y - 1);
            ng[x + 2][y - 1] = 0;
        }

        if (x + 1 < n && y + 2 < n && !ng[x + 1][y + 2]) {
            ng[x + 1][y + 2] = count + 1;
            tours(ng, count + 1, x + 1, y + 2);
            ng[x + 1][y + 2] = 0;
        }

        if (x + 1 < n && y - 2 >= 0 && !ng[x + 1][y - 2]) {
            ng[x + 1][y - 2] = count + 1;
            tours(ng, count + 1, x + 1, y - 2);
            ng[x + 1][y - 2] = 0;
        }

        if (x - 1 >= 0 && y + 2 < n && !ng[x - 1][y + 2]) {
            ng[x - 1][y + 2] = count + 1;
            tours(ng, count + 1, x - 1, y + 2);
            ng[x - 1][y + 2] = 0;
        }

        if (x - 1 >= 0 && y - 2 >= 0 && !ng[x - 1][y - 2]) {
            ng[x - 1][y - 2] = count + 1;
            tours(ng, count + 1, x - 1, y - 2);
            ng[x - 1][y - 2] = 0;
        }

        if (x - 2 >= 0 && y + 1 < n && !ng[x - 2][y + 1]) {
            ng[x - 2][y + 1] = count + 1;
            tours(ng, count + 1, x - 2, y + 1);
            ng[x - 2][y + 1] = 0;
        }

        if (x - 2 >= 0 && y - 1 >= 0 && !ng[x - 2][y - 1]) {
            ng[x - 2][y - 1] = count + 1;
            tours(ng, count + 1, x - 2, y - 1);
            ng[x - 2][y - 1] = 0;
        }
    }

    let grid = Array(n)
        .fill()
        .map(() => Array(n).fill(0));

    grid[0][0] = 1;

    tours(grid, 1, 0, 0);

    // console.log({ list });
    // console.log(list[0]);
}

knightTours(6);
