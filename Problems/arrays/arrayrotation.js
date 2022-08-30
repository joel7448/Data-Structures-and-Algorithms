function array_rotation(arr,n,d){
    var temp = new Array(d);
let k=0;
    for(let i=d;i<n;i++){
        temp[k]=arr[i];
        k++;
    }

    for(let i=0;i<d;i++){
        temp[k]=arr[i];
        k++;
    }

    for(let i=0;i<n;i++){
       arr[i]=temp[i];

    }
    return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
let d=2;
console.log(array_rotation(arr,arr.length,d));