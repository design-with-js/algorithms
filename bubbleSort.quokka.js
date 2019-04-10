const swap = (a,b) => {
    
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j< arr.length; j++) {
            if(arr[i] > arr[j]) swap(arr[i], arr[j])
        }
    }i
}