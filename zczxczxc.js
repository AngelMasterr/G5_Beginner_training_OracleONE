function twoSums(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {        
        let remaing = target - nums[i];
        if (nums.slice(i+1).includes(remaing)) {
            return [i, nums.indexOf(remaing)];
        }  
    }
}
const nums = [2, 7, 11, 13, 5, 15, 25];
const target = 26;
console.log(twoSums(nums, target));
