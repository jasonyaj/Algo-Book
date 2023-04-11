function twoSums(nums, target) {
  var twoSum = function(nums, target) {
    var output = []
    for ( var i = 0; i < nums.length; i++ ){
      let num1 = nums[i];
      for ( var j = i+1; j < nums.length - i; j++ ) {
        let tempsum = num1 + nums[j];
        if ( tempsum == target ) {
          output.push(i)
          output.push(j)
          return output
        }else
        continue
      }
    }
  }
};

// nums =[2,7,11,15]
// target = 9
nums =[3,2,4]
target = 6
// nums =[3,3]
// target = 6
console.log(twoSums(nums, target));
