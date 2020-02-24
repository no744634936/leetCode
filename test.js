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