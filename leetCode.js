/*
two sum:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/



//我的解法: 在一个array里面找。逻辑比较难懂。

let twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++){
        let next=target-nums[i];
        if(nums.slice(i+1,nums.length).includes(next)){
            //nums.indexOf("s",1) 从index1开始找s ，包含index1.
            return [nums.indexOf(nums[i]),nums.indexOf(next,i+1)];
        }
    }
};

nums=[3,3];
target=6;
console.log(twoSum(nums,target));


//别人的写法:一个object加， 一个数组减。根据let next=target-nums[i] 将数组跟object联系在一起。
// 把查看过的结果放进一个object。将两个数据前后分离。

let twoSum=function(nums,target){
    let map={};
    for(i=0;i<nums.length;i++){
        let diff=target-nums[i];
        if(map.hasOwnProperty(diff)){
            return [map[diff],i];
        }
        map[nums[i]]=i;
    }
    return null;
}


nums=[3,3];
target=6;
console.log(twoSum(nums,target));