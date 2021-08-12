function findRotatedIndex(arr = [], target = 0) {
    return findNum(arr, target)
}

function findNum(arr = [], target = 0, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] === target) return mid
        if (arr[low] === target) return low
        if (arr[high] === target) return high
        else if (arr[low] > target) {
            return findNum(arr, target, mid + 1, high)
        } else return findNum(arr, target, low, high - 1)
    }
    return -1
}

module.exports = findRotatedIndex