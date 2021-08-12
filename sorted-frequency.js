function sortedFrequency(arr = [], target = 0) {
    let firstIdx = getFirstTarget(arr, target)
    if (firstIdx === -1) return firstIdx
    let lastIdx = getLastTarget(arr, target)
    return lastIdx - firstIdx + 1
}

function getFirstTarget(arr = [], target, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
            return mid
        } else if (target > arr[mid]) {
            return getFirstTarget(arr, target, mid + 1, high)
        } else return getFirstTarget(arr, target, low, mid - 1)
    }
    return -1
}

function getLastTarget(arr = [], target, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2) 
        if ((mid === arr.length - 1 || target < arr[mid + 1]) && arr[mid] === target) {
            return mid
        } else if (target < arr[mid]) {
            return getLastTarget(arr, target, low, mid - 1)
        } else {
            return getLastTarget(arr, target, mid + 1, high)
        }
    }
}

// should be able to get first index of target + 1,
// and index of first occurce of target
// and subtract that from s

module.exports = sortedFrequency