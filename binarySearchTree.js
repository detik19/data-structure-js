'use strict';

function BinarySearchTree(){
    let Node=function(key){
        this.key=key;
        this.left=null;
        this.right=null;
    
    };
    let root =null;
    this.insert=function(key){
        let newNode=new Node(key);
    };
    this.search=function(key){};
    this.inOrderTranverse=function(){};
    this.preOrderTransverse=function(){};
    this.postOrderTransverse=function(){};
    this.min=function(){};
    this.max=function(){};
    this.remove=function(key){};
};