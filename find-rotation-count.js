function findRotationCount(arr = [], low = 0, high = arr.length - 1) {
    if (high < low) return 0
    if (high === low) return low
    let mid = Math.floor((high + low) / 2)
    // if our mid index is still lower than our high
    // and the next index after our midpoint
    // is LESS than our midpoint
    // we know that is our first rotated index
    // and the index number should represent how many 'rotations' there have been, so return that
    if (mid < high && arr[mid + 1] < arr[mid]) {
        return mid + 1
    }

    // check if mid is minimum element
    if (mid > low && arr[mid] < arr[mid - 1]) {
        return mid
    }

    if (arr[high] > arr[mid]) {
        return findRotationCount(arr, low, mid - 1)
    }
    return findRotationCount(arr, mid + 1, high)
}

module.exports = findRotationCount