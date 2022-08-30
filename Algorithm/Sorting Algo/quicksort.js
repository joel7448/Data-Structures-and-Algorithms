var arr=[5,1,33,26,22,57,90,10];

function partition(a,lb,ub){
    let pivot =a[lb];
    start=lb;
    end=ub;
    while(start<end){
        while(a[start]<=pivot){
            start++;
        }
        while(a[end]>pivot){
            end--;
        }
        if(start<end){
            var temp = a[start];
            a[start]=a[end];
            a[end]=temp;
        }
    }
    temp = a[lb];
    a[lb] = a[end];
    a[end]=temp;
    return end;
}

function quicksort(a,lb,ub){
    if(lb<ub){
        let loc = partition(a,lb,ub);
        quicksort(a,lb,loc-1);
        quicksort(a,loc+1,ub);
        return arr;
    }
}

console.log(quicksort(arr,0,arr.length-1));