class Node{
    constructor(e){
        this.data = e;
        this.next = null;
        this.prev = null;
    }
}


class Dlinkedlist {
    constructor(){
        this.head = null;
        this.last = null;
        this.size = 0;

    }

    addatend(e){
        var node = new Node(e);
        if(this.head==null && this.last==null){
             this.head = node;
             this.last = node;
        }
        else{
            this.last.next = node;
            node.prev = this.last;
            this.last=node;
        }
        this.size++;
    }
    addatbegining(e){
        var node = new Node(e);
        if(this.head==null && this.last==null){
            this.addatend(e);
        }
        else {
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
        this.size++;
    }
    display(){
        var current = this.head;
        var str="";
       while(current){
           str+=current.data+" ";
           current = current.next;
       }
        console.log(str);
        
    }
    displayreverse(){
        var current = this.last;
        var str="";
        while(current){
           str+=current.data+" ";
           current = current.prev;
        }
        console.log(str);
    }
    insertelement(index,element){
        var node =new Node(element);
        var current = this.head;
        if(index<this.size-1 && index>0){
          
       while(--index){
           current = current.next;
       }
         node.next = current.next;
       current.next.prev = node;
        current.next=node;
       node.prev=current;
       
       
        }
        else if(index==0){
            this.addatbegining(element);
        }
        else if(index==this.size-1){
            this.addatend(element);
        }
        else{
            console.log("invalid position");
        }
        this.size++;
        
        }
        deleteatend(){
            var current=this.head;
            if(this.head===null){
            this.head = null;
            this.last = null;
            }
            else{
                while(current.next.next){
                    current=current.next;
                }
                current.next=null;
                this.last=current;
            }
            this.size--;
                
            }
            
            deleteatbegining(){
                if(this.head===null){
                    this.deleteatend()
                }
                else{
                    this.head= this.head.next;
                    this.head.prev=null;
                    
                }
                this.size--;
               
            }
            deleteatindex(index){
               
               
                if(index>0 &&  index<this.size-1){
                 var current =this.head;
                while(index){
                    current = current.next;
                    index--;
                }
             current.prev.next = current.next;
             current.next.prev = current.prev;
                }
                else if(index==0){
                    this.deleteatbegining();
                }
                else if(index==this.size-1){
                this.deleteatend();
                }
                else{
                    console.log("invalid position");
                }
                this.size--;
            }
            displaylength(){
                console.log(this.size);
            }
    }
    
    
    


var dll=new Dlinkedlist();
dll.addatend(10);
dll.addatend(1000);
dll.display();

dll.display();
dll.addatend(50);
dll.addatbegining(90);
dll.insertelement(1,400);
dll.display();

dll.displayreverse();
dll.deleteatindex(4)
dll.display();
    