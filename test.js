// var removeDuplicates = function(nums) {
//     let array=[];
//     nums.forEach(element=>{
//         if(!(array.includes(element))){
//             array.push(element);
//         }
        
//     })
//     return array.length;
// };

// var removeDuplicates = function(nums) {
//     let single_number=nums.length;
    
//     for(i=0;i<nums.length;i++){        
//         for(j=i+1;j<nums.length;j++){
//             if(nums[i]==nums[j]){
//                 single_number--;
//             }
            
//         }
//     }
//     return single_number;
// };


// 非常 反智
var removeDuplicates = function(nums) {
     if(nums.length==0){return 0;}
	let i = 0;

	for(let j=1; j < nums.length; j++){
		if(nums[i] !== nums[j]){
            //如果下一个不等于第一个就加一，然后把不等于的第一个变成下一个。
			i++;
			nums[i] = nums[j];
		}
    }
    console.log(nums);   //[ 1, 2, 2 ]
	return i+1;
};

nums = [1,1,2];
console.log(removeDuplicates(nums));

