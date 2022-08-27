//Bubblesort 
//this is optimized bubblesort

let arr= [5,1,5,6,2,6,7];
for(let i=0;i<arr.length-1;i++){
    let flag = 0;
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j+1]<arr[j]){
            var temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            flag=1;
        }
       
    }
    if(flag==0){
        break;
    }
}
console.log(arr);

//O(n*n)