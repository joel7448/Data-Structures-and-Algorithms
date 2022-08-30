//Using binary search find first and last occurence of an element

function Binarysearch(arr,n,element){
    var l=0;
    var r = n-1;
    var first = -1;
    while(l<=r){
        var mid = l + Math.floor((r-l)/2);
        if(arr[mid]==element){
            first = mid;
            r = mid-1;
            
        }
        else if(arr[mid]>element){
            r = mid-1;
        }
        else if (arr[mid]<element){
            l = mid+1;
        }
    
        
    }
    
    
    var l=0;
    var r = n-1;
    while(l<=r){
        var mid = l + Math.floor((r-l)/2);
        if(arr[mid]==element){
            last = mid;
            l = mid+1;
            
        }
        else if(arr[mid]>element){
            r = mid-1;
        }
        else if (arr[mid]<element){
            l = mid+1;
        }
    
        
    }
    var ans =[first,last];
    return ans.join(" ");
    
    
    }
    let arr = [1,5,5,8,9,10,11];
    console.log(Binarysearch(arr,arr.length,5));