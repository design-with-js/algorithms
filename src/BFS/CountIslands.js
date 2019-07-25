function CountIslands(matrix) {
    if (matrix.length == 0) return 0;
    let visited = Array(matrix.length)
        .fill()
        .map(() => Array(matrix[0].length).fill(false));

    let count = 0;

    function bfs(queue, x, y) {
        if (
            x >= 0 &&
            y >= 0 &&
            x < matrix.length &&
            y < matrix[0].length &&
            matrix[x][y] == 1 &&
            !visited[x][y]
        ) {
            queue.push([x, y]);
            visited[x][y] = true;
        }
    }

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            if (matrix[i][j] == 1 && !visited[i][j]) {
                ++count;
                let queue = [[i, j]];
                while (queue.length != 0) {
                    let [x, y] = queue[0];
                    queue = queue.slice(1);
                    bfs(queue, x + 1, y);
                    bfs(queue, x, y + 1);
                    bfs(queue, x - 1, y);
                    bfs(queue, x, y - 1);
                }
            }
            visited[i][j] = true;
        }
    }
    return count;
}

console.log(CountIslands([[1, 0, 0], [1, 0, 0], [1, 0, 1]]));
console.log(CountIslands([[]]));
