//Linked lists 
class Node{
    constructor(e)
{
    this.data = e;
    this.next = null;
}
    
}

class Linkedlists{
    constructor()
{
    this.head=null;
    this.last=null;
    this.siz0=0;
}

addelementsatbegining(e){
    var node = new Node(e);
  
    if(this.head==null && this.last==null){
        
        this.head = node;
        this.last=node;
    }
    else{
      node.next = this.head;
       this.head =node;
        
    }
    this.size++;
}

display(){
    var current = this.head;
    var str="";
    while(current){
        str+=current.data+" ";
        current = current.next
    }
    console.log(str);
    
    
}
addatend(e){
    var node = new Node(e);
    if(this.head==null && this.last==null){
        this.head = node;
        this.last=node;
    }
    else{
        this.last.next=node;
        this.last=node;
    }
    this.size++;
}

pop(){
    if(this.head){
    if(this.head==this.last){
        this.head=null;
        this.last=null
    }
    else{
        var current =this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next=null;
        this.last=current;
    }
    }
    
    else{
        console.log("no elements to pop");
    }
    this.size--;
}

deleteatbegining(){
    if(this.head==this.last){
        this.pop();
    }
    else{
       
        this.head = this.head.next;
        
        
        
    }
}
deleteatindex(i){
    if(i>0 && i<this.size-1){
    if(this.head==this.last){
        pop();
    }
    else{
        var current = this.head;
        while(--i){
            current = current.next;
            
        }
     current.next=current.next.next;
    }
    }
    else if(i==0){
        this.head = this.head.next;
    }
}
    insertelement(i,e){
        var node =new Node(e);
        if(i>0 && i<this.size){
        if(this.head==this.last){
            this.addelementsatbegining(e);
        }
        else{
            var current = this.head;
            while(--i){
                current = current.next; 
            }
            node.next = current.next;
            current.next = node;
        }
        }
        else if(this.size==0){
            addelementsatbegining(e);
        }
    }
}

var ll=new Linkedlists();
ll.addelementsatbegining(10);
ll.addelementsatbegining(90);
ll.display();
ll.addatend(50);
ll.addatend(100);
ll.deleteatbegining();
ll.deleteatindex(0);
ll.insertelement(1,500);
ll.display()