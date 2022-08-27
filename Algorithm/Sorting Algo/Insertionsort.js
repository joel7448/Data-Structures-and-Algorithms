// 1) Insertion sort

let arr = [1,5,2,1,76,42,57,21,3542,12];

function Insertionsort(arr,n){
    for(let i=0;i<n;i++){
        let temp=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>temp ){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp;
    }
    return arr;
}
console.log(Insertionsort(arr,arr.length));

//Worst Case Time Complexity : O(n*n)

