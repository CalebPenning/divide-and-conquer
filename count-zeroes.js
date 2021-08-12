function countZeroes(arr = []) {
    let firstZero = getFirstZero(arr)
    if (firstZero === -1) return 0
    else return arr.length - firstZero
}

function getFirstZero(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            // if our midpoint is 0
            // or the spot right behind the midpoint is 1 (either one)
            // AND the middle value is 0:
            return mid
        } else if (arr[mid] === 1) {
            // otherwise, recursively call the func again
            // set our low to the midpoint set one index higher and compare
            return getFirstZero(arr, mid + 1, high)
        }
        // otherwise, we move our high to be our midpoint,
        // but down an index with a recursive call
        return getFirstZero(arr, low, mid - 1 )
    }
    // otherwise, there are no zeroes to be counted, so just return - 1
    return -1
}

console.log(countZeroes([1, 1, 1, 1, 1, 0, 0, 0]))
console.log(countZeroes([1, 0, 0, 0, 0]))

module.exports = countZeroes