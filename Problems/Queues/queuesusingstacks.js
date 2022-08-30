//Implementation of queues using stacks

class Queues{
    constructor(){
        this.stack1=[];
        this.stack2=[];
    }

    enqueue(element){
        while(this.stack1.length!=0){
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(element);
        while(this.stack2.length!=0){
            this.stack1.push(this.stack2.pop());
        }
    }

    dequeue(){
if(this.stack1.length==0){
    console.log("stack underflow");
}
else{

        let element =this.stack1.pop();
        console.log(element);
}
    }
}

var q = new Queues();
q.enqueue(10);
q.enqueue(15);
q.enqueue(20);
q.dequeue();
