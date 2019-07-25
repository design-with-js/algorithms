function binaryGap(N) {
    let arr = [];
    while (N) {
        arr.push(N % 2);
        N = Math.floor(N / 2);
    }

    arr = arr.reverse();

    console.log({ arr });

    let count = 0, maxCount = 0;

    for(let i=0; j=0; i < arr.length, j < arr.length; ) {
        if(arr[j] == 1) {
            i = j;
            i++;
            j++;
            maxCount = maxCount < count ? count : maxCount;
        }else {
            j++;
            count++;
        }
    }
}

binaryGap(9);
binaryGap(10);
binaryGap(11);
binaryGap(12);
binaryGap(13);
