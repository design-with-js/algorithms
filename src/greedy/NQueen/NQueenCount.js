/**
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 *
 * print number of possible ways of placing the queens
 */

function nQueens(n) {
    let res = 0;

    function place(row, blockedCells, blockedColumns) {
        if (row == n) {
            res += 1;
            return;
        }

        for (let i = 0; i < n; i++) {
            let notAllowed = false;
            blockedCells.forEach(([x, y]) => {
                notAllowed = notAllowed || x + y == row + i || x - y == row - i;
            });

            notAllowed = notAllowed || blockedColumns.indexOf(i) > -1;

            if (notAllowed) {
                continue;
            } else {
                place(
                    row + 1,
                    blockedCells.concat([[row, i]]),
                    blockedColumns.concat([i])
                );
            }
        }
    }

    place(0, [], []);

    return res;
}

console.log(nQueens(5));
