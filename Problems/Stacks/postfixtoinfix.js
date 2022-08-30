function isOperand (exp){
    return (exp>='a' && exp<='z') || (exp>='A' && exp<='Z')
}

function postfixtoinfix(str){
let stack=[];

for(let i=0;i<str.length;i++){
    if(isOperand(str[i])){
         stack.push(str[i]+""); // alphabets are pushed directly into stack 
    }
    else{
        let op1 = stack.pop();
        let op2 = stack.pop();
       
        stack.push("("+op2+str[i]+op1+")");
    }
}



return stack[stack.length-1];

}

let exp = "ab*c+";
console.log(postfixtoinfix(exp));