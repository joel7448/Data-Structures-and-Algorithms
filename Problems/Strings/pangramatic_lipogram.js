function pangramatic_lipogram(str){

    var table = new Array(26);
table.fill(true);
    for(let i=0;i<26;i++){
        if("A".charCodeAt()<=str[i].charCodeAt() && "Z".charCodeAt()>=str[i].charCodeAt()){
table[str[i].charCodeAt()-"A".charCodeAt()] = true;
        }
        else if("a".charCodeAt()<=str[i].charCodeAt() && "z".charCodeAt()>=str[i].charCodeAt()){
            table[str[i].charCodeAt()-"a".charCodeAt()] = true;
        }

    }

let i=0;
while(i<26){
    if(table[i]==false){
        count++;
    }

}
if(count==1){
    console.log("yes,given sentence is pangramatic_lipogram");
}
else if(count>1){
    console.log("It is neither a pangram nor a lipogram");
}
else{
    console.log("Giver sentence is a pangram, but not lipogram");
}

}