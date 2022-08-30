//Reversal rotation algorithm

function swap(arr,lb,ub){
    while(lb<ub){
        var temp = arr[ub];
        arr[ub]=arr[lb];
        arr[lb]=temp;
        ub--;
        lb++;
         
    }
    
   
    
}

function rotation(arr,d,n){
     if (d == 0) return;
        
        d = d % n;
    
        swap(arr,0,d-1);
        swap(arr,d,n-1);
        swap(arr,0,n-1);
       
return arr;
        
    
}
var arr = [1,2,3,4,5,6,7]
console.log(rotation(arr,5,arr.length))