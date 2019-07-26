function bigestSumOfTwoElements(nums, numd) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < numd - 1; i++) {
        temp_sum += nums[i];
    }
    for (var i = numd - 1; i < nums.length; i++) {
        temp_sum += nums[i];
        if (temp_sum > result) {
            result = temp_sum;
        }
        temp_sum -= nums[i - numd + 1];
    }
    return result;
}

console.log(bigestSumOfTwoElements([1, 2, 3, 14, 5], 2))
