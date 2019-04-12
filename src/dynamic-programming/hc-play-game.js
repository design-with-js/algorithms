/**

https://www.hackerrank.com/challenges/play-game/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

*/

/*
 * Complete the bricksGame function below.
 */
const min = (...arr) => {
    var min = Number.MAX_SAFE_INTEGER;
    arr.forEach(a => {
        if (min > a) {
            min = a;
        }
    });
    return min;
};

function bricksGame(arr) {
    /*
     * Write your code here.
     */
    var n = arr.length;
    var A = new Array(n - 1).fill(0);
    var K = new Array(n - 1).fill(0);
    K[n - 1] = arr[n - 1];
    for (var i = n - 2; i >= 0; i--) {
        K[i] = K[i + 1] + arr[i];
    }
    A[n - 1] = arr[n - 1];
    A[n - 2] = arr[n - 2] + arr[n - 1];
    A[n - 3] = arr[n - 3] + arr[n - 2] + arr[n - 1];
    if (n > 3) {
        for (var i = n - 4; i >= 0; i--) {
            A[i] = K[i] - min(A[i + 1], A[i + 2], A[i + 3]);
        }
    }
    console.log(A);
    return A[0];
}
