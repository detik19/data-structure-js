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
            
        }
    };
    
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
    /**
     * As the list uses a Node class as an item, we need to overwrite the
     * default toString method inherited from the JavaScript object to output only the
     * element values.
     */
}
