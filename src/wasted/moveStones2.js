function getMin(...args) {
    let m = Number.MAX_SAFE_INTEGER,
        i = -1;
    args.forEach((arg, index) => {
        if (arg < m) {
            m = arg;
            i = index;
        }
    });
    return [m, i];
}

function getMax(...args) {
    let m = Number.MIN_SAFE_INTEGER,
        i = -1;
    args.forEach((arg, index) => {
        if (arg > m) {
            m = arg;
            i = index;
        }
    });
    return [m, i];
}

function countMin(stones) {
    let minI, minDist, maxI, maxDist;
    let min = 1000000001,
        max = 0;
    [min, minI] = getMin(...stones);
    [max, maxI] = getMax(...stones);

    let secondMax, secondMaxI, secondMin, secondMinI;
    let sec1, sec1I, sec2, sec2I;
    [sec1, sec1I] = getMin(...stones.slice(0, minI));
    [sec2, sec2I] = getMin(...stones.slice(minI + 1, stones.length));

    if (sec1 == -1) {
        secondMaxI = sec2I;
    }
    if (sec2 == -1) {
        secondMaxI = sec1I;
    }
}
