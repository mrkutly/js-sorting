function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  } else {
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }
}

function merge(left, right) {
  if (!left || left.length === 0) {
    return right
  } else if (!right || right.length === 0) {
    return left
  } else if (left[0] < right[0]) {
    let first = left.splice(0, 1)
    let newArray = merge(left, right)
    return [...first, ...newArray]
  } else {
    let first = right.splice(0, 1)
    let newArray = merge(left, right)
    return [...first, ...newArray]
  }
}
