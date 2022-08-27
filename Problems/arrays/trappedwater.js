// Given an array arr[] of N non-negative integers representing the height of blocks.
//  If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

//Input:
// N = 6
// arr[] = {3,0,0,2,0,4}
// Output:
// 10

//consider every element as height of a block

trappingWater(arr, n)
{
    var min_block;
    var flag = 0;

    for(var k=1;k<arr.length-1;k++){
        if(arr[k]<arr[0] || arr[k]<arr.length-1){
            flag=1;
            break;
        }
        else{
            flag=0;
        }
    }
    
    if(flag=1){
    if(arr[0]<arr[arr.length-1]){
        min_block = arr[0];
    }
    else {
        min_block = arr[arr.length-1];
    }
    var container=0;
    
    if(min_block == arr[0]){
        for(let i=1;i<arr.length-1;i++){
            container += min_block-arr[i];
          
           
        }
        
                    }
        else{
            for(let i=arr.length-2 ; i>0;--i){
                container +=min_block-arr[i];
            }
    }
    }
    return container
    
}