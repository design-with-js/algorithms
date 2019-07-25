// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
//
// The replacement must be in-place and use only constant extra memory.
//
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
//
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1
//

function partition(nums, l, r) {
    let key = nums[Math.floor((l + r) / 2)];

    let i = l,
        j = r;

    while (i <= j) {
        while (nums[i] < key) {
            i++;
        }
        while (nums[j] > key) {
            j--;
        }

        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(nums, l, r) {
    if (l >= r) {
        return;
    }
    let pivot = partition(nums, l, r);
    quickSort(nums, l, pivot - 1);
    quickSort(nums, pivot, r);
}

function nextPermutation(nums) {
    let n = nums.length;
    let i;

    for (i = n - 1; i > 0; i--) {
        if (nums[i - 1] > nums[i]) {
            break;
        }
    }

    quickSort(nums, i, n - 1);

    if (i > 0) {
        let j;
        for (j = i; j < n; j++) {
            if (nums[j] > nums[i - 1]) {
                break;
            }
        }
        [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
    }
}

let a = [
    100,
    99,
    98,
    97,
    96,
    95,
    94,
    93,
    92,
    91,
    90,
    89,
    88,
    87,
    86,
    85,
    84,
    83,
    82,
    81,
    80,
    79,
    78,
    77,
    76,
    75,
    74,
    73,
    72,
    71,
    70,
    69,
    68,
    67,
    66,
    65,
    64,
    63,
    62,
    61,
    60,
    59,
    58,
    57,
    56,
    55,
    54,
    53,
    52,
    51,
    50,
    49,
    48,
    47,
    46,
    45,
    44,
    43,
    42,
    41,
    40,
    39,
    38,
    37,
    36,
    35,
    34,
    33,
    32,
    31,
    30,
    29,
    28,
    27,
    26,
    25,
    24,
    23,
    22,
    21,
    20,
    19,
    18,
    17,
    16,
    15,
    14,
    13,
    12,
    11,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
];

quickSort(a, 0, 99);
console.log({ a });
