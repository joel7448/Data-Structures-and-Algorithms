//Selection sort
let arr = [4,1,7,3,9,10];
for(let i=0;i<arr.length-1;i++){
    let min = i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            min=j;
            
           var temp = arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
        }
          
    }
   
     }
     
console.log(arr);

