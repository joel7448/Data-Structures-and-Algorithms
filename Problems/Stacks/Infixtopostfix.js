// 1) Infix to postfix using stacks 

let infix_expression = "a+b*(c^d-e)^(f+g*h)-i";

function precedence(operator){ //Operator precedence calculator

    if(operator == "^"){
        return 3;
    }
    else if(operator=="*" || operator=="/"){
        return 2;
    }
    else if(operator=="+"||operator=="-"){
        return 1;
    }
    else{
        return -1;
    }
}

function infixtopostfix(str){
    let stack=[];
    let result="";
    
    for(i=0;i<str.length;i++){
        
        
        if((str[i]>="a"&&str[i]<="z")||(str[i]>="A"&&str[i]<="Z")|| (str[i] >= '0' && str[i] <= '9')){
            result+=str[i];
        }
        
        else if(str[i]=="("){   //highest precedence for "("
            stack.push(str[i]);
            
        }
        else if(str[i]==")"){  //pops until "(" is found
            while(stack[stack.length-1]!="("){
                result += stack.pop();
            }
            stack.pop();
        }
        
        else  //finds precedence and arranges accordingly
        {
        while(stack.length!=0 && precedence(str[i])<=precedence(stack[stack.length-1])){
            result += stack.pop();
        }
        stack.push(str[i]);
    }
    }
    while(stack.length!=0){   //pops remaining 
        result+=stack.pop();
    }
    return result;
 
}

console.log(infixtopostfix(infix_expression));