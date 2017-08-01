'use strict';

function LinkedList(){
    let Node=function(element){
        this.element=element;
        this.next=null;
    };

    let length=0;
    let head=null;

    /**
     * add new item to end of the list
     */
    this.append=function(element){
        let node=new Node(element);
        let current;
        
        if(head===null){
            head=node;
        }else{
            current=head;
            //loop the list until find last item
            while(current.next){
                current=current.next
            }
            current.next=node;
        }
        length++;
    };
    /**
     * insert a new item at a specified position in the list
     */
    this.insert=function(position,element){
        if(position>=0 && position<=length){ //1
            let node=new Node(element),
            current=head,
            previous,
            index=0;

            if(position===0){
                node.next=current;
                head=node;

            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                //the current variable will be a reference to an element present
                //after the position where we would like to insert the new item
                node.next=current;
                //previous will be a reference to 
                //an element present before the position where 
                //we would like to insert the new item.
                previous.next=node;
            }
            length++;
            return true;

        }else{
            return false;
        }
    };
   
    /**
     * This removes an item from a specified position in the list.
     */
    this.removeAt=function(position){
        //check for out-of-bounds value
        if(position > -1 && position <length){
            let current =head,
            previous,
            index=0 ;


            //removing first item
            if(position===0){
                head=current.next;

            }else{
                while(index++ <position){
                    previous=current;
                    current=current.next;
                }
                //link previous with current's next: skip it to remove
                previous.next = current.next;
            }
            length--;

            return current.element;
        }else{
            return null;
        }
    };
    /**
     * This removes an item from the list.
     */
    this.remove=function(element){
        let index=this.indexOf(element);
        return this.removeAt(index);
    };
     /**
     * This returns the index of the element in the list. If the 
     * element is not in the list, it returns -1
     */
    this.indexOf=function(element){
        let current=head,
        index=-1;
        while(current){
            if(element ===current.element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
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
    this.toString=function(){
        let current = head,
        string = '';
        while(current){
            string += current.element+(current.next?'n':'');
            current=current.next;
        }
        return string;
    };
    this.print=function(){
            console.log(this.toString());
    };

}
module.exports=LinkedList;