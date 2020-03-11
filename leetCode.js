// given a sorted array A(sorted in ascending order),having N integers,
// find if there exits any pair of elements (A[i],A[j]) such that their sum is equal to XMLDocument



// input:A=[2,3,4,5,6,7,8,9] ,k=10
// output: true

//sorted in ascending order  means fisrt one is minimum element and last is maximum value.
// A=[2,3,4,5,6,7,8,9]
//    ^             ^

const arr=[2,3,4,5,7,8,9];
const k =15;

function findPairs(arr,k){

    //定义两个点 pointer
    let start=0;
    let end=arr.length-1;
    while(start<end){
       if(arr[start]+arr[end]<k){
           start++;
       }else if(arr[start]+arr[end]===k){
           return true;
       }else{
           //当 arr[start]+arr[end]>k 的时候移动end
            end--;
       }
    }
    return false;
}

console.log(findPairs(arr,k));



//找出所有等于11的组合 
const arr=[2,3,4,5,6,7,8,9];
const k =11;

function findPairs(arr,k){

    //定义两个点 pointer
    let start=0;
    let end=arr.length-1;
    let map=[];
    while(start<end){
       if(arr[start]+arr[end]<k){
           start++;
       }else if(arr[start]+arr[end]===k){
           map.push([start,end]);
           start++;
           end--;
       }else{
           //当 arr[start]+arr[end]>k 的时候移动end
            end--;
       }
    }
    return map;
}