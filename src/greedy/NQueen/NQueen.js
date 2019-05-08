/**
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 *
 * print number of possible ways of placing the queens
 */

function nQueens(n) {
    let res = 0;

    let list = [];

    function place(row, blockedCells, blockedColumns) {
        // console.log(blockedCells, ", ", blockedColumns);
        if (row == n) {
            // console.log({ blockedCells });
            let d = Array(n)
                .fill()
                .map(() => Array(n).fill("."));
            blockedCells.forEach(([x, y]) => {
                d[x][y] = "Q";
            });
            list.push(d.map(di => di.join("")));
            res += 1;
            return;
        }

        for (let i = 0; i < n; i++) {
            let notAllowed = false;
            blockedCells.forEach(([x, y]) => {
                notAllowed = notAllowed || x + y == row + i || x - y == row - i;
                // console.log({ x, y, row, i, n, notAllowed });
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

    // console.log(list);

    // return res

    return list;
}

console.log(nQueens(5));
