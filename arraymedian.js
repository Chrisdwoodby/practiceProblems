var findMedianSortedArrays = function(nums1, nums2) {
  // concat the two arrays
  var concated = nums1.concat(nums2);
  concated = concated.sort();
  var median = (concated.length + 1) / 2;
  // sort the arrays
  if (concated.length % 2 !== 0) {
    median = Math.floor(median)
    console.log(median)
    return concated[median];
  } else {
    // use math.floor for varible low
    console.log(median)
    var high = Math.ceil(median)
    console.log(high)
    // use math.ceil for varible high
    var low = Math.floor(median)
    console.log(low)
    // add low and high together and divide my 2
    var result = (high + low) / 2
    // return
    return result;
  }
};

// console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 2], [3]))
