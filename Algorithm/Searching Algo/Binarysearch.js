let arr=[1,3,5,6,47,66,89,90];

function Binarysearch(arr,n,data){
    var l=0;
    var r = n-1;
    
    while(l<r){
        let mid = l+Math.floor((r-l)/2);
        if(data==arr[mid]){
            return mid;
        }
        else if(data<arr[mid]){
            r=mid-1;
        }
        else {
            l=mid+1;
        }
        
    }
    return -1;
 
}
console.log(Binarysearch(arr,arr.length,66)); //returns 6 ,since 66 is present in 6th index position