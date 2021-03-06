'use strict';

function DoublyLinkedList(){
    let Node=function(element){
        this.element=element;
        this.next=null;
        this.prev=null;
    }
    let length=0;
    let head=null;
    let tail=null;

    this.append=function(element){};

    this.insert=function(position, element){
        //check for out-of-bounds values
        if(position>=0 && position<=length){
            let node=new Node(element),
            current=head,
            previous,
            index=0;

            if(position===0){//add on first position
                if(!head){
                    head=node;
                    tail=node;
                }
                else{
                    node.next=current;
                    current.prev=node;
                    head=node;
                }
            }
            else if(position===length){//last item
                current=tail;
                current.next=node;
                node.prev=current;
                tail=node;
            }
            else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;

                current.prev=node;
                node.prev=previous;
            }
            length++;
            return true;
        }else{
            return false;
        }
        
    };

    this.removeAt=function(position){
        //look for out - of - bounds values
        if(position>-1 && position<length){
            let current=head,
            previous,
            index=0;

            //removing first item
            if(position===0){
                head=current.next;

                //if there is only on item, update tail
                if(length===1){
                    tail=null;
                }else{
                    head.prev=null;
                }
            }else if(position===length-1){
                current=tail;
                tail=current.prev;
                tail.next=null;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;    
                }
                previous.next=current.next;
                current.next.prev=previous;

            }
            length--;
            return current.element;
        }else{
            return null;
        }
    };
    this.remove=function(element){};

    this.indexOf=function(element){};
    /**
     * This returns true if the linked list does not contain 
     * any elements and false if the size of the linked list is bigger 
     * than 0.
     */
    this.isEmpty=function(){};
    /**
     * This returns the number of elements the linked list contains. It is similar
     * to the length property of the array.
     */
    this.size=function(){};

    this.toString=function(){};
    this.inverseToString=function(){};
    this.print=function(){};
    this.printInverse=function(){};
    this.getHead=function(){
        return head;
    };

    this.getTail=function(){
        return tail;
    };
}
